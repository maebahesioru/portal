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
    execSync('git add -A', { cwd: dir, stdio: 'pipe' });
    try {
      execSync('git commit -m "fix: OGP metadata and site URL"', { cwd: dir, stdio: 'pipe' });
    } catch (commitErr) {
      const errStr = commitErr.stderr ? commitErr.stderr.toString() : commitErr.message;
      if (errStr.includes('nothing to commit')) {
        console.log('SKIP:', p, '— nothing to commit');
        continue;
      }
      throw commitErr;
    }
    execSync('git push origin HEAD', { cwd: dir, stdio: 'pipe' });
    console.log('OK:', p);
  } catch (e) {
    const errStr = e.stderr ? e.stderr.toString().trim() : e.message.split('\n')[0];
    console.log('ERR:', p, '|', errStr.slice(0, 100));
  }
}
