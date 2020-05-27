const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request, received');
  console.log(req.headers);

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(
`<html maaa=a>
<head>
  <style>
    body div #myid {
      with: 100px;
      background-color: #FF5000;
    }
    body div img {
      with: 30px;
      background-color: #FF11111;
    }
  </style>
</head>
<body>
  <div>
    <img id="myid"/>
    <img/>
  </div>
</body>
</html>
`
  );
});

server.listen(8088);