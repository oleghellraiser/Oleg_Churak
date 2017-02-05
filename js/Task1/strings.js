
module.exports.reverse = function(myString) {
    console.log("reverse running...\n");
    return myString.split('').reverse().join('');
}

module.exports.stringEndsWith =  function(myString, subString) {
    console.log("stringEndsWith running...\n");
    return myString.endsWith(subString);
}

module.exports.stringStartsWith = function(myString, subString) {
    console.log("stringStartsWith running...\n");
    return myString.startsWith(subString);
}


String.prototype.toCamelCase = function () {
    return this.replace(/(\-|_|\s[a-z]|[A-Z])/g, function ($1) { return $1.toUpperCase().replace(/(-|\s)/, ''); });
};

module.exports.isCamelCase = function (myString) {
    console.log("isCamelCase running...\n");
    return (myString.toCamelCase() === myString);
}

String.prototype.toPascalCase = function () {
    var str = this.replace(/([a-z])([A-Z])/g, "$1_$2"); 
    return str.replace(/(\-|\s[a-z]|[A-Z])/g, function ($1) { return $1.toUpperCase().replace(/(-|\s)/, ''); });
};

module.exports.isPascalCase = function (myString) {
    console.log("isPascalCase running...\n");
    return (myString.toPascalCase() === myString);
}