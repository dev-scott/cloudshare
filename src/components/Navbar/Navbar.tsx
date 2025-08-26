import React from "react";
import MaxWidthSection from "../MaxWidthSection";
import Button from "../Button";

const Navbar = () => {
  return (
    <MaxWidthSection>
      <div className="w-full h-16 flex justify-between items-center ">
        <div>
          <span className="text-xl font-semibold bg-gradient-to-tl from-black via-white to-black text-transparent bg-clip-text ">
            CLOUDSHARE
          </span>
        </div>
        <div className="flex justify-center items-center gap-x-4">
          <Button variant="ghost">Login</Button>
          <Button variant="primary">Create account</Button>
        </div>
      </div>
    </MaxWidthSection>
  );
};

export default Navbar;
