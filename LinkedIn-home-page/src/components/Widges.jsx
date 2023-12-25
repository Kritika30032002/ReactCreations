import { FiberManualRecord, Info } from "@mui/icons-material";
import "./Widges.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widges_article">
      <div className="widges_articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widges_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widges">
      <div className="widges_header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("Pritam is back", "Top news")}
      {newsArticle("Open AI", "Top news")}
      {newsArticle("Random news", "Top news")}
      {newsArticle("Random news", "Top news")}
    </div>
  );
}

export default Widgets;
