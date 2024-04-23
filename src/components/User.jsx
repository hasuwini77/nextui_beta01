import React from "react";
import { User } from "@nextui-org/react";

export default function UserTest() {
  return (
    <>
      <p className="text-center text-xl mt-3"> Meet our team </p>
      <div className="flex flex-row justify-center px-4 m-3">
        <div className="px-4 py-3 hover:bg-red-500">
          <User
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </div>
        <div className="px-4 py-3">
          <User
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </div>{" "}
        <div className="px-4 py-3 ">
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
