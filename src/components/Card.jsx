import React, { useState } from "react";

const Card = ({ item, deleteBook, readUpdateClick, keepBook,setKeepBook }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newName, setNewName] = useState("");

  const updated = (e, item) => {
    e.preventDefault();
    const newBook = { ...item, bookTitle: newName };
    const index = keepBook.indexOf(item);
    const newArray = [...keepBook];
    newArray[index] = newBook
    setKeepBook(newArray)
    setIsEdit(false)
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);

  };

  return (
    <div className="d-flex justify-content-between align-item-center border mt-5 p-3">
      <div>
        {isEdit ? (
          <form onSubmit={(e) => updated(e, item)}>
            <input onChange={(e) => setNewName(e.target.value)} />
            <button className="bg-info">Save</button>
          </form>
        ) : (
          <p style={{ textDecoration: item.isRead ? "line-through" : "none" }}>
            {item.bookTitle}
          </p>
        )}
        <p>{item.date}</p>
      </div>
      <div>
        <button className="btn btn-danger" onClick={() => deleteBook(item.id)}>
          Delete
        </button>
        <button className="btn btn-primary" onClick={handleEdit}>
          {isEdit ? 'Being edited' : 'edit'}
        </button>
        <button className="btn btn-success" onClick={readUpdateClick}>
          {item.isRead === false ? "not read" : "read"}
        </button>
      </div>
    </div>
  );
};

export default Card;
