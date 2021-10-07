#!/bin/bash

set -e

NODE_ENV=production npm run build
cd dist
git init
git add -A
git commit -m 'Deployment'
git push -f https://github.com/shamashel/paulies-pizza.git master:gh-pages

cd -