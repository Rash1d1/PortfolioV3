import React, {useState} from "react";
import { IComment } from "./Comments";
//import { useSupabaseClient } from "@supabase/auth-helpers-react";

interface CommentProps {
    comment: IComment;
    addReply: (parentId: number, author: string, text: string) => void;
}

const Comment: React.FC<CommentProps> = ({ comment, addReply }) => {
    const [newComment, setNewComment] = useState({ author: "", text: "" });
    const [showReplyBox, setShowReplyBox] = useState(false);

    const [replies] = useState<IComment[]>([]);

    // commented area below is the draft of interaction with database storage

    // const supabase = useSupabaseClient();
    //
    // const fetchReplies = useCallback(async () => {
    //     const { data, error } = await supabase
    //         .from("comments")
    //         .select()
    //         .eq("parentId", comment.id);
    //
    //     if (error) {
    //         console.error("Error fetching replies:", error);
    //     } else {
    //         setReplies(data as IComment[]);
    //     }
    // }, [comment.id, supabase]);
    //
    // useEffect(() => {
    //     fetchReplies();
    // }, [fetchReplies]);



    const handleReply = () => {
        setShowReplyBox(!showReplyBox);
    };

    const handleReplySubmit = async () => {
        addReply(comment.id, newComment.author, newComment.text);
        setNewComment({ author: "", text: "" });
        setShowReplyBox(false);
    };

    return (
        <div className="mb-8 p-4">
            <div className="flex items-center justify-start mb-2 ml-3">
                <p className="mr-2 font-bold">{comment.author},</p>
                <p className="font-bold">{comment.date}</p>
            </div>
            <div className="flex-col items-start">
                <p className="border-l border-gray-400 text-left px-3 py-2 mr-2 ml-5 mt-3 break-words max-w-6xl">
                    {comment.display}
                </p>
                <button
                    type="button"
                    onClick={handleReply}
                    className="ml-7 mt-4 flex bg-gradient-to-br from-[#A23A2C] to-[#C46655] text-white rounded-lg px-2 py-1 hover:from-[#C46655] hover:to-[#A23A2C] transition duration-200 ease-in-out"
                >
                    {showReplyBox ? "Cancel" : "Reply"}
                </button>
                {showReplyBox && (
                    <div>
                        <br />
                        <input
                            onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                            type="text"
                            placeholder="Your name..."
                            className="w-full mb-2.5 p-4 text-lg border border-gray-400 rounded-lg box-border"
                        />
                        <br />
                        <textarea
                            onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                            placeholder="Your comment..."
                            className="w-full mb-2.5 p-3 text-lg border border-gray-400 rounded-lg box-border"
                        />
                        <br />
                        <button
                            type="button"
                            onClick={handleReplySubmit}
                            className="bg-green-600 text-white rounded-lg px-2 py-1 mr-2 hover:bg-blue-600"
                        >
                            Save
                        </button>
                    </div>
                )}
                {replies.map((reply) => (
                    <Comment key={reply.id} comment={reply} addReply={addReply} />
                ))}
            </div>
        </div>
    );
};

export default Comment;
