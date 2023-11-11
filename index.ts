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

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log(StatusCodes.BadRequest);
console.log(StatusCodes);

enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}
enum PrintMedia1 {
    Newspaper = "Newspaper",
    Newsletter = "Newsletter",
    Magazine = "Magazine",
    Book = "Book"
}
enum PrintMedia2 {
    Newspaper = 1,
    Newsletter = 45,
    Magazine = "Magazine",
    Book = "Book"
}

console.log(PrintMedia);
console.log(PrintMedia1);
console.log(PrintMedia2);


