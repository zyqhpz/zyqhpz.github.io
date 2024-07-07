#!/usr/bin/env sh

# Abort script on errors
set -e

bun run generate

cd .output/public

git init
git add .
git commit -m 'deploy'

git config user.name "Haziq Hapiz"
git config user.email "zyqq.dev@gmail.com"

git remote add origin https://github.com/zyqhpz/zyqhpz.github.io.git

git push -f origin master:gh-pages

cd ..
