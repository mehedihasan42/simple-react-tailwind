import { useState } from "react";
import Link from "./Link";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";

const NavBar = () => {
  const [open,setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About Us', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Products', path: '/products' }
      ];
    return (
        <nav>
          <div onClick={()=>setOpen(!open)} className="text-2xl md:hidden">
          {open===true?<IoMenuSharp/>:<IoMdCloseCircleOutline />}
          </div>

         
            <ul className={`md:flex mt-8 md:static absolute space-x-3 ${open?'top-7':'-top-48'}`}>
              {
                routes.map(route=><Link className="gap-3" key={route.id} route={route}></Link>)
              }
            </ul>
        </nav>
    );
};

export default NavBar;