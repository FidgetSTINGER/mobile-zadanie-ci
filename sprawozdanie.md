# Sprawozdanie: Przegląd praktyk i narzędzi w programowaniu mobilnym

## Zadanie 1 – Analiza narzędzi developerskich: Visual Studio Code

**Wybrane narzędzie:** Visual Studio Code (VS Code)

**Do czego służy narzędzie?**
Visual Studio Code to lekki, ale potężny edytor kodu źródłowego stworzony przez Microsoft. Służy do pisania, edytowania i debugowania kodu w wielu językach programowania. W kontekście programowania mobilnego jest powszechnie używany do tworzenia aplikacji w technologiach międzyplatformowych (cross-platform) takich jak React Native, Flutter czy Ionic.

**Jakie funkcje oferuje, które ułatwiają development?**

- **IntelliSense:** Inteligentne podpowiadanie kodu, uzupełnianie składni i informacje o parametrach funkcji, co znacznie przyspiesza pisanie.
- **Wbudowany terminal:** Umożliwia uruchamianie komend budowania, testowania i zarządzania pakietami bez wychodzenia z edytora.
- **Obsługa Git:** Wbudowany interfejs graficzny do obsługi systemu kontroli wersji (commit, push, pull, rozwiązywanie konfliktów).
- **Extensions Marketplace:** Ogromna baza rozszerzeń, np. "React Native Tools", "Flutter", "Dart", które dodają dedykowane wsparcie dla konkretnych frameworków mobilnych.
- **Debugging:** Zaawansowane narzędzia do debugowania, w tym obsługa breakpointów, podgląd zmiennych i call stack.

**W jakich sytuacjach jest niezbędne?**
VS Code jest de facto standardem i niezbędnym narzędziem przy pracy z frameworkami opartymi na JavaScript/TypeScript (React Native) oraz Flutter. Jest lżejszą alternatywą dla ciężkich IDE jak Android Studio czy Xcode, gdy pracujemy głównie na kodzie logiki biznesowej i UI we frameworku cross-platformowym.

**Przykłady praktycznego użycia w projektach mobilnych:**

- Pisanie komponentów UI w React Native z podglądem błędów ESLint w czasie rzeczywistym.
- Debugowanie aplikacji Flutter uruchomionej na emulatorze, z możliwością ustawiania breakpointów bezpośrednio w kodzie Dart wewnątrz VS Code.
- Zarządzanie skryptami CI/CD (np. edycja plików workflow GitHub Actions) dzięki wsparciu dla składni YAML.

⸻

## Zadanie 2 – Praktyka CI/CD

**(Miejsce na zrzut ekranu z zakładki "Actions" na GitHubie ukazujący pomyślny przebieg pipeline'u)**

> _Tu wklej zrzut ekranu: github_actions_result.png_

**Jaka część pipeline’u była najtrudniejsza i dlaczego?**
Najtrudniejszym elementem często bywa poprawna konfiguracja środowiska wykonawczego (runs-on) oraz zarządzanie sekretami (kluczami API, certyfikatami). W przypadku aplikacji mobilnych, buforowanie zależności (np. `node_modules` lub `Gradle cache`) wymaga precyzyjnej konfiguracji, aby buildy nie trwały zbyt długo.

**Co daje automatyzacja testów?**
Automatyzacja (CI) zapewnia:

- **Wczesne wykrywanie błędów:** Każdy commit jest sprawdzany, co zapobiega przedostawaniu się błędów do głównej gałęzi (main/master).
- **Oszczędność czasu:** Deweloper nie musi ręcznie uruchamiać wszystkich testów przed każdym merge requestem.
- **Pewność działania:** Gwarancja, że aplikacja buduje się poprawnie na czystym środowisku, a nie tylko „na maszynie dewelopera”.

**Czym różni się pipeline aplikacji mobilnej od pipeline’u webowego?**
Pipeline mobilny jest zazwyczaj bardziej skomplikowany, ponieważ:

- Wymaga budowania artefaktów binarnych (.apk, .ipa) zamiast tylko deployu plików na serwer.
- Proces budowania (szczególnie iOS) zajmuje znacznie więcej czasu i zasobów.
- Wymaga zarządzania certyfikatami podpisywania kodu (Signing Certificates/Provisioning Profiles), co jest krytyczne dla wdrożenia do sklepów (App Store/Google Play).

⸻

## Zadanie 3 – Debugging aplikacji

**(Miejsce na zrzut ekranu z konsoli z logami)**

> _Tu wklej zrzut ekranu: debug_console.png_

**(Miejsce na zrzut ekranu z zatrzymania na breakpoincie)**

> _Tu wklej zrzut ekranu: debug_breakpoint.png_

**Opis błędu:**
Zaimplementowano funkcję obliczającą sumę elementów w tablicy cen, jednak funkcja zwracała błędny wynik w postaci konkatenacji ciągów znaków (np. "1020" zamiast 30), ponieważ dane wejściowe były traktowane jako `string` zamiast `number`.

**Sposób naprawy:**
Po prześledzeniu wartości zmiennych w debuggerze zauważono, że typ danych to string. Zastosowano rzutowanie typów (parsowanie) przy użyciu `parseFloat()` lub `Number()` dla każdego elementu przed dodaniem go do sumy, co rozwiązało problem.

⸻

## Zadanie 4 – Porównanie narzędzi testowych: Jest

**Wybrane narzędzie:** Jest (w kontekście React Native)

**Do czego służy narzędzie?**
Jest to framework testowy dla JavaScript, rozwijany przez Facebooka. Jest domyślnym i najpopularniejszym narzędziem do testowania aplikacji React i React Native. Służy do pisania testów jednostkowych (Unit Tests) oraz testów integracyjnych komponentów.

**Jakie rodzaje testów obsługuje?**

- **Testy jednostkowe (Unit Tests):** Testowanie pojedynczych funkcji i klas w izolacji.
- **Snapshot Testing:** Unikalna funkcja Jesta, pozwalająca zapisywać wyrenderowany wygląd komponentu i porównywać go w przyszłości, by wykryć nieoczekiwane zmiany w UI.
- **Testy asynchroniczne:** Obsługa Promises i async/await.

**Przykład sytuacji, gdzie jest niezbędne:**
W projekcie React Native, gdy tworzymy bibliotekę wspólnych komponentów (np. przyciski, karty), testy Snapshot w Jest są niezbędne, aby upewnić się, że zmiana stylów globalnych nie zepsuła wyglądu tych komponentów w innych miejscach aplikacji.

**Jak integruje się z CI/CD?**
Jest świetnie integruje się z systemami CI (np. GitHub Actions). Można go uruchomić jedną komendą (`npm test`). Generuje raporty pokrycia kodu (Code Coverage), które mogą być automatycznie publikowane w pipeline lub blokować merge, jeśli pokrycie spadnie poniżej ustalonego progu.
