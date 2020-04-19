import * as React from 'react';
import { BookContext } from '../contexts/BookContext';

export interface NavbarProps {
    
}
 
const Navbar: React.SFC<NavbarProps> = () => {
    const {books} = React.useContext(BookContext)
    return (
        <div className="navbar">
            <h1>Reading List</h1>
            <p>
                Currently you have {books.length} books to get through...
            </p>
        </div>
    );
}
 
export default Navbar;