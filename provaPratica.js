const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')
const os = require('os')

//atv1

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     if (req.url === '/info') {
//         res.end(JSON.stringify({
//             sistema: os.version(),
//             memoria: os.freemem(),
//             diretorio: os.homedir()
//           }));
//     }else {
//         res.end()
//     }
//   })
  
//   server.listen(8080, () => {
//     console.log('http://localhost:8080')
//   });


//atv2

// const adress = 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf'
// console.log(path.parse(adress))


//atv3

// const myURL = url.parse('https://nodejs.org/api/url.html#url_new_url_input_base');
// console.log(myURL)


//atv4

// fs.rename('velho.txt', 'novo.txt', (err) => {
//     if (err) {
//         console.log(err)
//     }
// })


//atv5

// console.log(os.cpus())