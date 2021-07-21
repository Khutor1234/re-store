import React, {Component} from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import {withBookstoreService} from '../hoc';
import {booksLoaded} from '../../actions';
import {compose} from '../../utils';

import './book-list.css';

class BookList extends Component{

    componentDidMount(){
        //1. получить данные 
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();
        console.log(data)

        //2.передать действие в store
        this.props.booksLoaded(data)
    }

    render() {
        const {books} = this.props;

        return(
            <ul>
                {
                    books.map((book) => {
                        return(
                            <li key = {book.id}><BookListItem book = {book} /></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        books: state.books
    }
}

const mapDispatchToProps =  {
    booksLoaded
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookList);