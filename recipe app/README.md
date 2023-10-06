# Recipe Finder Web Application

This web application is built with React.js and utilizes the Material UI library for a sleek and modern user interface. It allows users to search for various recipes based on a single food item, providing detailed information about ingredients and calories. The application fetches data from the Edamam API, making it a valuable tool for anyone interested in discovering new recipes.

## Technologies Used
- React.js
- Material UI
- Edamam API

## Installation

Follow the steps below to install and run this web application on your local machine:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Kritika30032002/ReactCreations.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd recipe app
   ```

3. **Install Dependencies**

   Use npm to install the project dependencies.

   ```bash
   npm install
   ```

4. **Get Your Edamam API Key**

   To use this application, you need to obtain an API key from Edamam. Follow these steps:

   - Visit the [Edamam Developer Portal](https://developer.edamam.com/).
   - Sign in or create an account if you don't have one.
   - Once logged in, create a new application to obtain your API key.
   - Copy the API key and API id for later use.

5. **Add Your API Key to the Application**

   In the project directory, Go to a `App.js` file and add your Edamam API key as follows:

   ```App.js
    const APP_ID = "YOURAPIID";
    const APP_KEY = "YOURAPIKEY";
   ```

6. **Start the Application**

   Now, you can start the application:

   ```bash
   npm start
   ```

7. **Access the Application**

   Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the Recipe Finder web application.

## Usage

1. Enter a food item (e.g., "chicken," "pasta," "salad") in the search bar.

2. Click the "Search" button or press Enter to retrieve recipes based on your search query.

3. Browse through the recipes to view details like ingredients and calories.

4. Enjoy discovering new recipes and meal ideas!

---

Happy cooking with Recipe Finder! If you have any questions or need assistance, feel free to reach out to us.