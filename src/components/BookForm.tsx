import * as React from 'react';
import { BookContext } from '../contexts/BookContext';
import { FormEvent } from 'react';
import actionType from '../types/actionTypes'

export interface BookFormProps {

}

const BookForm: React.SFC<BookFormProps> = () => {
    const { dispatch } = React.useContext(BookContext)
    const [title, setTitle] = React.useState('')
    const [author, setAuthor] = React.useState('')

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({ type: actionType.ADD_BOOK, payload: { title, author } });
        setTitle('')
        setAuthor('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="book title" value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />

            <input type="text" placeholder="author" value={author}
                onChange={e => setAuthor(e.target.value)}
                required
            />

            <input type="submit" value="add book" />
        </form>
    );
}

export default BookForm;