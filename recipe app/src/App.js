import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Recipe from "./Recipe";

//importing material UI to style
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";

function App() {
  //api information
  const APP_ID = "YOURAPIID";
  const APP_KEY = "YOURAPIKEY";

  const [recipeD, setRecipe] = useState([]);

  //using the states to search new dish details
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("paneer");

  //using useEffect hook
  useEffect(() => {
    getRecipe();
  }, [query]);

  //calling the api using axios
  const getRecipe = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipe(response.data.hits);
    console.log(response.data.hits);
  };

  //to update the content of the search input box field
  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  // to update the query state
  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App-component">
      {/* using the material ui to style the search icon */}
      <Paper
        onSubmit={updateQuery}
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          margin: "20px auto",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Your Favourite Dish"
          inputProps={{ "aria-label": "Search Your Favourite Dish" }}
          value={search}
          onChange={updateSearch}
        />
        <IconButton type="submt" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 16 }}
      >
        {recipeD.map((item, key) => {
          const lab = item.recipe.label;
          const cal = item.recipe.calories;
          const imga = item.recipe.image;
          const ing = item.recipe.ingredients;
          return (
            <Grid item xs={2} sm={4} md={4}>
              <Recipe
                key={key}
                title={lab}
                calories={cal}
                image={imga}
                ingredients={ing}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default App;
