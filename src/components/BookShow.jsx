import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);

  const { deleteBookById } = useBooksContext();

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit === true) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`http://picsum.photos/seed/${book.id}/300/200`} />
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          ✏️
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          X
        </button>
      </div>
    </div>
  );
}

export default BookShow;
