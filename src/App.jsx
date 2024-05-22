import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [bookName, setBookName] = useState("");
  const [keepBook, setKeepBook] = useState([]);

  const addObject = (e) => {
    e.preventDefault();
    const newBook = {
      id: new Date().getTime(),
      bookTitle: bookName,
      date: new Date().toLocaleString(),
      isRead: false,
    };

    setKeepBook([...keepBook, newBook]);

    setBookName("");
  };

  const deleteBook = (sil) => {
    const filtered = keepBook.filter((item) => item.id !== sil);

    setKeepBook(filtered);
  };
  const handleReadChange = (book) => {
    const updatedBook = { ...book, isRead: !book.isRead };

    const cloneBookList = [...keepBook];

    const bookIndex = cloneBookList.findIndex((item) => item.id === book.id);

    cloneBookList.splice(bookIndex, 1, updatedBook);

    setKeepBook(cloneBookList);
  };

  return (
    <div>
      <header className="bg-secondary text-light py-2 text-center fs-5">
        Book House
      </header>

      <div className="container border">
        <form className="d-flex gap-3 mt-4" onSubmit={addObject}>
          <input
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            placeholder="Enter book name ..."
            className="form-control shadow"
          />
          <button className="btn btn-warning shadow">Add</button>
        </form>
      </div>
      <div>
        {keepBook.length === 0 ? (
          <p className="d-flex justify-content-center mt-5">-No books have been entered yet-</p>
        ) : (
          keepBook.map((item) => (
            <Card
            keepBook={keepBook}
            setKeepBook={setKeepBook}
              readUpdateClick={() => handleReadChange(item)}
              deleteBook={deleteBook}
              item={item}
              key={item.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
