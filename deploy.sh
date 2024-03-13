#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git config --local user.name "Haziq Hapiz"
git config --local user.email "zyqq.dev@gmail.com"

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:zyqhpz/zyqhpz.github.io.git master:gh-pages
# git push -f git@github.com:zyqhpz/zyqhpz.github.io.git master:deployment

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -