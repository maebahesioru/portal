import os
import sys

BASE = os.path.dirname(os.path.abspath(__file__))
SKIP_DIRS = {"node_modules", ".next", ".git"}
SKIP_FILES = {"pnpm-lock.yaml"}
SKIP_STARTS = {".env", "all-code"}
MAX_CHARS = 90_000

parts = []
total = 0
file_idx = 1


def flush():
    global parts, file_idx
    if not parts:
        return
    name = "all-code.txt" if file_idx == 1 else f"all-code-{file_idx}.txt"
    path = os.path.join(BASE, name)
    with open(path, "w", encoding="utf-8") as f:
        f.write("".join(parts))
    print(f"Wrote: {name} ({len(''.join(parts)):,} chars)")
    parts = []
    file_idx += 1


def add_file(rel, content):
    global total
    header = f"\n{'=' * 80}\nFILE: {rel}\n{'=' * 80}\n\n"
    block = header + content + "\n"

    if parts and len("".join(parts)) + len(block) > MAX_CHARS:
        flush()
    parts.append(block)
    total += 1


def walk(directory):
    try:
        for entry in os.scandir(directory):
            if entry.is_dir():
                if entry.name not in SKIP_DIRS and not entry.name.startswith("."):
                    walk(entry.path)
            elif entry.is_file():
                if entry.name in SKIP_FILES:
                    continue
                if any(entry.name.startswith(p) for p in SKIP_STARTS):
                    continue
                try:
                    stat = entry.stat()
                    if stat.st_size > 500_000:
                        continue
                    with open(entry.path, "r", encoding="utf-8", errors="replace") as f:
                        content = f.read().replace("\r\n", "\n")
                    rel = os.path.relpath(entry.path, BASE).replace("\\", "/")
                    add_file(rel, content)
                except (PermissionError, UnicodeDecodeError, OSError):
                    pass
    except PermissionError:
        pass


if __name__ == "__main__":
    walk(BASE)
    flush()
    print(f"Done. {total} files, {file_idx - 1} output files")
