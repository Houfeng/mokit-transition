#!/bin/bash

set -e

rm -rf ./dist/**
mkdir -p ./dist/js/
cp -rf ./node_modules/mokit/dist/mokit.min.js ./dist/js/mokit.min.js
cp -rf ./node_modules/mokit/dist/mokit.js ./dist/js/mokit.js