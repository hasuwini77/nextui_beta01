import React from "react";
import Nav from "./components/Nav.jsx";
import CardComp from "./components/Card.jsx";
import { Snippet } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function App() {
  return (
    <div>
      <Nav />
      <div className="flex flex-row items-center justify-center p-4 space-x-4">
        <CardComp />
      </div>
      <div className="flex flex-row items-center justify-center p-4 space-x-4">
        <CardComp />
      </div>
      <div className="flex flex-row items-center justify-center">
        <Image width={400} height={300} alt="NextUI hero Image with delay" isZoomed src="https://app.requestly.io/delay/300/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 p-4">
        <Snippet color="default">
          npm install $ShitCoinProject
          <span>yarn add $ShitCoinProject</span>
          <span>pnpm add $ShitCoinProject</span>
        </Snippet>
      </div>
    </div>
  );
}
