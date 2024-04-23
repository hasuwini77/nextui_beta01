// src/components/Nav.jsx
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import DarkModeSwitch from "./DarkMode.jsx";

export default function Nav() {
  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Telegram
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            X
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Dextools
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            $ Buy Now
          </Button>
        </NavbarItem>
        <NavbarItem>
          <DarkModeSwitch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
