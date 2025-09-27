import React from "react";

function MyData({ post, openModal, handleDelete }) {
  const {
    _id,
    title,
    category,
    tags,
    date,
  } = post;

  return (
    <tr className="border-t border-neutral-400 font-medium">
      <td className="font-semibold">{title}</td>
      <td>{category}</td>
      <td className="text-blue-600">{tags.map((tag, index) => <p key={index}>#{tag}</p>)}</td>
      <td>{date}</td>
      <td className="flex gap-2">
        <button className="px-3 py-2 border border-gray-400 text-green-500" onClick={() => openModal(post)}>
          Update
        </button>
        <button onClick={() => handleDelete(_id)} className="px-3 py-2 border border-gray-400 text-red-500">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default MyData;
