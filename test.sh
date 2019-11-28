#!/bin/bash

npm install

pm2 describe server > /dev/null

RUNNING=$?

if [ "${RUNNING}" -ne 0 ];
then
    echo "server not running.... start"
    pm2 start server
else
    echo "server running.... restart"
    pm2 restart server
fi