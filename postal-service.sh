#!/bin/sh

rm build.tar.gz
yarn build
tar cfzv build.tar.gz build
scp build.tar.gz danielazulay.eu:~
