#!/usr/bin/env node
require('shelljs/global')
const mainBranch = process.argv[2] || 'develop'
echo(`Main branch: ${mainBranch}`)
exec('git pull')
exec(`git checkout ${mainBranch}`)
exec('git pull')
exec(`git branch --merged ${mainBranch}`, { silent: true })
    .grep('-v', /(^\*|master|dev)/)
    .split('\n')
    .map(s => s.trim())
    .filter(s => s != "")
    .forEach(b => exec(`git branch -d ${b}`))