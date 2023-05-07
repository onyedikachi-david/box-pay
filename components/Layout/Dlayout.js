// components/Layout.js
import Head from "next/head";
import Nav from "./Nav";

const DLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-green-500">
      <Nav />
      <div className="flex flex-col flex-1 overflow-hidden">{children}</div>
    </div>
  );
};

export default DLayout;
