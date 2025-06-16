import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

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
    fetch(`http://localhost:5000/comments?article_id=${article._id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [article._id]);

  const handleLike = (id) => {
    if (!user || hasLiked) return;
    console.log(id);
    setIsLiking(true);
    axios
      .patch(`http://localhost:5000/articles/${id}`, { likes: user.uid })
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
    fetch("http://localhost:5000/comments", {
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
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>

      <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
        <img
          src={article.author_photo}
          alt="author"
          className="w-8 h-8 rounded-full border"
        />
        <span>{article.author_name}</span>
        <span>• {new Date(article.date).toLocaleDateString()}</span>
      </div>

      <div className="mb-4">
        <div
          className="text-gray-800 prose max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></div>
      </div>

      <div className="text-sm text-gray-500 mb-4">
        <span>📁 Category: {article.category}</span> |
        <span> 🏷️ Tags: {article.tags?.join(", ")}</span>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <button
          onClick={() => handleLike(article._id)}
          disabled={!user || hasLiked || isLiking}
          className={`px-3 py-1 rounded ${
            hasLiked ? "bg-green-300" : "bg-blue-500 text-white"
          }`}
        >
          👍 Like ({Array.isArray(likes) ? likes.length : 0})
        </button>
      </div>

      <hr className="mb-6" />

      <div>
        <h2 className="text-xl font-semibold mb-2">
          💬 Comments ({comments.length})
        </h2>
        {comments.map((c, i) => (
          <div key={i} className="mb-4 border-b pb-2">
            <div className="flex items-center gap-2 mb-1">
              <img
                src={c.user_photo}
                className="w-6 h-6 rounded-full"
                alt="user"
              />
              <strong>{c.user_name}</strong>
            </div>
            <p className="ml-8 text-gray-700">{c.comment}</p>
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
