import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export function PaginationPoster({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);

  }

  return (
    <ul>
      {pageNumbers.map((number) => (
        <li key={number} >
          <a onClick={() => paginate(number)} href="/">
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
}
