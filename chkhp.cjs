const https = require('https');
https.get('https://hikamerprefecture.hikamer.f5.si', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const og = d.match(/og:image[^>]+content="([^"]+)"/);
    const icon = d.match(/rel="icon"[^>]+href="([^"]+)"/);
    console.log('og:image:', og ? og[1] : 'NONE');
    console.log('favicon:', icon ? icon[1] : 'NONE');
    console.log('uses favicon-custom:', d.includes('favicon-custom'));
    console.log('uses favicon.svg:', d.includes('favicon.svg'));
  });
});
https.get('https://hikamerprefecture.hikamer.f5.si/favicon.svg', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    console.log('favicon.svg size:', d.length, 'is vite:', d.includes('863bff'));
  });
});
https.get('https://hikamerprefecture.hikamer.f5.si/favicon-custom.svg', res => {
  console.log('favicon-custom.svg status:', res.statusCode);
});
