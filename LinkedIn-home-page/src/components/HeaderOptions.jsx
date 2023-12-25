/* eslint-disable react/prop-types */
import "./HeaderOption.css";
import { Avatar } from "@mui/material";

function HeaderOPtion({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOPtion_icon" />}
      {avatar && <Avatar className="headerOption_icon" src={avatar} />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOPtion;
