import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import JoditEditor from "jodit-react";
import MyData from "../components/MyData";

function MyArticles() {
  const { user } = useContext(AuthContext);
  const articles = useLoaderData();
  const [myArticle, setMyArticle] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const editor = useRef(null);
  const [content, setContent] = useState("");

  //console.log(articles);

  const userId = user.uid;

  useEffect(() => {
    if (articles && userId) {
      const userArticles = articles.filter(
        (art) => art.author_id === userId
      );
      setMyArticle(userArticles);
    }
  }, [articles, userId]);

  //console.log(myArticle);

  const openModal = (article) => {
    setSelectedArticle(article);
    setContent(article.content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newData = Object.fromEntries(formData.entries());
    newData.content = content;

    console.log(newData);
    newData.tags = newData.tags
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);

    fetch(`http://localhost:5000/articles/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Post Updated successfully!",
            icon: "success",
          });
          const updatedArticle = { ...selectedArticle, ...newData };
          updatedArticle._id = id;

          setMyArticle((prev) =>
            prev.map((g) => (g._id === id ? updatedArticle : g))
          );
          closeModal();
        }
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:5000/articles/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
                icon: "success",
              });

              setMyArticle(myArticle.filter((g) => g._id !== id));
            }
          });
      }
    });
  };


  return (
    <div className="my-10 text-black min-h-screen">
      {myArticle.length === 0 ? (
        <div className="max-w-5xl mx-auto bg-gray-100 shadow-md rounded-xl py-24 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-red-600">
            No Posts Found
          </h2>
          <p className="text-gray-600">
            Please create your own post to get started.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto max-w-11/12 mx-auto">
          <table className="table table-md">
            <thead>
              <tr className="bg-black text-white">
                <th>Title</th>
                <th>Category</th>
                <th>Tags</th>
                <th>Publication Date</th>
                <th>Button</th>
              </tr>
            </thead>
            <tbody>
              {myArticle.map((post) => (
                <MyData
                  key={post._id}
                  post={post}
                  openModal={openModal}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && selectedArticle && (
        <dialog open className="modal modal-open">
          <div className="modal-box">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={closeModal}
              >
                ✕
              </button>
            </form>
            <form
              onSubmit={(e) => handleUpdate(e, selectedArticle._id)}
              className="space-y-4"
            >
              <div className="form-control">
                <label className="label font-semibold">Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={selectedArticle.title}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label font-semibold">Category</label>
                <input
                  type="text"
                  name="category"
                  defaultValue={selectedArticle.category}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label font-semibold">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  name="tags"
                  defaultValue={selectedArticle.tags}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label font-semibold">
                  Thumbnail Image URL
                </label>
                <input
                  type="url"
                  name="thumbnail"
                  defaultValue={selectedArticle.thumbnail}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label font-semibold">Date</label>
                <input
                  type="date"
                  name="date"
                  defaultValue={selectedArticle.date}
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
                  Update
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default MyArticles;
