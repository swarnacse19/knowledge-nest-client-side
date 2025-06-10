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
    <tr className="border-t border-neutral-400 text-black">
      <td className="font-semibold">{title}</td>
      <td>{category}</td>
      <td>{tags}</td>
      <td>{date}</td>
      <td className="flex gap-2">
        <button className="btn text-green-500" onClick={() => openModal(post)}>
          Update
        </button>
        <button onClick={() => handleDelete(_id)} className="btn text-red-500">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default MyData;
