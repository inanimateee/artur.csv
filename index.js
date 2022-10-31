// Make sure we got a filename on the command line.
var strings = [];

var fs = require('fs');

try {  
    strings =
    fs.readFileSync('log.txt').toString().split("\n")
    var count = 0;
    var commits = [];
    var commcount = strings.length / 6;
    for (let i = 0; i < commcount; i++) {
        var index = count;
        var commit = [];
        commit.push(strings[index].slice(7))
        commit.push(strings[index + 1].slice(8))
        commit.push(strings[index + 2].slice(8))
        commit.push(strings[index + 4].slice(4))
        commits.push(commit);
    }   
    console.log(commits)
} catch(e) {
    console.log('Error:', e.stack);
}

