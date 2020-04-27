require('dotenv').config()
const MongoClient = require("mongodb").MongoClient;
const { performance, PerformanceObserver } = require('perf_hooks');
const { generateDocument, getCollection, insertMany, find } = require('./services/MongoService');


const uri = process.env.DB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const database = process.env.MONGO_DB;

client.connect(async (err) => {
  
  // sequentialSearch
  const sequentialSearch = (arr, item) => {
    let pos = 0;
    let found = false;

    while (pos < arr.length && !found) {
      arr[pos] === item ? found = true : pos = pos + 1;
    }

    return console.log(found);
  }

  let start = performance.now()
  sequentialSearch(arr, 6552);
  let time = performance.now() - start
  console.log(`time: ${time}ms`);


  // binarySearch
  const binarySearch = (arr, item) => {
    let first = 0;
    let last = arr.length - 1;
    let found = false;
    arr = arr.sort();
    while (first <= last && !found) {
      middleList = Math.ceil((first + last) / 2);
      if (arr[middleList] == item) {
        found = true;
      }
      else {
        if (item < arr[middleList]) {
          last = middleList - 1;
        }
        else {
          first = middleList + 1;
        }
      }
    }
    return console.log(`binarySearch found: ${found}`);
  }

  let start = performance.now()
  binarySearch(arr, 6552);
  let time = performance.now() - start
  console.log(`time: ${time}ms`);


  client.close();
});