#!/usr/bin/env bash

export ENVFILE="${BUDDYBUILD_SECURE_FILES}/.env"
echo "export ENVFILE=\"${BUDDYBUILD_SECURE_FILES}/.env\"" >> $HOME/.bashrc
# echo "buddybuild workspace folder is ${BUDDYBUILD_WORKSPACE}."
# echo "exported ENVFILE to ${ENVFILE}."

# echo "Creating environment config file"

# #TODO: This is just a POC, this secrets will be deleted after hack-night
# touch $ENVFILE
# tee $ENVFILE > /dev/null <<EOF
# API_KEY=AIzaSyBQnTKUKjQ0HkLUdHVs7a8_hFyCO-nbT-M
# AUTH_DOMAIN=caronaboard-hack-night.firebaseapp.com
# DATABASE_URL=https://caronaboard-hack-night.firebaseio.com
# STORAGE_BUCKET=caronaboard-hack-night.appspot.com
# MESSAGING_SENDER_ID=905421185910
# EOF
