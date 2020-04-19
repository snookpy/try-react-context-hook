import React, {createContext, useState, ReactNode} from 'react';
import { v4 as uuidv4 } from 'uuid';
import IBook from '../types/IBook';

export interface IBookContext {
    books: IBook[];
    addBook?: (title: string, author: string) => void;
    removeBook?: (id: string) => void;
}

export const BookContext = createContext<IBookContext>({
    books: []
});

export interface BookContextProviderProps {
    children: ReactNode
}
 
const BookContextProvider: React.SFC<BookContextProviderProps> = ({
    children
}) => {
    const [books, setBooks] = useState<IBook[]>([
        {title: 'name of thw wind', author: 'patrick rothfuss', id: '1'},
        {title: 'the final empire', author: 'brandon sanderson', id: '2'}
    ])

    const addBook = (title: string, author: string) => {
        setBooks([...books, {title, author, id: uuidv4()}])
    }
    const removeBook = (id: string) =>{
        setBooks(books.filter(book => book.id !== id))
    }

    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {children}
        </BookContext.Provider>
    )
}
 
export default BookContextProvider;