import Feed from "./components/Feed";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widges from "./components/Widges";

function App() {
  return (
    <div className="a">
      <Header />

      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widges />
      </div>
    </div>
  );
}

export default App;
