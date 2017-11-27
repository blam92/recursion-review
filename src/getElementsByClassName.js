// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  var nodesWithClassName = [];
  if(node === undefined) {
    node = document.body;
  }
  
  if(node.classList && node.classList.contains(className)) {
    nodesWithClassName.push(node);
  }

  var childNodes = node.childNodes;
    //if there are call getElementsByClassName with its childNode
  for(var i = 0; i < childNodes.length; i++) {
    var fromChild = getElementsByClassName(className, childNodes[i]);
    nodesWithClassName = nodesWithClassName.concat(fromChild);
  }

  return nodesWithClassName;
};

/*
 Visualization

body
  section
  section
    p
    p
  section

child of body = [section, section, section]

nodesWithClassName.concat(array)
*/
