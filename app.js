const {readFileSync ,writeFileSync } = require('fs')
console.log('Start')

const firstFile = readFileSync('./FSModuleFiles/firstFile.txt','utf-8')
console.log(firstFile);

writeFileSync('./FSModuleFiles/firstWrittenFile.txt','This is the first written file !')

writeFileSync('./FSModuleFiles/firstReadAndWrittenFile.txt',`Data from firstFile.txt : ${firstFile}`)

console.log('End');