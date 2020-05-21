var xhr = new XMLHttpRequest;
xhr.open('get', 'http://127.0.0.0:8088', true);
xhr.send(null);
xhr.responseText;
xhr.HEADERS_RECEIVED;
xhr.addEventListener('readystatechange');