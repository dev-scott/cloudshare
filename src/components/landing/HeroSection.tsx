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
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px),
        repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107, 114, 128, 0.06) 30px, rgba(107, 114, 128, 0.06) 31px),
        repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(55, 65, 81, 0.05) 40px, rgba(55, 65, 81, 0.05) 41px),
        repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(31, 41, 55, 0.04) 35px, rgba(31, 41, 55, 0.04) 36px)
      `,
          }}
        />
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
        <div className="relative mt-6 flex justify-center items-center p-2 md:p-4 w-fit h-fit border-px border-emerald-950  ">
          <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-bl from-gray-900 via-emerald-700 to-gray-900  "></div>
          <div className="relative flex  w-fit h-fit items-center justify-center  rounded-lg  text-slate-300">
            <img
              className="w-full h-full object-contain "
              alt="dashboard"
              src="/dashboard-preview.png"
            />
          </div>
        </div>
      </div>
    </MaxWidthSection>
  );
};

export default HeroSection;
