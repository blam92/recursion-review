// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

var GlobalCounter = function(json) {
  this.index = 0;
  this.main = json;
};
GlobalCounter.prototype.next = function() { this.index++; };
GlobalCounter.prototype.prev = function() { this.index--; };
GlobalCounter.prototype.curChar = function() { return this.main[this.index]; };
GlobalCounter.prototype.nextChar = function() { 
  this.next();
  return this.curChar();
};


var parseJSON = function(json) {
  var counter = new GlobalCounter(json);

  var makeString = function() {
    var string = counter.curChar();
    if( string === '"') {
      return "";
    } else if(counter.nextChar() !== '"') {
      string += makeString();
    }  

    return string;
  };

  var makeElement = function() {
    var element = [];

    element.push(identifier());

    return element;
  };

  var makeArray = function() {
    var result = [];
    
    if (counter.curChar() !== ']') {
      result = result.concat(makeElement());
    }

    return result;
  };


  var identifier = function() {

    if (counter.curChar() === '[') {
      counter.next();
      return makeArray();
    } else if(counter.curChar() === '"') {
      counter.next();
      return makeString();
    }
  };


  //identifier function to identify and return the correct datat type.
  return identifier();
  
};

var ownJSONTest = "[\"test\"]";

console.log(parseJSON(ownJSONTest));
