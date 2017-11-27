// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //for array
  if (Array.isArray(obj)) {
    var arrayObj = [];
    for(var i = 0; i < obj.length; i++) {
      arrayObj.push(stringifyJSON(obj[i]));
    } 
    return '[' + arrayObj.join(',') + ']';
  } else if(obj && typeof(obj) === 'object') {
    var objBin = [];
    for (var key in obj) {
      if (typeof(obj[key]) === 'function' || obj[key] === undefined) {
        continue;
      }
      objBin.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + objBin.join(',') + '}';
  } else if(typeof(obj) === 'string') {
    return '"' + obj + '"';
  }
  return '' + obj;  
};
