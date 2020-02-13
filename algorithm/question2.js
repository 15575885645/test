let num = process.argv[2];

if (num % 2 == 0) {
    console.error("不能使用偶数");
}

else {
    let count = Math.ceil(num / 2);
    for (let i = 0; i < count; i++) {
        let str = "";
        for (let j = 0; j < 2 * i + 1; j++) {
            str += "*"
        }
        for (let k = i; k < count - 1; k++) {
            str = " " + str;
        }
        console.log(str);
    }
    for (let i = count - 1; i - 1 >= 0; i--) {

        let str = "";
        for (let j = 0; j < 2 * i - 1; j++) {
            str += "*";
        }
        for (let k = i; k < count ; k++) {
            str = " " + str;
        }
        console.log(str);
    }
}
