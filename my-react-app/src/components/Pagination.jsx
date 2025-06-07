import React from "react";
import "./Pagination.css";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const pages = [];

    for (let i = 1; i <= Math.min(totalPages, 10); i++) {
        pages.push(i);
    }

    return (
        <div className="pagination">
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={page === currentPage ? "page-btn active" : "page-btn"}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
