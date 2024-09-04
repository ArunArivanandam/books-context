import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, title) => {
    setShowEdit(false);
    onEdit(id, title);
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
