import React from 'react';
import styles from './Pagination.module.scss'
import ReactPaginate from "react-paginate";

export const Pagination = ({onChangePage}) => {
    return (
        <ReactPaginate
            className={styles.root}
            previousLabel="<"
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e)=> onChangePage(e.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            renderOnZeroPageCount={null}
        />
    );
};


