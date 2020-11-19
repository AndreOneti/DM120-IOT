const https = require('http');

const thing_name = "DM120_AndreOneti"; // "DM120_ABC";

var temperatura = 0, tempMax = 0, tempMin = 999;
var luminosidade = 0, lumMax = 0, lumMin = 999;
var umidade = 0, umidMax = 0, umidMin = 999;
var colors = ['red', 'green', 'blue'];
var status_buzzer = false;
var current_color = 'red';

function postToDweet() {

  status_buzzer = Math.floor(Math.random() * 2) ? true : false;
  current_color = colors[(Math.floor(Math.random() * 3))];

  temperatura = Math.floor(Math.random() * 40) + 1;

  if (temperatura < tempMin) {
    tempMin = temperatura;
  }

  if (temperatura > tempMax) {
    tempMax = temperatura;
  }

  umidade = Math.floor(Math.random() * 100) + 1;

  if (umidade < umidMin) {
    umidMin = umidade;
  }
  if (umidade > umidMax) {
    umidMax = umidade;
  }

  luminosidade = Math.floor(Math.random() * 100) + 1;

  if (luminosidade < lumMin) {
    lumMin = luminosidade;
  }
  if (luminosidade > lumMax) {
    lumMax = luminosidade;
  }

  var data = JSON.stringify({
    temperatura: temperatura,
    tempMax: tempMax,
    tempMin: tempMin,
    umidade: umidade,
    umidMax: umidMax,
    umidMin: umidMin,
    luminosidade: luminosidade,
    lumMax: lumMax,
    lumMin: lumMin,
    current_color: current_color,
    status_buzzer: status_buzzer
  })

  var options = {
    hostname: 'dweet.io',
    port: 80,
    path: '/dweet/for/' + thing_name,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  }

  var req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
      process.stdout.write(d)
    })
  })

  req.on('error', error => {
    console.error(error)
  })

  req.write(data)
  req.end()
}

setInterval(postToDweet, 5000);
