import { v4 as uuidv4 } from 'uuid';

import IBook from "../types/IBook"
import actionType from '../types/actionTypes'

interface IAction {
    type: string;
    payload:  any;
}

// {title: 'name of thw wind', author: 'patrick rothfuss', id: '1'},
//             {title: 'the final empire', author: 'brandon sanderson', id: '2'}
export const bookReducer =  (state: IBook[], action: IAction) => {
    switch(action.type) {
        case actionType.ADD_BOOK:
        return [
            ...state,
            {
                title: action.payload.title,
                author: action.payload.author,
                id: uuidv4()
            }
        ]
        case actionType.REMOVE_BOOK:
            return state.filter(book => book.id !== action.payload)

        default: 
            return state;
    }
}