# Newsroom Frontend Test :newspaper: :pencil2:

Country Search App with TypeScript

🌍 A TypeScript-powered web application that enables users to search for country information using a public API. The app includes features for user input validation, error handling, and displays the fetched data in an organized table.

## Task: Country Search App with TypeScript

**Objective:** Create a TypeScript-powered web application that allows users to search for country information using a public API. The application should handle user input validation, error handling, and display the fetched data in an organized table.

### Requirements:

1. **Search Feature:**
   - Design a webpage with an input field, a search button, and a table for displaying country information.
   - Implement TypeScript code to handle user input, make API requests, and update the table with the fetched data.

2. **API Integration:**
   - Use the provided country API [https://restcountries.com/](https://restcountries.com/) for fetching country information like:
      1. name
      2. capital
      3. currencies
      4. flag
   - Implement TypeScript module (`api.service.ts`) for handling API requests. Include static typing using interfaces or types.

3. **User Input Validation:**
   - Validate user input to ensure it is not empty and contains only valid characters (alphabets and spaces).

4. **Error Handling:**
   - Gracefully handle errors, especially in cases where the API returns a 404 status due to an invalid country name.

5. **Test-Driven Development (TDD):**
   - Create Jest test files (`api.service.test.ts`) to cover the API service and the main application logic.


### Requirements :heavy_check_mark:

For development, you will only need Node.js installed on your environement.


### Compatibility Node

Vite requires Node.js version 18+. 20+.

    $ node -v
    v20.10.0

    $ npm -v
    10.2.5

### Install :hammer_and_wrench:

    $ git clone https://github.com/telegraph/newsroom-frontend-test-2.0.git
    $ cd newsroom-frontend-test-2.0/
    $ npm install

### Run :rocket:

    $ npm run dev

### Test :ant:

    $ npm run test