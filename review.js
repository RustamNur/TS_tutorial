// 1day with TS.

/*


 ******************   1 dars   *****************
*   TypeScript is JavaScript with added 
*   syntax for 'types'.

* TypeScript is a syntactic superset of * JavaScript which adds 'static' typing.

* 2012 Microsoft -> Typescript

* TypeScript (TS) -> Objectga yo'nalti-
* rilgan, typelar bilan ishlaydigan 
* programming language hisoblanadi

* npm i -g typescript -> install
* tsc -v  -> check version
* tsc index.ts -> compile qilishini kere bo'lgan file
* tsc -init -> tsconfig.json compile qilinayotganda config qilib beradi
* 'sourceMap': true -> Ts fileda yozilgan "JOYINI" js fileda yoki console'da aniq qilib ko'rsatadi
* tsc --watch -> hamma updatelarni takror va takror tsc qilib upload qilmas uchun
* tsc locale -ru -> Boshqa tillarda error explanationlar uchun

****************** 2 dars ************************

boolean         = true | false
number          = decimal and without decimal numbers
string          = text with quotes "...", '...', `...`
bigint          = numbers over the number type
symbol          = used to create a globally unique identifier
null            = null
undefined       = undefined
object          = object , array
any             = any type
unknown         = unknow type but we can change type with "as" keyword
never           = never end boladigan bo'lsa,hatoga uchraganda
void            = void turi hech qachon hechqanday qiymatga ega
                    bo'lmagan qiymat sifatida undefined yoki null 
                    bo'lishi mumkin (qiymatr qaytarmaydigan)

* TypeScript da data typelarni nomini biriktirlgan 
* variabllarni keyingi safar yana qishlatganimizda Javascriptdagiga 
* o'hshab hohlagan ma'lumotni biriktirib ketomimizda faqat declare 
* qilingan typedagi ma'lumot bilan update qilamiz.


* TypeScriptda ikki usul biulan variabllar declare qilinadi
* -- Explicit
* -- Implicit

?       "Explicit"
*           Bu turdagi e'lon  qilinishlar uchun biz : dan keyin
*           variable ning data type nameni yozishimiz shart

*   ex//
    let firstName: string = "John"  --> writing with type

!  NOTE: Explicit type assignment are easier to read and more intentional.

* Object turdagi variablellarni declare qilishimizda ikki hil 
* ko'rinish mavjud 
* 1) : object 
* 2) : {} => {} ichidagi data haqida ham ma'lumot berish kere
*               chunki oddiy JS kabi (.) bilan access qilaolmimiz


?       "Implicit"
*           Bu turdagi delaretionlarda esa type
*           ko'rsatilmaydi, "guess" type ,
*           Assigned valuega asoslangan bo'ladi
*           Bu yo'l bilan declare bo'lgan turiga INFER 
*           ham deyiladi
*   Implicit tipdagi tayinlash qisqaroq, tezroq yoziladi va ko'pincha 
*   ishlab chiqish va sinovdan o'tkazishda qo'llaniladi.


! NOTE : tsconfig.json dan 'noImplicitAny : true 'yoqib qo'yamiz
!        har qanday hatodan holi bolish uchun 

**** Type : any ****

* 'any' is a type that disables type checking and effectively allows all types to be used.

* 'any' keywordi harqanday type checking
* ignore qilib yuboradi. Va hatolik 
* yuz bermaydi.

* buni ishlatmaslik TAVSIYA etiladi


****************** 3 dars ************************

* Typescript'da agar typelarga ko'ra
* biron hatolik yuz bersa JS'ga 
* compile qilaveradi va JS uni oddiy
* JS kodiday o'qiyveradi.

**** Type : unknown ****

* Unknown type bu 'any' tipidan ancha similar
* va safer hisoblanadi

* 'unknown' typeni ishlatish qo'l keladi
* qachonki variableni typeni bilmasangiz,
* keyinchalik o'zgartirip qo'ysa bo'ladi,lekin translatsiya qilish kere
* bo'ladi ( cast qilish kere , o'zgartirmoqchi bo'lsak).

* Translatsiya (casting) -> 'as' keywordi orqali
* biz :unknown bo'lgan variablimizni biron tipga
* biriktiramiz.


 ? *********** Signature Function ************
 
* Avvaldan berilgan shablonga ko'ra function yozib chiqish hisoblanadi
* Ya'ni uni o'zimiz yaratamiz (shablonni) keyin o'shanga ko'ra 
* function yozib chiqamiz,type shunga 1:1 ayni bo'lishi kere.

ex// 

let c : (x:number, y:string)=>string
c = function (a:number, b:number):number {   -> hatolik beradi
    return a + b;
}

c = function (a:number, b:string):string {
    return a + b
}

 ? *********** Function Overloads ************

 * TypeScript provides the concept of function overloading. You can have multiple 
 * functions with the same name but different parameter types and return type. 
 * However, the number of parameters should be the same.
 
 * TypeScript funksiyani overload (haddan tashqari yuklash) tushunchasini beradi. 
 * Siz bir xil nomga ega bo'lgan bir nechta funksiyalarga ega bo'lishingiz mumkin, 
 * lekin parametr turlari va qaytish turi har xil. Biroq, parametrlar soni bir xil bo'lishi kerak.
 
 ex//
    
    function add(a:string, b:string):string; -> parametralar 'string' bopqo'lsa

    function add(a:number, b:number): number;  -> parametralar 'number' bopqo'lsa

    function add(a: any, b:any): any {   --> Asosiy shablon 
    return a + b;
    }

    add("Hello ", "Steve"); // returns "Hello Steve"  --> 'string' bo'lganda

    add(10, 20); // returns 30  --> 'number' bo'lganda


 ? *********** Numbers ************

 * Methodlari 

    - toExponential() =>    nechchi honali songa oid ekanligini ko'rsatadi.
                            string qaytaradi
    - toFixed() =>          parametr olmasa , sonni yahlitlaydi,parametr 
                            olsa butun sondan keyingi (verguldan keyingi 
                            nechta son chiqishini) ko'rsatadi, string
                            qaytaradi
    - toLocaleString() =>   Numberni numberning local maxsus ko'rinishiga
                            aylantiradi, string qaytaradi
    - toPrecision()    =>   yahlit son qiladi, verguldan keyin nechta
                            raqm ko'rinishini kerakligini bajaradi
                            string qaytaradi
    - toString()       =>   Stringga conversion qiladi
    -valueOf()         =>   Numberni primitive qiymatini return qiladi,
                            number qaytaradi.


 ? *********** Arrays ************

 
   !Square Brackets
  - ...DataType...[]
      * string[],number[],...
     
   !Generic Array type
  - Array<...DataType...>
      * Array<string>, Array<number>,...
     
   !Array Declaration and Initialization
   - let fruits : Array<string>;
   fruits = ["Apple", "Banana"]

   ! Multi Type Array
   -let values: (string | number)[] = ["Apple",2,3,"Orange"]
   
   -let values: Array<string | number>[] = ["Apple",2,3,"Orange"]

   !Access Array Elements
   index bo'yicha access qilaolamiz

   * let fruits: string[] = ['Apple', 'Orange', 'Banana']; 
    fruits[0]; // returns Apple
    fruits[1]; // returns Orange
    fruits[2]; // returns Banana
    fruits[3]; // returns undefined

    !Access Array Elemets using Loop

    let fruits: string[] = ['Apple', 'Orange', 'Banana']; 

    for(var index in fruits) { 
    console.log(fruits[index]);  // output: Apple Orange Banana
    }

    for(var i = 0; i < fruits.length; i++){ 
    console.log(fruits[i]); // output: Apple Orange Banana
    }
  
 ? *********** Tuples ************

    * Har hil turdagi dataTypelardan tashkil topgan bo'ladi
    * [ ... ] ichida data type ismlari joylashadi.
    * 
    var empId: number = 1;
    var empName: string = "Steve";        

    *Tuple type variable 
    var employee: [number, string] = [1, "Steve"];

    var employee: [number, string] = [1, "Steve"];
    var person: [number, string, boolean] = [1, "Steve", true];

    var user: [number, string, boolean, number, string];// declare tuple variable
    user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable
  
    *Tuple Array
    var employee: [number, string][];
    employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

    * Access qilish huddi Arraylarga access kabi qilinadi,
    * chunki Tuplear ham Array ko'rinishida bo'ladilar.
    * 
    var employee: [number, string] = [1, "Steve"];
    employee[0]; // returns 1
    employee[1]; // returns "Steve"

    * Add qilish ham push() yordamida bo'ladi
    *  (!) Lekin Tuple uchun ko'rsatilgan dataType bo'lishi SHART*
    * 
    var employee: [number, string] = [1, "Steve"];
    employee.push(2, "Bill"); 
    console.log(employee); //Output: [1, 'Steve', 2, 'Bill']

    employee.push(true) 

    test.ts(4,15): error TS2345: 
    Argument of type 'true' is not assignable to parameter of type      
    'number | string'.
  
  
 ? *********** Enums ************

    *  Enumlar bizga nomli konstantalar to'plamini e'lon qilish imkonini 
    *  beradi, ya'ni raqamli yoki satr qiymatlari bo'lishi mumkin bo'lgan 
    *  tegishli qiymatlar to'plami.

    Enumlarning uch turi mavjud:

        Numeric Enum
        String Enum
        Heterojen Enum

    ! Numeric Enum
   
        *-> Qator qiymatlarini raqamlar sifatida saqlaydi.

        *-> enum keywordi orqali yoziladi.

        *-> Birinchi raqam har doim 0 hisoblanadi, boshqa qiymatlar
        *   esa 1 ga oshirilib davom etadi.

        ex// Default

            enum PrintMedia {
                Newspaper = 0,
                Newsletter = 1,
                Magazine = 2,
                Book = 3
            }

        *-> Agar biz ozimiz qandaydir bir raqam yozsak, shu raqamdan 
        *   1 ga increment bo'lib oshaveradi.
           
        
        ex//  Initialized

            enum PrintMedia {
                Newspaper = 1,
                Newsletter,
                Magazine,
                Book
            }

            function getMedia(mediaName: string): PrintMedia {
                if (  mediaName === 'Forbes' || mediaName === 'Outlook'){
                    return PrintMedia.Magazine;
                }
            }

            let mediaType: PrintMedia = getMedia('Forbes'); 
            
            Output: //returns Magazine

        *-> Agar biz har bir enum value'ga o'ziga hos unique
        *   qiymat bersak, automatic increment bo'lmaydi


        ex//  Fully initialized

            enum StatusCodes {
                NotFound = 404,
                Success = 200,
                Accepted = 202,
                BadRequest = 400
            }

            console.log(StatusCodes.NotFound); // logs 404

            console.log(StatusCodes.Success); // logs 200


    ! String Enum
    
        *-> Readable
       
        *-> Numericdan ko'ra ko'proq hollarda ishlatiliniladi.
       
       
        ex //  Declare and Access to String Enum

            enum PrintMedia {
                Newspaper = "NEWSPAPER",
                Newsletter = "NEWSLETTER",
                Magazine = "MAGAZINE",
                Book = "BOOK"
            }

            PrintMedia.Newspaper; //returns NEWSPAPER
            PrintMedia['Magazine'];//returns MAGAZINE

        *-> Numeric Enumdan yana bir farqi shundaki 
        *   NE 'lar automatic default qiymati bor
        *   SE 'lar esa individual yozilishi kere
        
    ! Heterojen Enum

        *-> Numeric va String Enum'lardan tashkil topgan bo'ladi
       
       
        ex//

            enum Status { 
                Active = 'ACTIVE', 
                Deactivate = 1, 
                Pending
            }

    

    ! Reverse Mapping

        *-> TypeScriptda Enum'lar reverse mapping'ni support
        *   qiladi. reverse mapping = It means we can access the value of 
        *   a member and also a member name from its value.
    

        ex// 

        enum PrintMedia {
            Newspaper = 1,
            Newsletter,
            Magazine,
            Book
        }

        PrintMedia.Magazine;   // returns  3
        PrintMedia["Magazine"];// returns  3
        PrintMedia[3];         // returns  Magazine

        *-> Reverse mapping faqatgina numeric enumlarni
        *   support qiladi holos, string enum bilan ishlamaydi
        *   heterojenlar bilan esa ishlaydi ularda faqat numeric
        *   enumlargina reverse holatdda bo'ladi holos.
        * 
        * 
        ex//
                Heterojen Enum example...

            enum PrintMedia2 {
                Newspaper = 1,
                Newsletter = 45,
                Magazine = "Magazine",
                Book = "Book"
            }

            {                             Output
                '1': 'Newspaper',
                '45': 'Newsletter',
                Newspaper: 1,
                Newsletter: 45,
                Magazine: 'Magazine',
                Book: 'Book'
            }


*/
