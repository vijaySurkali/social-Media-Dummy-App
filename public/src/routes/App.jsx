import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../component/header";
import Footer from "../component/Footer";
import SideBar from "../component/Sidebar";
import Createpost from "../component/Createpost";
import PostList from "../component/PostList";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("CreatePost");
  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="contant">
          <Header />
          <Outlet/>

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
