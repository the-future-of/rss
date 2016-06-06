var rss = require('rss'),
    http = require('http'),
    dir = require('require-dir'),
    opts,
    epsides,
    feed;

opts = require('./thefutureof.json');
episodes = dir('./episodes/');
feed = new rss(opts);

Object.keys(episodes).forEach(ep => feed.item(episodes[ep]));

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(feed.xml());
}).listen(1509, '0.0.0.0');
