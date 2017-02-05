module.exports.getSum = function (str1, str2) {

    var tryParse = tryToParseIntOrHex;
    if (tryParse(str1) && tryParse(str2)) {
        return tryParse(str1) + tryParse(str2);
    }

    function tryToParseIntOrHex(myString) {
        myString = myString.replace(/^0x/g, '');
        if (!/(?=[^\d])(?=[^a-fA-F])/g.test(myString)) {
            return parseInt(myString, 16);
        }
        else {
            myString = myString.replace(/[^\d]/g, '');
            return parseInt(myString, 10);
        }
    }
}
//==============================================================================
module.exports.SemiColonSON = function (myString) {
    var output = {};
    myString = myString.replace(/(?:;)([a-zA-Z\d]+)(?::)((?:.*)([a-zA-Z\d]+)(?:,)([a-zA-Z\d]+))/g, function ($1,$2,$3) {
        output[$2] = share($3);
        return '';
    });

    var tempArray = share(myString,true);
    tempArray.forEach(function (data) {
        output[data[0]] = data[1]
    });

    function share(myString, isSecondStep) {
        var array = [];
        myString.replace(/(?:;?)([a-zA-Z\d]+)(?:,)([a-zA-Z\d]+)/g, function ($1, $2, $3) {
            if(!isSecondStep){
                array[$2] = $3;
            }
            else {
                array.push([$2,$3]);
            }
            return;
        });
        return array;
    }
    return output;
}