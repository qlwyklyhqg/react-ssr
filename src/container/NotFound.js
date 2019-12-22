import React from "react";
import { Route } from "react-router-dom";

function Status({ code, children }) {
  return <Route render={({ staticContext }) => {
    if (staticContext) {
      staticContext.statuscode = code
    }
    return children
  }}></Route>
}

function NotFound() {
  return <Status code={404}>
    <div>
      <h1>Page Not Found</h1>
    </div>
  </Status>
}

export default NotFound