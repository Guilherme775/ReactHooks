import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import State from "./pages/State";
import Effect from "./pages/Effect";
import Context from "./pages/Context";
import Reducer from "./pages/Reducer";
import Callback from "./pages/Callback";
import Memo from "./pages/Memo";
import Ref from "./pages/Ref";
import ImperativeHandle from "./pages/ImperativeHandle";
import LayoutEffect from "./pages/LayoutEffect";
import CustomHooks from "./pages/CustomHooks";
import DebugValue from "./pages/DebugValue";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={State} />
        <Route path="/Effect" component={Effect} />
        <Route path="/Context" component={Context} />
        <Route path="/Reducer" component={Reducer} />
        <Route path="/Callback" component={Callback} />
        <Route path="/Memo" component={Memo} />
        <Route path="/Ref" component={Ref} />
        <Route path="/ImperativeHandle" component={ImperativeHandle} />
        <Route path="/LayoutEffect" component={LayoutEffect} />
        <Route path="/CustomHooks" component={CustomHooks} />
        <Route path="/DebugValue" component={DebugValue} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
