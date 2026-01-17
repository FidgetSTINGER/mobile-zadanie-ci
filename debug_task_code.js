// Przykładowy kod do Zadania 3 (Debugging)
// Wklej ten kod do pliku np. App.js w projekcie React Native / Expo
// lub uruchom w środowisku Node.js, aby przetestować breakpointy.

function calculateTotal(prices) {
  let total = 0;

  // BŁĄD: Pętla iteruje, ale 'price' może być traktowane jako string z API
  // np. API zwraca ["10", "20", "30"]
  for (let price of prices) {
    // Tu postaw breakpoint i sprawdź wartość 'total' oraz 'price'
    console.log(`Dodaję cenę: ${price}, aktualna suma: ${total}`);
    total += price;
  }

  return total;
}

// Symulacja danych z API (jako stringi)
const apiData = ["10.50", "20.00", "5.99"];

console.log("Start obliczeń...");
const result = calculateTotal(apiData);

// Oczekiwany wynik: ~36.49
// Rzeczywisty wynik (błędny): "010.5020.005.99"
console.log("Wynik końcowy: ", result);
