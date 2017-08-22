#!/usr/bin/env bash

export ENVFILE="${BUDDYBUILD_SECURE_FILES}/.env"
echo "exported ENFILE to ${ENVFILE}."
echo "echoing files in that folder"

for file in ${BUDDYBUILD_SECURE_FILES}/*; do
  echo ${file##*/}
done
