import * as React from 'react';

import IBook from '../types/IBook';
import { BookContext } from '../contexts/BookContext';

export interface BookDetailsProps {
    book: IBook;
}


const BookDetails: React.SFC<BookDetailsProps> = ({ book }) => {
    const {removeBook} = React.useContext(BookContext)

    return (
    <li onClick={() => removeBook(book.id)}>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
    </li>
    )
}

export default BookDetails;