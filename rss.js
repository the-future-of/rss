const rss = require('rss');
const http = require('http');
const opts = require('./thefutureof.json');
const episodes = require('require-dir')('./episodes/');
const feed = new rss(opts);

Object.keys(episodes).forEach(ep => feed.item(episodes[ep]));

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(feed.xml());
}).listen(1509, '0.0.0.0');
