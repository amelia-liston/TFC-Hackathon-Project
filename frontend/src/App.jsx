import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home, Profile, Feed, About } from "./pages";
// import { Home } from "./pages/Home";
// import { Profile } from "./pages/Profile";
// import { Feed } from "./pages/Feed";

function App() {
  return (
    <>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/about" element={<Feed />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
