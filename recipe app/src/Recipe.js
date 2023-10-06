import React, { useState } from "react";
import "./App.css";
//importing the material ui coponents
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
function Recipe(props) {
  return (
    <div className="Card1">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={props.title} subheader={props.calories} />
        <CardMedia
          component="img"
          height="194"
          image={props.image}
          alt={props.title}
          className="dishImage"
        />
        <CardContent>
          {/* <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography> */}
        </CardContent>
        <CardActions disableSpacing>
          <div>Click to see Ingredients</div>
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <ExpandMoreIcon
                  variant="contained"
                  {...bindTrigger(popupState)}
                />
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <Typography sx={{ p: 2 }}>
                    {props.ingredients.map((item, key) => {
                      return (
                        <>
                          <Typography paragraph key={key}>
                            {item.text}
                          </Typography>
                        </>
                      );
                    })}
                  </Typography>
                </Popover>
              </div>
            )}
          </PopupState>
        </CardActions>
      </Card>
    </div>
  );
}

export default Recipe;
