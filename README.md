# Projekt: Boilerroom

## Datum: 30 augusti 2024

## Introduktion

Detta projekt är en grundläggande Node.js-applikation byggd med Express och TypeScript. Syftet med projektet är att skapa en modulär och lättunderhållen kodbas som använder moderna utvecklingspraxis.

## Dagens Lektion

Under dagens lektion har vi genomfört följande uppgifter:

1. **Skapat mappstrukturen:**
   - En `handlers`-mapp för att hålla alla route-handlers eller controller-funktioner.
   - En `routes`-mapp för att hålla alla Express-routes.
   - En `types`-mapp för TypeScript-typer och gränssnitt.
   - En `dtos`-mapp för Data Transfer Objects.

2. **Flyttat Existerande Kodelement:**
   - Flyttat typer och gränssnitt till `types`.
   - Flyttat route-handlers till `handlers`.
   - Skapat och lagt till DTOs i `dtos`.
   - Uppdaterat alla importvägar för att reflektera de nya filplatserna.

3. **Implementerat och Använt DTOs:**
   - Skapat DTOs för CRUD-operationer.
   - Typ-annoterat request bodies i route-handlers.

4. **Lagt till Valfri Query-Parameter:**
   - Implementerat en valfri query-parameter i en av rutter.
   - Skapat ett interface i `types` för query-parametern och typ-annoterat request-objektet i route-handlern.

5. **Typat Responsobjekt:**
   - Definierat och använt typer för responsobjekt.

6. **Installerat Tredjepartstyper:**
   - Installerat typer för tredjepartsbibliotek som `passport` och `express-session`.

7. **Validerat Typning och Struktur:**
   - Genomgått projektet för att säkerställa korrekt typning och struktur.
   - Testat och verifierat funktionalitet med verktyg som Postman.

## Närvaro

- **Mustafa**
- **Ibrahim**
