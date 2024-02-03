import "./Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
          alt="cover image"
        />
        <Avatar className="sidebar_avatar" />
        <h2>Pritam Roy</h2>
        <h4>pritam@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">1,432</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactJS")}
        {recentItem("nextJS")}
        {recentItem("developer")}
        {recentItem("programmer")}
      </div>
    </div>
  );
}

export default Sidebar;
