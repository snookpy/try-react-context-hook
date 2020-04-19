import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';


export interface BookListProps {

}

const BookList: React.SFC<BookListProps> = () => {
    const { books } = useContext(BookContext)
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book => <BookDetails book={book} key={book.id} />)}
            </ul>
        </div>
    ) : (
            <div className="empty">
                No books to read. Hello free time :m
            </div>
        )
}

export default BookList;