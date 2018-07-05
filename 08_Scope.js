             // --------------------- Scope --------------------- //
             // ---------------------Zasięg --------------------- //


//  #1 Zasięg glbalny


// Dostępne w całym kodzie

// Wartość globalna jest widoczna w zakresie lokalnym

// Jest dostępna w zasięgu globalnym ale i w zasięgu lokalnym


// --------------------------------------------------------------- //

// #2 Zasięg lokalny

// Dostępne tylko w funkci, moze byc wiele zmiennych o tej samej nazwie

// Wartość lokalna nie jes widoczna poza swoim zakresem

var a = "Zmienna globalna";
console.log(a);

function one(){
    var a = "Zmienna lokalna";
    console.log(a);
}

// Mechanizm przysłaniania 


// Zmienna w funkcji może być globalna

// function one() {c ="aaa"}


//  OPERAND = argument