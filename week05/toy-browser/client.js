const net = require('net');

class Request {
  // method, url = host + port + path
  // headers
  // body: k/v
  constructor(options) {
    this.method = options.method || 'GET';
    this.host = options.host;
    this.port = options.port || 80;
    this.path = options.path || '/';

    this.body = options.body || {};
    this.headers = options.headers || {};

    if (!this.headers['Content-Type']) {
      this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    if (this.headers['Content-Type'] === 'application/json') {
      this.bodyText = JSON.stringify(this.body);
    } else if (this.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&');
    }

    this.headers['Content-Length'] = this.bodyText.length;
  }

  toString() {
    return `${this.method} ${this.path} HTTP/1.1
${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}\r\n
${this.bodyText}`;
  }

  send(connection) {
    return new Promise((resolve, reject) => {
      if (connection) {
        connection.write(this.toString());
      } else {
        connection = net.createConnection({
          host: this.host,
          port: this.port
        }, () => {
          connection.write(this.toString());
        });
      }

      connection.on('data', data => {
        resolve(data.toString());
        connection.end();
      });

      connection.on('error', err => {
        reject(err.toString());
        connection.end();
      })
    });
    
  }
}

class Response {

}

void async function () {
  let request = new Request({
    method: 'POST',
    host: '127.0.0.1',
    port: 8088,
    path: '/',
    headers: {
      ['X-Foo2']: 'custom'
    },
    body: {
      name: 'lily',
      todo: 'study'
    }
  });
  let response = await request.send();
  console.log(response);
}()

// 01:22:30


// const client = net.createConnection({
//   host: '127.0.0.1',
//   port: 8088}, () => {
//   // 'connect' listener.
//   console.log('connected to server!');
  
//   let request = new Request({
//     method: 'POST',
//     host: '127.0.0.1',
//     port: 8088,
//     path: '/',
//     headers: {
//       ['X-Foo2']: 'custom'
//     },
//     body: {
//       name: 'lily',
//       todo: 'study'
//     }
//   });
//   client.write(request.toString());
// });
// client.on('data', (data) => {
//   console.log(data.toString());
//   client.end();
// });
// client.on('end', () => {
//   console.log('disconnected from server');
// });
// client.on('error', (err) => {
//   console.log(err);
//   client.end();
// })