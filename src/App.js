import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Login from "./pages/Auth/Login";
import Profile from "./pages/Profile/Profile";
import Bioedit from "./pages/Profile/Component/Bioedit";
import Search from "./component/Search/Search";
import Comment from "./component/PostSide/Comment";
function App() {
  return (
    <div className="App">
       <div className="blur" style={{top:'-18%',right:"0"}}></div>
       <div className="blur" style={{top:'36%',left:'-8rem'}}></div>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bioedit" element={<Bioedit />} />
        <Route path="/searchprofile" element={<Search />} />
        <Route path="/comment" element={<Comment />} />
       </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
