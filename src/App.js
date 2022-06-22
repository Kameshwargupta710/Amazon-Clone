import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    // BEM
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header></Header>
                <Checkout></Checkout>
              </>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <>
                <Header></Header>
                <Home></Home>
              </>
            }
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/"
            element={
              <>
                <Header></Header>
                <Home></Home>
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
