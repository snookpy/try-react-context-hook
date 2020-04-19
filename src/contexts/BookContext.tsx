import React, {createContext, useReducer, ReactNode} from 'react';
import IBook from '../types/IBook';
import { bookReducer } from '../reducers/bookReducer';

export interface IBookContext {
    books: IBook[];
    dispatch: React.Dispatch<any>;
}

export const BookContext = createContext<IBookContext>({} as IBookContext);

export interface BookContextProviderProps {
    children: ReactNode
}
 
const BookContextProvider: React.SFC<BookContextProviderProps> = ({
    children
}) => {
    const [books, dispatch] = useReducer(bookReducer, [])

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {children}
        </BookContext.Provider>
    )
}
 
export default BookContextProvider;