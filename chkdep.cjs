const https = require('https');
https.get('https://saenskinmaker.hikamer.f5.si', res => {}); // just check portal
// Actually, let's check the portal's app detail page
https.get('https://hikamer.f5.si/apps/saenskinmaker', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    // Check if 開発の裏話 is an h2 or raw text
    const h2 = d.match(/<h2[^>]*>開発の裏話<\/h2>/);
    const raw = d.includes('\\\\n## 開発の裏話') || d.includes('\\n## 開発の裏話');
    console.log('h2 found:', !!h2);
    console.log('raw found:', raw);
  });
});
