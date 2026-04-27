const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const projects = [
  'twitterillustsrarch','uno','nareaitter','sukikirai','hikafuwa-box',
  'narikitter','hikamers-minecraft','twigacha','retweet-clicker',
  'hikakinmaniasns','portfolio','hikamerautowiki','hikamernews',
  'hikamersakinator','portal','hikamerslibrary'
];

for (const p of projects) {
  const dir = path.join('C:/Users/maeba/Desktop', p);
  try {
    // Check layout file
    const layouts = ['app/layout.tsx', 'app/layout.ts', 'src/app/layout.tsx', 'src/app/layout.ts'];
    let found = false;
    for (const l of layouts) {
      const f = path.join(dir, l);
      if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');
        // Add a tiny trigger comment
        content = content.replace('export const metadata', '// rebuild trigger\nexport const metadata');
        fs.writeFileSync(f, content, 'utf8');
        found = true;
        break;
      }
    }
    if (!found) {
      // Add to next.config instead
      const nc = path.join(dir, 'next.config.js');
      const ncts = path.join(dir, 'next.config.ts');
      if (fs.existsSync(nc)) {
        let c = fs.readFileSync(nc, 'utf8');
        c = '// rebuild trigger\n' + c;
        fs.writeFileSync(nc, c, 'utf8');
      } else if (fs.existsSync(ncts)) {
        let c = fs.readFileSync(ncts, 'utf8');
        c = '// rebuild trigger\n' + c;
        fs.writeFileSync(ncts, c, 'utf8');
      }
    }
    
    execSync('git add -A', { cwd: dir, stdio: 'pipe' });
    execSync('git commit -m "trigger redeploy for env var update"', { cwd: dir, stdio: 'pipe' });
    execSync('git push origin HEAD', { cwd: dir, stdio: 'pipe' });
    console.log('PUSHED:', p);
  } catch (e) {
    console.log('ERR:', p, e.stderr ? e.stderr.toString().trim().slice(0, 80) : e.message.split('\n')[0]);
  }
}
