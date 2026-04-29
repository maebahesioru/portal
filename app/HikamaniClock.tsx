"use client";
import { useEffect, useState } from "react";

function toHikamani(d: Date) {
  const epoch = new Date(2017, 0, 28);
  const msPerDay = 86400000;
  let days = Math.floor((d.getTime() - epoch.getTime()) / msPerDay);
  let year = 1;
  while (true) {
    const isLeap = (y: number) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
    const daysInYear = isLeap(2016 + year) ? 366 : 365;
    if (days < daysInYear) break;
    days -= daysInYear;
    year++;
  }
  const base = new Date(2016 + year, 0, 28);
  base.setDate(base.getDate() + days);
  return { year, month: base.getMonth() + 1, day: base.getDate() };
}

const HOLIDAYS: { label: string; month: number; day: number; color: string }[] = [
  { label: "元日",               month: 1,  day: 28, color: "text-violet-400" },
  { label: "元素マニアの日",   month: 2,  day: 10, color: "text-lime-400"   },
  { label: "ヒカマーサーフィンの日", month: 3, day: 11, color: "text-sky-400" },
  { label: "光誕祭（ヒカキン誕生日）", month: 4, day: 21, color: "text-yellow-400" },
  { label: "凍結の日",           month: 5,  day: 11, color: "text-blue-400"   },
  { label: "聖誕祭（セイキン誕生日）", month: 7, day: 30, color: "text-green-400"  },
  { label: "夏の記念日（8月10日）", month: 8, day: 10, color: "text-orange-400" },
  { label: "ヒカマー記念日",     month: 10, day: 26, color: "text-pink-400"   },
  { label: "ヒカニチ記念日",     month: 11, day:  9, color: "text-rose-400"   },
  { label: "日魚終日",           month: 12, day:  3, color: "text-cyan-400"   },
];

function nextDate(now: Date, month: number, day: number): Date {
  const d = new Date(now.getFullYear(), month - 1, day);
  if (now >= d) d.setFullYear(d.getFullYear() + 1);
  return d;
}

function calcCd(ms: number) {
  return {
    d: Math.floor(ms / 86400000),
    h: Math.floor((ms % 86400000) / 3600000),
    m: Math.floor((ms % 3600000) / 60000),
    s: Math.floor((ms % 60000) / 1000),
  };
}

export default function HikamaniClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;

  const { year, month, day } = toHikamani(now);
  const pad = (n: number) => String(n).padStart(2, "0");
  const h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();

  const sorted = HOLIDAYS
    .map((hd) => {
      const today = now.getMonth() + 1 === hd.month && now.getDate() === hd.day;
      const next = nextDate(now, hd.month, hd.day);
      const ms = next.getTime() - now.getTime();
      return { ...hd, today, ms, cd: calcCd(ms), hikYear: toHikamani(next).year };
    })
    .sort((a, b) => (a.today ? -1 : b.today ? 1 : a.ms - b.ms));

  return (
    <div className="mt-3 flex flex-col gap-4">
      <p className="text-3xl font-bold text-white tabular-nums">
        {year}年{pad(month)}月{pad(day)}日 {pad(h)}時{pad(m)}分{pad(s)}秒
      </p>
      {sorted.map(({ label, color, cd, hikYear, today }) => (
        <div key={label}>
          {today ? (
            <>
              <p className="text-xs text-gray-500 mb-1">ヒカマニ暦{year}年</p>
              <p className={`text-2xl font-bold ${color}`}>🎉 今日は{label}！</p>
            </>
          ) : (
            <>
              <p className="text-xs text-gray-500 mb-1">ヒカマニ暦{hikYear}年 {label}まで</p>
              <p className={`text-2xl font-bold tabular-nums ${color}`}>
                {cd.d}日 {pad(cd.h)}時間{pad(cd.m)}分{pad(cd.s)}秒
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
