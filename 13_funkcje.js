// ----------- Czym są funkcje ----------- //

// #1 Funkcje są obiektami
// Od innych obiektów wyrónia je właściwość  [call] - wbudowana w funkcję. 
// Funkcja jest jedynym typem danych w JS, które mozna wywołać, czyli uruchomić kod.

// #2  Mozna je postrzegać jako miniprogramy,z których mozna zbudować jeden, duzy program.


// #3 Funkcje przypominają tajemnicze pudełko
// Wprowadzamy jakieś dane, a otrzymujemy wartość zwrotną za pomocą słowa "return"


// --------- BUDOWA FUNKCJI ---------- //

// Trzy kluczowe elementy:

      // #1 Identyfikator - nazwa 

      // #2 Parametry 

      // #3 Ciało funkcji
      //  jezeli w funkcji nie ma 'return', funkcja zwroci undefined
      // po return umieszczamy argument, który zwracamy


// ---------- Sposoby tworzenia funkcji ------------//

      // #1 Pierwszy sposób:

      // Deklaracja funkcji

      // function NazwaFunkcji (value1, value2){
      //   return value1 + value2
      // };

      // Zalety : a) hoisting - zawsze na górze zakresu, dostępna wszędzie gdzie jest widzialna
      // Wady :  b) nazwa (zachowanie) niczym zmienna var

      // ----------------------  #2 ----------------------- //

      // #2 Drugi sposób:
      // Wyrazenie funkcyjne
      // Deklarujemy zmienną i do niej przypisujemy funkcję anonimową

      // const add = function (value1, value2){
      //     return value1 + value2
      // }


      // --------------------- #3 ------------------------ //

      // #3 Konstruktor funkcji
      // tworzymy zmienną, później operator 'new' i Function z wielkiej litery i ciało (?) w nawiasie

      // const add = new Function('value1', 'value2', 'return value1 + value2');


      // #4 Fat arrow functions

      // znika słowo kluczowe 'function', znika słówko 'return'

      // const multi = (a,b,c) => {
      //   return a * B * c
      //  };
                // lub krócej
      //  const multi = (a,b,c) => a * b * c;

                // lub jeszcze krócej, kiedy przekazujemy tylko jesden parametr

      //  const square = a => a * a;


