import { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import Home from "./Pages/Home/Home";
import { Route, Switch } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";

function App() {
  useEffect(() => {
    alanBtn({
      key: "",
      onCommand: ({ command }) => {
        if (command === "something") {
        }
      },
    });
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </>
  );
}

export default App;
