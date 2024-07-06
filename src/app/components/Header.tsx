import React from 'react';
import HeaderContent from "./HeaderContent";
import Link from 'next/link';


const Header = () => {

    return (
        <div className="flex flex-col justify-between m-5 px-5 pt-[7rem] pb-7 bg-gradient-to-br from-[#A23A2C] to-[#C46655] text-white rounded-3xl shadow-md">
            <div className="items-center w-full text-center mb-5">
                <p className="font-bold text-5xl">Rashid Badamshin
                </p>
            </div>
            <div className="flex justify-between m-5">
                <nav className="flex justify-between">
                    <Link className="mr-6 text-3xl hover:text-blue-100" href="/">
                        Home
                    </Link>
                    <Link className="mr-6 text-3xl hover:text-blue-100" href="/about">
                        About
                    </Link>
                </nav>
                <HeaderContent></HeaderContent>
            </div>

        </div>
    );
};

export default Header;