#!/bin/sh

git pull "origin" $1
cd public 
npm install
grunt build
return