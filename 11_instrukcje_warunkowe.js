// ----------------- ify -------------------- //

// if (warunek){
//     kod uruchamiany TYLKO jeśli warunek będzie true;
// }

// Jeśli warunek nie będzie typem Boolean to będzie do niego skonwetowany

// inatrukcja else  if () kończy się w momencie kiedy jakiś warunek będzie true

// Można zawrzeć wiele warunków

if (false) 
{
    console.log("wykonałem if");
} 
else if (true)
{
    console.log("wykonałem 'else if'");
}

// ify można zagnieżdżać

// if (wrunek) {
//     if (warunek) {
//         kod
//     }
//     else{
//         kod
//         if (warunek)
//         {
//             kod
//         }
//     }
// }

//  ------------------------ OPERATOR WARUNKOWY ------------------------  //

(warunek) ? kod1 : kod2

warunek -> true -> wykonaj i zwróć kod1warunek -> false -> wykonaj i zwróć kod2