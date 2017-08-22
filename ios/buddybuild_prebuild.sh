#!/usr/bin/env bash

export ENVFILE="${BUDDYBUILD_SECURE_FILES}/.env"
echo "exported ENVFILE to ${ENVFILE}."
echo "echoing files in ${BUDDYBUILD_SECURE_FILES}/"

for file in ${BUDDYBUILD_SECURE_FILES}/*; do
  echo ${file##*/}
done
