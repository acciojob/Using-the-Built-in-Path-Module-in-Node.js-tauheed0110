const path = require('path');

// TODO: Use path.join to join two file path segments
function joinPaths(path1, path2){
    return path.join(path1, path2);

}

const path1 = process.argv[2];
const path2 = process.argv[3];

if(!path1 || !path2){
    console.log('Provide two path to add them, command line argv');
    process.exit(1);
}
console.log(joinPaths(path1, path2));