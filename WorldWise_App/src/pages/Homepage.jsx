import React from "react";
import { Link } from "react-router-dom";

import PageNav from "../assets/components/PageNav";
import AppNav from "../assets/components/AppNav";

export default function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1 >WorldWise</h1>
      <Link to={"/app"}>to the app</Link>
    </div>
  );
}
