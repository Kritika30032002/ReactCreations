import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./Home.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar  className="sidebar"/>
        <Feed className="feeds"/>
        <Rightbar className="rightbar"/>
      </div>
    </>
  );
}
