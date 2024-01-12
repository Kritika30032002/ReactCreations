# Vite + React Currency Converter App using Materail UI

Welcome to the Currency Converter App, a simple web app which you can use to inter-convert the currencies of different countries in real-time.

This project was bootstrapped with [vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

## Getting Started

To use the Currency Converter App, follow these steps:

1. Clone the GitHub repository to your local machine:
    ```
   git clone https://github.com/Kritika30032002/ReactCreations.git
    ```
2. Navigate to the project directory:
    ```
    cd Currency Converter
    ```
3. Install the required dependencies using npm:
    ```
    npm install
    ```

4. Create an account in [https://app.freecurrencyapi.com/](https://app.freecurrencyapi.com/). <br> Then go to your dashboard and copy your `API_KEY`. <br>
In the .env file, paste it : `VITE_API_KEY = <API_KEY>`

5. Start the app by running:
    ```
    npm run dev
    ```
    Runs the app in the development mode.<br>
    Open [http://127.0.0.1:5173](http://127.0.0.1:5173) to view it in the browser.

## How to Use

1. Enter the amount you want to convert in your desired currency.

2. Select from the drop-down to select your desired currency to and from which you want to convert.

3. You might click on the swap icon to interchange the currency conversion.

## Technologies Used

- Vite + React: The front-end framework used to build the application.
- Material UI: For responsive and attractive user interface design.
- freecurrencyapi: to convert currencies from one domain to another.
- restcountries api: [https://restcountries.com/v3.1/all](https://restcountries.com/v3.1/all) To get various denomination of various countries.

