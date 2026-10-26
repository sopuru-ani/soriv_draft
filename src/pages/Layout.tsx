import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "@/components/Nav";
import Chatbox from "@/components/Chatbox";

export default function Layout() {
  return (
    <>
      <Nav />
      <Chatbox />
      <Outlet />
    </>
  );
}
