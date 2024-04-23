import React from "react";
import { User } from "@nextui-org/react";

export default function UserTest() {
  return (
    <>
      <p className="text-center text-xl mt-3"> Meet our team </p>
      <div className="flex flex-row justify-center p-4 m-3">
        <div className="p-4">
          <User
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </div>
        <div className="p-4">
          <User
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </div>{" "}
        <div className="p-4">
          <User
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </div>
      </div>
    </>
  );
}
