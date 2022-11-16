const fs = require("fs")
const path = require("path")

console.log(path.join(__dirname))

const filepath = path.join(__dirname, "files");

console.log(filepath)

// console.log(process.argv[2])
// console.log(process.argv[3])

// for (let index = 0; index < 5; index++) {
//   fs.writeFileSync(filepath + `/test${index}.text`, "Hello world")
// }

// fs.readdir(filepath, (err, files) => {
//   // console.log(files)
//   files.map((value) => {
//     console.log(value)
//   })

//   files.forEach((item) => {
//     console.log(item)
//   })

// })

fs.appendFile('hello.txt', ' .. Testing Append data', (err) => {

})

setTimeout(() => {
  console.log("here")
}, 2000);

console.log("I am executed,....")

let waitingData = new Promise((resolve, reject) => {
 console.log("I am in promise,....")

    setTimeout(() => {
      resolve()
    }, 2000);

})

waitingData.then((result) => {
  console.log("I am in result")
}).catch((err) => {
  console.log("I am catch statement")
});



