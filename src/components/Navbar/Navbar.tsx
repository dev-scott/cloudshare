import { useState } from "react";
import MaxWidthSection from "../MaxWidthSection";
import Button from "../Button";
import { Menu } from "lucide-react";
import { Box, Divider, Drawer } from "@mui/material";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setOpenMenu(open);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box className="px-4 py-2">
        <Button variant="ghost">Login</Button>
        <Button variant="primary" className="mt-3">
          Create account
        </Button>
      </Box>
      <Divider />
      <Box></Box>
    </Box>
  );

  return (
    <MaxWidthSection>
      <div className="w-full h-16 flex justify-between items-center ">
        <div>
          <span className="text-xl font-semibold bg-gradient-to-tl from-black via-white to-black text-transparent bg-clip-text ">
            CLOUDSHARE
          </span>
        </div>
        <div className="md:hidden block">
          <Button
            variant="ghost"
            onClick={toggleDrawer(true)}
            className="px-1 py-1"
          >
            <Menu />
          </Button>
          <Drawer open={openMenu} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
        <div className=" hidden md:flex justify-center items-center gap-x-4">
          <Button variant="ghost">Login</Button>
          <Button variant="primary">Create account</Button>
        </div>
      </div>
    </MaxWidthSection>
  );
};

export default Navbar;
