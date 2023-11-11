"use strict";
// ****************      1 dars ****************
// const a = "hello";
// console.log(a);
// console.log('hi everyone');
// let user: {name:string,age:number} = {
//     name: "Ali",
//     age:20
// }
// let user1: any = {
//     name: "Ali",
//     age:20
// }
// console.log(user.name);
// console.log(user.age);
// ****************      2 dars ****************
// function pow(x, y) {
//   return x ** y;
// }
// function pow1(x: number, y: number) {
//   return x ** y;
// }
// let arr: string[] = ["Apple", "Banana"]
// let arrnum: number[] = [1, 2, 3,]
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.BadRequest);
console.log(StatusCodes);
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 2] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 3] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 4] = "Book";
})(PrintMedia || (PrintMedia = {}));
var PrintMedia1;
(function (PrintMedia1) {
    PrintMedia1["Newspaper"] = "Newspaper";
    PrintMedia1["Newsletter"] = "Newsletter";
    PrintMedia1["Magazine"] = "Magazine";
    PrintMedia1["Book"] = "Book";
})(PrintMedia1 || (PrintMedia1 = {}));
var PrintMedia2;
(function (PrintMedia2) {
    PrintMedia2[PrintMedia2["Newspaper"] = 1] = "Newspaper";
    PrintMedia2[PrintMedia2["Newsletter"] = 45] = "Newsletter";
    PrintMedia2["Magazine"] = "Magazine";
    PrintMedia2["Book"] = "Book";
})(PrintMedia2 || (PrintMedia2 = {}));
console.log(PrintMedia);
console.log(PrintMedia1);
console.log(PrintMedia2);
//# sourceMappingURL=index.js.map