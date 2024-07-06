import React from 'react';
import Image from "next/image";

const Bio = () => {
    return (
        <div className="flex flex-col items-center mt-12 mx-5 bg-gray-200 shadow-md rounded-3xl px-10 py-10 sm:flex-row">
            <Image className="img w-[14rem] h-auto rounded-3xl mr-10" src={require("../Assets/Images/my-photo.png")}
                 alt="Headshot of the author, a person with short hair and glasses, smiling"/>
            <p className="text-2xl leading-relaxed text-gray-700">
                My name is Rashid Badamshin. I am a passionate developer with experience in building website layouts and
                fullstack applications.
            </p>
        </div>

    );
};

export default Bio;