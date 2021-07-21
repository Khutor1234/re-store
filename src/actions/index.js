
const bookLoaded = (newBooks) =>{
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    };
};

export{
    bookLoaded,
}