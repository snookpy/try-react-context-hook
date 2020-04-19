import * as React from 'react';

import IBook from '../types/IBook';
import { BookContext } from '../contexts/BookContext';
import actionType from '../types/actionTypes'
export interface BookDetailsProps {
    book: IBook;
}


const BookDetails: React.SFC<BookDetailsProps> = ({ book }) => {
    const {dispatch} = React.useContext(BookContext)



    return (
    <li onClick={() => dispatch({type: actionType.REMOVE_BOOK, payload: book.id})}>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
    </li>
    )
}

export default BookDetails;