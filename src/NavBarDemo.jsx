
import  { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./component/ui/Navbar-menu";
import { cn } from './lib/utils/cn';
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'
import img3 from './images/image3.jpg'
import img4 from './images/image4.jpg'
import { Link } from "react-router-dom";

function NavBarDemo() {
  return (
    <div className="relative w-full  flex items-center justify-center border shadow-md bg-white">
      <Navbar className="top-2" />
      {/*<p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>*/}
    </div>
  )
}

export default NavBarDemo

function Navbar({ className }) {
    const [active, setActive] = useState(null);
    return (
      <div
        className={cn(" top-10 inset-x-0  max-w-2xl mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>
            
          <Link to={'/'}><MenuItem active={active}  item="Home"/></Link>
          
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src={img7}
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src={img8}
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src={img3}
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src={img4}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">Technical and Agronomic Consulting</HoveredLink>
              <HoveredLink href="/individual">Soil Diagnostic Services</HoveredLink>
              <HoveredLink href="/team">Integrated Crop Management (ICM) Support</HoveredLink>
              <HoveredLink href="/enterprise">After-Sales Support</HoveredLink>
            </div>
          </MenuItem>
          <Link to={'/about'}><MenuItem   item="About"/></Link>
          <Link to={'/contact'}><MenuItem  item="Contact"/></Link>

          
        </Menu>
      </div>
    );
  }