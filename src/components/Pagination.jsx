import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

export default function Pagination ({ data, itemsPerPage, renderItems }) {
  const [currentItems, setCurrentItems] = useState([]); 
  const [pageCount, setPageCount] = useState(0); 
  const [itemOffset, setItemOffset] = useState(0); 

  // 페이지 변경 시 데이터 업데이트
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // 페이지 클릭 시 호출되는 함수
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      {renderItems(currentItems)} 
      <div>
        <Paginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="paginateUi"
        />
      </div>
    </div>
  );
};

const Paginate = styled(ReactPaginate).attrs({
  className: "paginateUi"
})`
  display: flex;
  justify-content: center;
  gap: 30px;
  font-size: 18px;
  margin: 30px;

`

