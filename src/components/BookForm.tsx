import * as React from 'react';
import { BookContext } from '../contexts/BookContext';
import { FormEvent } from 'react';


export interface BookFormProps {

}

const BookForm: React.SFC<BookFormProps> = () => {
    const { addBook } = React.useContext(BookContext)
    const [title, setTitle] = React.useState('')
    const [author, setAuthor] = React.useState('')

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        addBook(title, author);
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