
//
// edX Introduction to NodeJS
// Module 1 Assignment Lab: CSV to JSON Converter
//

const // required modules
  assert = require('assert'),
  path = require('path'),
  fs = require('fs'),
  csv=require('csvtojson');

const // input and output file names
  csvFilePath = path.join(__dirname, 'customer-data.csv'),
  jsonFilePath = path.join(__dirname, 'customer-data.json');

const jsonArr = []; // customer data as array of objecta

//
// Perform some content based assertations
//

function assertContent() {

  assert.equal(jsonArr.length,1000);

  assert.equal(Object.keys(jsonArr[0]).length, 10);
  assert.equal(jsonArr[0].id,1);
  assert.equal(jsonArr[0].first_name, "Ario");

  assert.equal(Object.keys(jsonArr[20]).length, 10);
  assert.equal(jsonArr[20].id, 21);
  assert.equal(jsonArr[20].ip_address, "171.184.151.112");

  assert.equal(Object.keys(jsonArr[999]).length, 10);
  assert.equal(jsonArr[999].id, 1000);
  assert.equal(jsonArr[999].street_address, "2374 Lillian Court");
}

//
// Perform the conversion using the cvstojson module
// quided by a "quick start" example
//

csv().fromFile(csvFilePath).on('json',(jsonObj) => {

  jsonArr.push(jsonObj);

}).on('done', (err) => {

    assert.ifError(err);
    assertContent();

    try {
      let jsonString = JSON.stringify(jsonArr, null, 2);
      fs.writeFileSync(jsonFilePath, jsonString);
    } catch (e) {
      assert.ifError(e);
    }

}); //cvs
