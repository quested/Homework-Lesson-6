function push(arr, item) {
  for (var i = 1; i <arguments.length; i++) {
    arr[arr.length] = arguments[i];  
  }
};

push(arr, item);
console.log(arr);



function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

forEach(arr, callback);

function callback() {};



function map(arr, callback) {
  var newMap = [];

  for (var i = 0; i < arr.length; i++) {
    newMap.push(callback(arr[i], i, arr));
  }

  return newMap;
};

map(arr, callback);
console.log(newMap);

function callback() {};



function some(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }

  return false;
};

some(arr, callback);

function callback() {};



function every(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }

  return true;
};

every(arr, callback);

function callback() {};



function filter(arr, callback) {
  var newfilter = [];

  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      newfilter.push(callback(arr[i], i, arr));
    }
  }

  return newfilter;
};

filter(arr, callback);
console.log(newfilter);

function callback() {};