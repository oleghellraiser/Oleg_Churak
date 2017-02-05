module.exports.insertionSort = function (myArray) {
    console.log("insertionSort running...\n");
    console.time('test time');
    var length = myArray.length;
    for (var i = 1; i < length; ++i) {
        var temp = myArray[i];
        var j = i - 1;
        for (; j >= 0 && myArray[j] > temp; --j) {
            myArray[j + 1] = myArray[j];
        }
        myArray[j + 1] = temp;
    }
    console.timeEnd('test time');
    return myArray;
}

module.exports.bubbleSort = function (myArray) {
    console.log("bubbleSort running...\n");
    console.time('test time');

    var length = myArray.length - 1;
    do {
        var swapped = false;
        for (var i = 0; i < length; ++i) {
            if (myArray[i] > myArray[i + 1]) {
                var temp = values[i];
                myArray[i] = myArray[i + 1];
                myArray[i + 1] = temp;
                swapped = true;
            }
        }
    }
    while (swapped == true)
    console.timeEnd('test time');
    return myArray;
};


module.exports.quickSort = function (myArray, left, right) {
    console.log("quickSort running...\n");
    console.time('test time');

    var len = myArray.length,
        pivot,
        partitionIndex;


    if (left < right) {
        pivot = right;
        partitionIndex = partition(myArray, pivot, left, right);

        quickSort(myArray, left, partitionIndex - 1);
        quickSort(myArray, partitionIndex + 1, right);
    }
    console.timeEnd('test time');
    return myArray;

    function partition(arr, pivot, left, right) {
        var pivotValue = arr[pivot],
            partitionIndex = left;

        for (var i = left; i < right; i++) {
            if (arr[i] < pivotValue) {
                swap(arr, i, partitionIndex);
                partitionIndex++;
            }
        }
        swap(arr, right, partitionIndex);
        return partitionIndex;
    }

    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

module.exports.mergeSort = function (myArray) {
    console.log("mergeSort running...\n");
    console.time('test time');

    myArray = broke(myArray);
    console.timeEnd('test time');
    return myArray;

    function broke(arr) {
        if (arr.length < 2)
            return arr;

        var middle = parseInt(arr.length / 2);
        var left = arr.slice(0, middle);
        var right = arr.slice(middle, arr.length);

        return merge(broke(left), broke(right));

    }

    function merge(left, right) {
        var result = [];

        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        while (left.length)
            result.push(left.shift());

        while (right.length)
            result.push(right.shift());

        return result;
    }
}

module.exports.shellSort = function (myArray) {
    console.log("shellSort running...\n");
    console.time('test time');

    var increment = myArray.length / 2;
    while (increment > 0) {
        for (i = increment; i < myArray.length; i++) {
            var j = i;
            var temp = myArray[i];

            while (j >= increment && myArray[j - increment] > temp) {
                myArray[j] = myArray[j - increment];
                j = j - increment;
            }

            myArray[j] = temp;
        }

        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment * 5 / 11);
        }
    }
    console.timeEnd('test time');

    return myArray;
}

module.exports.countingSort = function (myArray, min, max) {
    console.log("countingSort running...\n");
    console.time('test time');

    var i, z = 0, count = [];

    for (i = min; i <= max; i++) {
        count[i] = 0;
    }

    for (i = 0; i < myArray.length; i++) {
        count[myArray[i]]++;
    }

    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            myArray[z++] = i;
        }
    }
    console.timeEnd('test time');

    return myArray;
}

//================================================================================
module.exports.maxMinAvg = function (myArray) {
    var max = myArray[0][0];
    var min = myArray[0][0];
    var sum = myArray[0][0];
    for (var i = 1; i < myArray.length; i++) {
        for (var j = 1; j < myArray[myArray.length - 1].length; j++) {
            if (myArray[i][j] > max) {
                max = myArray[i][j];
            }
            if (myArray[i][j] < min) {
                min = myArray[i][j];
            }
            sum = sum + myArray[i][j];
        }
    }
    var avg = sum / (myArray.length * myArray[myArray.length - 1].length);
    return [max, min, avg];
}
//================================================================================
module.exports.drawTriangle1 = function (myArray) {
    for (var i = 0; i < myArray.length; i++) {
        for (var j = 0; j < myArray[myArray.length - 1].length; j++) {
            if ((i <= j) && (i + j <= myArray.length - 1)) {
                myArray[i][j] = 1;
            }
            else if ((i >= j) && (i + j >= myArray.length - 1)) {
                myArray[i][j] = 1;
            }
            else {
                myArray[i][j] = 0;
            }
        }
    }
    return myArray;
}
//================================================================================
module.exports.drawTriangle2 = function (myArray) {
    for (var i = 0; i < myArray.length; i++) {
        for (var j = 0; j < myArray[myArray.length - 1].length; j++) {
            if ((i >= j) && (i + j <= myArray.length - 1)) {
                myArray[i][j] = 1;
            }
            else {
                myArray[i][j] = 0;
            }
        }
    }
    return myArray;
}
//================================================================================
module.exports.sortArrayOfObjectsByPropertiesCount = function (myArray, ordering) {
    myArray.sort(function (a, b) {
        if (ordering === 'asc') {

            return Object.keys(a).length - Object.keys(b).length;
        }
        else if (ordering === 'desc') {
            return -(Object.keys(a).length - Object.keys(b).length);
        }
    });

    return myArray;
}