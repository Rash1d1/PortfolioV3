'use client'

import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image';

interface ComicData {
    img: string;
    alt: string;
    safe_title: string;
    year: number;
    month: number;
    day: number;
}

const Comic = () => {
    const [comicData, setComicData] = useState<ComicData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const email = 'r.badamshin@innopolis.university';
            const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
            const comicId = await response.text();

            // Fetch comic data
            const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
            const comicData: ComicData = await comicResponse.json();

            setComicData(comicData);
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg w-full my-6">
            {comicData && (
                <>
                    <p className="text-xl font-medium text-gray-900 flex justify-center items-center mb-5">COMIC!</p>
                    <Image className="mb-8 max-h-100" width={400} height={400} src={comicData.img} alt={comicData.alt} />
                    <p className="text-lg font-semibold">{comicData.safe_title}</p>
                    <p className="text-lg font-semibold">{formatDistanceToNow(new Date(comicData.year, comicData.month - 1, comicData.day))}</p>
                </>
            )}
        </div>
    );
};

export default Comic;
