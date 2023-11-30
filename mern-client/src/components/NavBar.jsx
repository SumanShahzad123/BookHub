import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';

// react icon
import { FaBlog, FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contects/AuthProvider';


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
   // const [isScrolled, setIsScrolled] = useState(false);
   // for showing the users on the navbar
    const {user} = useContext(AuthContext);
    console.log(user);

    // toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
      
          const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        }
        
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.addEventListener('scroll', handleScroll);
        }

    }, [])

    useEffect(()=>{
        console.log(isSticky);
    },[isSticky])

    // navItems here
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" }
    ]

    // ////2
    // const headerClasses = isScrolled ? 'fixed top-0 left-0 right-0 bg-white shadow-md' : '';

    return (
        //
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-6 lg:px-24 px-24 transition-all duration-300 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" :""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* logo */}
                    <Link to="/" className='text-x21 font-bold text-blue-700 flex items-centre gap-2'><FaBlog
                        className='inline-block' />Books</Link>

                    {/* nav item for large devices */}
                    {/* className='md:flex space-x-12 hidden */}
                    <ul className='md:flex space-x-12'>
                        {
                            navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base
                            text-black uppercase cursor-pointer hover:text-blue-700'>{link} </Link>)
                        }
                    </ul>

                    {/* btn for lg devices*/}

                    <div className='space-x-12  lg:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-blue-700' /></button>
                       {/* for showing the user */}
                        {/* {
                            user? user.email : ""
                        } */}
                    </div>

                    {/* menu btn for the mobile devices
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {
                                isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered
                                    className='h-5 w-5 text-black' />
                            }
                        </button>
                    </div> */}
                </div>

                {/* navitems for sm devices
                <div className='space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0
                left-0" : "hidden"}'>
                    {
                    navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base
                    text-black uppercase cursor-pointer hover:text-blue-700'>{link} </Link>)
                    }
                </div> */}

            </nav>
        </header>
    )

}

export default NavBar;