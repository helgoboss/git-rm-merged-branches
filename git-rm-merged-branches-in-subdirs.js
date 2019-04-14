#!/usr/bin/env node
require('shelljs/global')
const mainBranch = process.argv[2] || 'develop'
echo(`Main branch: ${mainBranch}`)
ls().forEach(d => {
    cd(d)
    echo(`### ${d}`)
    exec(`git-rm-merged-branches ${mainBranch}`)
    cd("..")
    echo('')
})