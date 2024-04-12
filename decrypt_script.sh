#!/bin/sh

# Decrypt the file
mkdir $HOME/secrets

gpg --quiet --batch --yes --decrypt --passphrase="$PASSPHRASE" \
--output $HOME/secrets/secrets.json secrets.json.gpg