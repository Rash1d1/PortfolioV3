import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-[#A23A2C] mt-10 to-[#C46655] text-white">
            <div className="flex flex-col items-center justify-center py-5">
                <p className="text-center text-lg">&copy; {new Date().getFullYear()} Rashid Badamshin. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
