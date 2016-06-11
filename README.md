The Future Of RSS
======

There is a lack of good RSS feed tools for podcasts, so I wrote my own using [node-rss](https://github.com/dylang/node-rss). This app:

1. Reads the [master JSON file](./thefutureof.json) to get overall settings for the feed.
2. Reads episode JSON file in turn from [/episodes/](./episodes/).
3. Operates a simple web server at `localhost:1509`, to which I forward web traffic from nginx.

### Usage

    git clone https://github.com/the-future-of/rss rss
    cd rss
    npm install
    npm start

### Nginx

    location /rss/episodes/ {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;

        proxy_pass http://0.0.0.0:1509;
        proxy_redirect off;
    }

### License and Copyright
Copyright (c) 2016 Mark Grealish, and Released under the [MIT license](/LICENSE).
