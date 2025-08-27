import React from "react";
import MaxWidthSection from "../MaxWidthSection";
import { Divider } from "@mui/material";

const Footer = () => {
  return (
    <div className=" mt-24 relative bottom-0 w-full   h-fit bg-gray-50  py-12 border-[0.5px] border-gray-200  text-gray-900">
      <div
        className="absolute opacity-60 inset-0 z-0 pointer-events-none "
        style={{
          backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(75, 85, 99, 0.08) 5px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 2px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.08) 3px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 6px, rgba(75, 85, 99, 0.08) 3px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
          backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
        }}
      />

      <MaxWidthSection>
        <div className="mb-4 flex items-center justify-between flex-wrap">
          <div>
            <span className="text-xl font-extrabold bg-gradient-to-tl from-black via-15% via-black to-black text-transparent bg-clip-text ">
              CLOUDSHARE
            </span>
            <p className="mt-2 font-semibold underline underline-offset-2 text-wrap text-emerald-900">
              Discover the best places to store you files
            </p>
          </div>
          <div className="rounded-lg md:mt-0 mt-4 relative">
            <div className="absolute rounded-lg -inset-[2px] blur-[4px] bg-emerald-900 "></div>
            <div className="relative rounded-lg w-full h-full bg-emerald-50 px-2 py-4">
              <span>
                <p className="font-semibold text-sm  text-gray-800 opacity-70">
                  Looking for a solution to generate invoice online
                </p>
                <span className="block text-sm font-extrabold text-emerald-800 mt-px opacity-90">
                  Try our invoice generator
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* <Divider orientation="horizontal" className="opacity-80" />
        <div className="mt-4 mb-4 text-sm text-start flex flex-col gap-y-2 items-start py-4">
          <p className="font-semibold ">Free tools</p>
          <p>UTM Campaign Builder</p>
        </div> */}
        <Divider orientation="horizontal" className="" />
        <div className="flex justify-between items-center mt-4 ">
          {/* <Separation /> */}
          <span className="font-light text-sm">
            © 2025 Listing Cat. All rights reserved.
          </span>
          <p className="font-extralight text-sm ">
            Made by <span>Dev-scott</span>
          </p>
        </div>
      </MaxWidthSection>
    </div>
  );
};

export default Footer;
