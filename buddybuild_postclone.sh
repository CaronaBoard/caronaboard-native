#!/usr/bin/env bash

echo "Creating .env file"
#TODO: This is just a POC, ideally we should get the whole file at once
touch .env
tee .env > /dev/null <<EOF
API_KEY='$API_KEY'
AUTH_DOMAIN='$AUTH_DOMAIN'
DATABASE_URL='$DATABASE_URL'
STORAGE_BUCKET='$STORAGE_BUCKET'
MESSAGING_SENDER_ID='$MESSAGING_SENDER_ID'
EOF

cat $ENVFILE
pwd | ls -hal
