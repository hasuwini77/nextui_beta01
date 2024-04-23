import React from "react";
import Nav from "./components/Nav.jsx";
import CardComp from "./components/Card.jsx";
import { Snippet } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import Footer from "./components/Footer.jsx";
import UserTest from "./components/User.jsx";
import "tailwindcss/tailwind.css";

export default function App() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Nav />
      <main className="flex-1">
        <div className="flex flex-row items-center justify-center p-4 space-x-4">
          <CardComp />
        </div>
        <div className="flex flex-row items-center justify-center p-4 space-x-4">
          <CardComp />
        </div>
        <motion.div
          initial={{ y: -10 }} // Initial animation state
          animate={{ y: [10, -10], transition: { yoyo: Infinity, duration: 3, ease: "easeInOut" } }} // Animation properties
          className="mx-2"
        >
          <div className="flex flex-row items-center justify-center">
            <Image width={400} height={300} alt="NextUI hero Image with delay" isZoomed src="https://app.requestly.io/delay/300/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" />
          </div>
        </motion.div>
        <div className="flex flex-wrap items-center justify-center gap-4 p-4">
          <Snippet color="default">
            npm install $ShitCoinProject
            <span>yarn add $ShitCoinProject</span>
            <span>pnpm add $ShitCoinProject</span>
          </Snippet>
        </div>
        <UserTest />
      </main>
      <Footer />
    </div>
  );
}
