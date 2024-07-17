import {Pagination} from 'react-bootstrap';

const CustomPagination = ({ count, pageSize, page, loading, handlePageChange }) => {
  const totalPages = Math.ceil(count / pageSize);

  // Calculate the range of page numbers to display
  const pageNumbers = [];
  const startPage = Math.max(1, page - 2);
  const endPage = Math.min(totalPages, page + 2);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination
      aria-disabled={loading}
      className='d-flex justify-content-center mt-5 align-items-center fixed-bottom w-'
    >
      <Pagination.Prev
        disabled={loading || page === 1}
        onClick={() => handlePageChange(page - 1)}
      />

      {startPage > 1 && (
        <>
          <Pagination.Item disabled={loading} onClick={() => handlePageChange(1)}>
            1
          </Pagination.Item>
          {startPage > 2 && <Pagination.Ellipsis />}
        </>
      )}

      {pageNumbers.map((pageNumber) => (
        <Pagination.Item
          disabled={loading}
          key={pageNumber}
          active={page === pageNumber}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </Pagination.Item>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <Pagination.Ellipsis />}
          <Pagination.Item disabled={loading} onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </Pagination.Item>
        </>
      )}

      <Pagination.Next
        disabled={loading || page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      />
    </Pagination>
  );
};

export default CustomPagination;
