// ------ Parametry && Argumenty ------ //

// const add = function(a,b){
//   return a + b;
// }
// add(2,2);

//  Parametry, to zmienna lokalna w funckji


// Argumenty to wartości w chwili wywołannia funkcji
// Argument jest zawsze przypisany do jednego parametru


// function add(a,b,c)
// {
// console.log(a,b,c);
//   return a + b + c;
// }
// add();
// >> NaN

// Kiedy nie podamy argumentów funkcja zwraca NaN

// function add(a,b,c)
// {
//   if (a === undefined || typeof a === 'string') a = 0;
//   if (b === undefined || typeof b === 'string') b = 0;
//   if (c === undefined || typeof c === 'string') c = 0;
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   return a + b +c;
// }
// add(2,3, 'cos tam');
// >> 2,3,0
// >> 5


// ---------------------- Sposób z ES6 --------------------------- //

// Czyli dopisywanie wartości domyślnych ju na etapie tworzenia funkcji
// Wartości domyślne są dodawane tylko kiedy argumenty są undefined

// function multiply (a = 1, b = 1, c = 1){
//   console.log(a,b,c);
//   return a * b * c;
// }
// multiply(2,3);


// Dając tylko jeden argument określamy pozostałe
// function multiply(a = 10, b = a/5, c = b * a)
// {
//   console.log(a,b,c);
//   return a * b * c;
// }
// multiply(30.3);


// Do argumentu dodajemy undefined
// function add(x = 10, y){
//   return x + y;
// }
// add(5);
// >> NaN


// Kiedy ilość argumentów jest większa od ilości parametrów zostają one (argumenty) pominięte
// function add(a,b)
// add(2,3,5,67,83);

// ------------------------  OBIEKT  arguments  ------------------------ //

// Właściwości : #1 Prawie jak tablica - ma length i numeryczny index
                //  #2 pokazuje ile argumentów przekazaliśmy do funkcji


// function add() {
//   console.log(`Ilość argumentów funkcji jest równa: ${arguments.length}`);
//   console.log(`pierwszym argumentem funkcji jest: ${arguments[0]}`);
// }
// add(10,5);


//  --------------------  Sposób uzycia  ----------------------- //

          // #1 Tworzymy funkcję add(), do której nie dodajemy adnych parametrów
          // #2 Później uzytkownik będzie mógł dodać dowolną ilość argumentów, a program wszystkie je złączy

        //   function add(){
        //     console.log(`liczba argumentów przy wywołaniu to: ${arguments.length} `);
        //     let wynik =0;
        //     if(arguments.length === 0) wynik = 0;//nie musimy tego pisać, bo w zmiennej wynik jest ju 0
        //     if(arguments.length === 1) wynik = arguments[0];
        //     if(arguments.length === 2) wynik = arguments[0] + arguments[1];
        //     return wynik;
        //   }
        // add(10,5);


        // To samo w pętli

        // function add(){
        //   let wynik = 0;
        //   let args = arguments.length;
        //   for (let i=0; i<args; i++){
        //     wynik += arguments[i];
        //   }
        //   return wynik;
        // }

        // add(3,4,5)