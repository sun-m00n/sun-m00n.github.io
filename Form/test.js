//assuming array look like this.
var arr = [
    ["Status", "Name", "Marks", "Position"],
    ["active", 'Sarfaraz', 10.0, "Front-end-dev"],
    ["active", 'John', 10.0, "Front-end-dev"],
    ["deactive", 'Raganar', 10.0, "UI designer"],
];

console.log(arrToObject(arr));

//create JSON object from 2 dimensional Array
function arrToObject(arr) {
    //assuming header
    var keys = arr[0];
    //vacate keys from main array
    var newArr = arr.slice(1, arr.length);

    var formatted = [],
        data = newArr,
        cols = keys,
        l = cols.length;
    for (var i = 0; i < data.length; i++) {
        var d = data[i],
            o = {};
        for (var j = 0; j < l; j++)
            o[cols[j]] = d[j];
        formatted.push(o);
    }
    return formatted;
}
