const https = require('https');
function getCountries(s, p) {
  // makeRequest(s,p, (count) => {
  //   console.log(count);
  // });
  makeRequest(s,p).then(res => console.log(res));
}

function makeRequest(s,p, cb) {
  let count = 0;


  let promises = [];
  for(let i = 1; i<=25; i++) {
    let url = `https://jsonmock.hackerrank.com/api/countries/search?page=${i}`;
    let promise = new Promise((resolve) => {
      https.get(url, (res) => {
      let rawData = '';
      res.on('data', function(chunk){
        rawData += chunk;
      });
      let parsedData = '';
      res.on('end', function() {
          parsedData = JSON.parse(rawData);
          parsedData.data.forEach( (elem) => {
            if(elem.name.toLowerCase().indexOf(s.toLowerCase()) !== -1 && elem.population > p) {
              count += 1;
            }
          })
      });
        // if(i === 25) {
        //   setTimeout( () => {
        //       cb(count);
        //     }, 100)
        //   }
        if(i === 25) {
          setTimeout( () => {
            resolve(count);
          }, 100)
        }
      })
    });
    promises.push(promise);
    if(i === 25) {
      return Promise.all(promises);
    }
  }

 
}

getCountries("un", 100000);