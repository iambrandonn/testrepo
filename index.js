const http = require('http')

http
  .createServer((req, res) => {
    res.write('hello other world')
    res.end()
  })
  .listen(process.env.PORT || 8000)
