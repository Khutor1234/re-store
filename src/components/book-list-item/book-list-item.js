import React from 'react';

import './book-list-item.css';

const BookListItem = ({ book }) => {
    const {title, author} = book;

    return(
        <div>
            <span>{title}</span>
            <span>{author}</span>
        </div>
    )
}

export default BookListItem;