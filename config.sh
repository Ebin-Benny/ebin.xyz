#!/bin/bash

rm /etc/nginx/sites-enabled/default

sudo ln -s ./ebin.xyz /etc/nginx/sites-available/ebin.xyz

pm2 start ./webhook/index.js
