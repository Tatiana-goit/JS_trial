const main = function (x, y, callback) {
    // const result = callback(x, y);
    // console.log(result)
    console.log(callback(x, y))

}
 
const add = function (a, b) {
    return a + b;
};

const sub = function (a, b) {
    return a - b;
};


main(2, 5, add);
main(2, 5, sub);
main(2, 5, function (a, b) {
    return a * b;
});
main(2, 5, function (a, b) {
    return a / b
});
