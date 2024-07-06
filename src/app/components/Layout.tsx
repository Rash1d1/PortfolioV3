import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="bg-light-white bg-cover">
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
}

export default Layout;
