var s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
let arry = s.split(';')
let source = [];
let sourceObject = {};
function OrderIn(arr) {
    return arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
}
for (let i = 0; i < arry.length; i++) {
    let item = arry[i].split(":");
    let key = item[1].toLocaleUpperCase();
    let value = item[0].toLocaleUpperCase();
    if (!sourceObject[key]) {
        sourceObject[key] = [value];
        source.push(key);
    }
    else {
        sourceObject[key].push(value)
    }
}
source = OrderIn(source);
var str = ""
for (let i = 0; i < source.length; i++) {
    OrderIn(sourceObject[source[i]]);
    for (let j = 0; j < sourceObject[source[i]].length; j++) {
        str = `(${source[i]},${sourceObject[source[i]][j]})` + str
    }
}
console.log(str);