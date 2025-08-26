import React from "react";
import MaxWidthSection from "../MaxWidthSection";
import Button from "../Button";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { SearchCheck } from "lucide-react";
const HeroSection = () => {
  return (
    <MaxWidthSection className="  mt-6">
      <div className="relative w-full flex justify-center items-center flex-col gap-y-3">
        <div className="px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-semibold">
          First version is coming soon
        </div>
        <div className="text-center mt-6">
          <h1 className="font-extrabold text-gray-900 text-4xl">
            {/* The Home for Everything You Create  */}
            <span className="bg-clip-text text-transparent bg-gradient-to-tl from-black via-gray-600 to-black">
              Your Securely Stored
            </span>
            <p>The Home for Everything You Create</p>
          </h1>
          <span className=" block mt-6 text-lg text-gray-800 text-center max-w-3xl">
            We provide the ultimate space to organize your photos, documents,
            and videos securely. Access your entire digital life from any
            device, anywhere, without compromise
          </span>
        </div>
        <ul className=" flex justify-center  flex-wrap w-fit items-center gap-x-12 gap-y-3 flex-row">
          <li>
            <SearchCheck className="w-6 h-6 text-emerald-600 inline-block" />
            <span className="ml-2 font-semibold text-gray-900">
              Always available
            </span>
          </li>
          <li>
            <SearchCheck className="w-6 h-6 text-emerald-600 inline-block" />
            <span className="ml-2 font-semibold text-gray-900">
              Completely private
            </span>
          </li>

          <li>
            <SearchCheck className="w-6 h-6 text-emerald-600 inline-block" />
            <span className="ml-2 font-semibold text-gray-900">
              Instantly backed up
            </span>
          </li>
        </ul>
        <div className="flex justify-center items-center flex-col gap-y-7 mt-3">
          <div className="text-center">
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
            <p className="text-sm text-gray-800 mt-3">
              Trusted by 750+ founders
            </p>
          </div>
          <div>
            <Button className="rounded-full" variant="ghost">
              You can try cloudshare now
            </Button>
          </div>
        </div>
        <div className="relative w-full h-[700px] ">
          <img
            className="w-full h-full object-contain "
            alt="dashboard"
            src="/dashboard-preview.png"
          />
        </div>
      </div>
    </MaxWidthSection>
  );
};

export default HeroSection;
