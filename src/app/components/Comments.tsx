'use client'


import React, { useState } from "react";
import Comment from "./Comment";


export interface IComment {
    id: number;
    display: string;
    date: string;
    author: string;
    parentId?: number;
}

const Comments = () => {
    const [comment, setComment] = useState<{ author: string; text: string }>({
        author: "",
        text: "",
    });

    const [comments, setComments] = useState<IComment[]>([]);



    const addReply = async (parentId: number, replyAuthor: string, replyText: string) => {
        const newReply = newComment(replyAuthor, replyText, parentId);

        setComments([...comments, newReply]);

    };

    const newComment = (author: string, text: string, parentId?: number) => {
        return {
            id: new Date().getTime(),
            display: text,
            author: author,
            date: new Date()
                .toLocaleString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                })
                .replace(/\//g, ":"),
            parentId: parentId,
        };
    };

    const insertComment = (author: string, text: string, parentId: number) => {
        const newCmment = newComment(author, text, parentId);
        setComments([...comments, newCmment]);
        addReply(parentId, author, text);
    };

    return (
        <div className="m-5 mb-[3rem] mt-12 p-4 border border-gray-400 rounded-3xl text-center">
            <h1 className="font-bold text-4xl mb-5 mt-2">Recommendations</h1>
            <div className="mb-4 p-2.5">
                <input
                    onChange={(e) => setComment({ ...comment, author: e.target.value })}
                    type="text"
                    placeholder="Your name..."
                    className="w-full mb-2.5 p-3 text-lg border border-gray-400 rounded-lg box-border"
                />
                <textarea
                    onChange={(e) => setComment({ ...comment, text: e.target.value })}
                    placeholder="Your comment..."
                    className="w-full mb-2.5 p-3 text-lg border border-gray-400 rounded-lg box-border"
                />
                <button
                    onClick={() => {
                        insertComment(comment.author, comment.text, -1);
                    }}
                    className="bg-gradient-to-br from-[#A23A2C] to-[#C46655] text-center text-xl text-white border-none rounded-lg px-[10rem] py-2 cursor-pointer hover:bg-gradient-to-br hover:from-[#C46655] hover:to-[#A23A2C] transition duration-200 ease-in-out"
                >
                    Submit
                </button>
            </div>
            <div>
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} addReply={addReply} />
                ))}
            </div>
        </div>
    );
};

export default Comments;
