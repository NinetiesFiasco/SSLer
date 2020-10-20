fs = require('fs')

var selfsigned = require('selfsigned')
var attrs = [{ name: 'commonName', value: 'localhost' }]
var pems = selfsigned.generate(attrs, { days: 365 })

const err = err => {
  if (err) 
    console.log(err)
}

fs.writeFile('private.key',pems.private,err)
fs.writeFile('public.key',pems.public,err)
fs.writeFile('certificate.crt',pems.cert,err)
console.log(pems.private)
console.log(pems.public)
console.log(pems.cert)