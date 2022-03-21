import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

import './style/dark.scss';

import { BrowserRouter as Router,  Switch, Routes, Route, Link} from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "./components/context/darkmodeContext";


function App() {

 const {darkMode} =useContext(DarkModeContext);

  return (
    <div className= {darkMode ? "app dark" : "app"}>
        <Router>
          <Routes>
              <Route path="/">
                <Route index element={<Home />}/>
                <Route path="login" element={<Login/>} />
                <Route path="users">
                  <Route index element={<List />}/>
                  <Route path=":userId" element={<Single/>} />
                  <Route path="new" element={<New/>} />
                </Route>
                <Route path="products">
                  <Route index element={<List />}/>
                  <Route path=":productId" element={<Single/>} />
                  <Route path="new" element={<New/>} />
                </Route>
            </Route>
          </Routes>
        </Router>

    </div>
  );
}

export default App;
