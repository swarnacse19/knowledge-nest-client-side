import React, { use, useRef, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import JoditEditor from "jodit-react";

function PostArticle() {
  const { user } = use(AuthContext);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newArticle = Object.fromEntries(formData.entries());

    newArticle.author_name = user.displayName;
    newArticle.author_email = user.email;
    newArticle.author_photo = user.photoURL;
    newArticle.content = content;

    console.log(newArticle);
  };
  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-200 rounded-2xl shadow-xl my-10 text-black">
      <h2 className="text-3xl font-bold text-center mb-6">
        Post a New Article
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label font-semibold">Title</label>
          <input
            type="text"
            name="title"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Category</label>
          <input
            type="text"
            name="category"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Tags (comma separated)</label>
          <input type="text" name="tags" className="input input-bordered w-full" />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Thumbnail Image URL</label>
          <input
            type="url"
            name="thumbnail"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Date</label>
          <input
            type="date"
            name="date"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Content</label>
          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label font-semibold">Author Name</label>
            <input
              type="text"
              value={user.displayName}
              readOnly
              className="input input-disabled w-full"
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Author Email</label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="input input-disabled w-full"
            />
          </div>
        </div>

        <div className="text-center pt-4">
          <button type="submit" className="btn btn-primary w-full">
            Post Article
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostArticle;
