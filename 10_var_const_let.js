//  ------------------ var, const, let ------------------------- //

//  ---- Przykład #1 ----  //

var a = "a -zakres globalny";
let b = "b- zakres globalny";
const c = "c - zakres globalny";

{
    var a = "a -zakres lokalny";
    let b = "b- zakres lokalny";
    const c = "c - zakres lokalny";
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);
console.log(c);


// var powoduje, że zakres zmiennej jest cały czas globalny, nawet jeśli zmienna jest  w bloku funkcji

//   ---- Przykład #2 ----  //
console.log(' ');
console.log("Przykład z użyciem var");
console.log(' ');
function varTest(){
    var a = true;
    if(true){
        var a = false;
        console.log(a);
    }
    console.log(a);
}
varTest();

console.log(' ');
console.log("Przykład z użyciem let");
console.log(' ');
function letTest(){
    var b = true;
    if(true){
        let b = false;
        console.log(b);
    }
    console.log(b);
}
letTest();

console.log(' ');
console.log("Przykład z użyciem const");
console.log(' ');

function constTest(){
    const c = true;
    if(true){
        const c = false;
        console.log(c);
    }
    console.log(c);
}
constTest();

// Jeżeli chodzi o zakres, const zachowuje się tak samo jak let
console.log(' ');
console.log("Przykład z użyciem null przypisanego do var globalnego");
console.log(' ');
var aa = null;

function varaaTest() {
    var aa = true;
    if(true){
        var aa = false;
        console.log(aa);
    }
    console.log(aa);
}
varaaTest();
console.log(aa);

console.log(' ');
console.log("Przykład z użyciem null przypisanego do let globalnego");
console.log(' ');

let bb = null;

function letbbTest() {
    let bb = true;
    if(true){
        let bb = false;
        console.log(bb);
    }
    console.log(bb);
}
letbbTest();
console.log(bb);

console.log(' ');
console.log("Przykład z użyciem null przypisanego do const globalnego");
console.log(' ');

const cc = null; //Zakres globalny

function constccTest() {
    const cc = true; //Zakres lokalny - funkcja
    if(true){
        const cc = false; //Zakres lokalny - ifa
        console.log(cc);
    }
    console.log(cc);
}
constccTest();
console.log(cc);

// ----------------------- hoisting ------------------------ //

// let i const nie ma hoistingu

//  var - hoisting deklaracji wartość undefined
//  w ramach zakresu globalnego i funkcji (ale bez innych zakresów blokowych)


// ------------------------------------------------------------------- //
// -----------  TWORZENIE WŁAŚCIWOŚCI OBIEKTU GLOBALNEGO ------------ //
// ----------------------------------------------------------------- //

let aaa = 1;
const bbb = 2;
var cccc = 3;

// tworzenie zmiennych globalnych za pomocą var powoduje również dodanie jej do obiektu window


// Różnica między let i const 

// #1 za pomocą const nie można zmienić wartości na inną wartość

let x = 5;
x = 10;


// Wartość const w obiektach sama w sobie może zmieniać wartość


//  let i var można zadeklarować bez przypisania wartości, mają wtedy wartość undefined



// ----------- kiedy zadeklarować zmienne za pomocą let, var , const ------------- //


// Używamy const najczęściej w funkcjach, obiektach, typach prostych, których nie chcemy zmieniać

// let np. w pętlach

// Przetestować różnice w  konsoli







