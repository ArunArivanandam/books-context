import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const renderedList = books.map((book) => {
    return (
      <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return <div className="book-list">{renderedList}</div>;
}

export default BookList;
