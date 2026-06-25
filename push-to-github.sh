#!/bin/bash

echo "Pushing BEG Next.js project to GitHub..."
echo ""

cd /Users/ccsc/Downloads/Claude/outputs/beghr-nextjs

git remote add origin https://github.com/toribeghr/beghr-nextjs.git
git branch -M main
git push -u origin main

echo ""
echo "✅ Done! Code pushed to GitHub."
