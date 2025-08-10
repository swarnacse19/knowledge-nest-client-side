import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { AiFillLike } from "react-icons/ai";
import { FaFolder } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { LiaCommentDots } from "react-icons/lia";

const ArticlesDetails = () => {
  const article = useLoaderData();
  const { user } = use(AuthContext);
  const [likes, setLikes] = useState(
    Array.isArray(article.likes) ? article.likes : []
  );
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLiking, setIsLiking] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);

  const hasLiked = user && likes?.includes(user.uid);
  const isOwner = user && user.uid === article.author_id;

  useEffect(() => {
    fetch(
      `https://b11a11-server-side-swarnacse19.vercel.app/comments?article_id=${article._id}`
    )
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [article._id]);

  const handleLike = (id) => {
    if (!user || hasLiked) return;
    console.log(id);
    setIsLiking(true);
    axios
      .patch(
        `https://b11a11-server-side-swarnacse19.vercel.app/articles/${id}`,
        { likes: user.uid }
      )
      .then((res) => {
        if (res.data.success) {
          setLikes((prevLikes) => [...prevLikes, user.uid]);
        }
        setIsLiking(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLiking(false);
      });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!user || !newComment.trim()) return;

    const commentObj = {
      article_id: article._id,
      user_id: user.uid,
      user_name: user.displayName,
      user_photo: user.photoURL,
      comment: newComment,
    };

    setIsCommenting(true);
    fetch("https://b11a11-server-side-swarnacse19.vercel.app/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentObj),
    })
      .then((res) => res.json())
      .then((saved) => {
        setComments([...comments, saved]);
        setNewComment("");
        setIsCommenting(false);
      })
      .catch(() => setIsCommenting(false));
  };

  return (
    <div className="mx-auto px-14 py-6 my-24">
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>

      <div className="flex items-center gap-3 text-sm mb-4">
        <img
          src={article.author_photo}
          alt="author"
          className="w-8 h-8 rounded-full border"
        />
        <span>{article.author_name}</span> <br /> 
        <span> {new Date(article.date).toLocaleDateString()}</span>
      </div>

      <div className="mb-4">
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></div>
      </div>

      <div className="text-sm text-gray-500 mb-4 flex flex-col md:flex-row gap-3">
        <span className="flex items-center gap-3"><FaFolder size={20} color="orange"/> Category: <span className="font-medium text-gray-600">{article.category}</span></span>
        <span className="flex items-center gap-3"> <IoMdPricetags size={20} color="orange"/> Tags: <span className="text-blue-700 font-medium">{article.tags?.join(", ")}</span></span>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <button
          onClick={() => handleLike(article._id)}
          disabled={!user || hasLiked || isLiking}
          className={`px-3 py-1 rounded ${
            hasLiked ? "bg-green-700" : "bg-black text-white"
          }`}
        >
          <div className="flex items-center gap-2"><AiFillLike size={20}/> Like ({Array.isArray(likes) ? likes.length : 0})</div>
        </button>
      </div>

      <hr className="mb-6" />

      <div>
        <h2 className="text-xl flex items-center gap-3 font-semibold mb-2">
          <LiaCommentDots size={24}/> Comments ({comments.length})
        </h2>
        {comments.map((c, i) => (
          <div key={i} className="mb-4 border-b pb-2">
            <div className="flex items-center gap-2 mb-1">
              <img
                src={c.user_photo}
                className="w-6 h-6 border rounded-full"
                alt="user"
              />
              <strong>{c.user_name}</strong>
            </div>
            <p className="ml-8 text-gray-500">{c.comment}</p>
          </div>
        ))}

        {user ? (
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full border p-2 rounded mb-2"
              rows="3"
              placeholder={
                isOwner
                  ? "Kindly avoid self-commenting on your posts."
                  : "Write a comment..."
              }
              required
            />
            <button
              type="submit"
              disabled={isCommenting || isOwner}
              className="bg-green-600 text-white px-4 py-1 rounded"
            >
              {isCommenting ? "Posting..." : "Post Comment"}
            </button>
          </form>
        ) : (
          <p className="text-gray-600 mt-4 font-medium italic">
            Login to comment or like this article.
          </p>
        )}
      </div>
    </div>
  );
};

export default ArticlesDetails;
