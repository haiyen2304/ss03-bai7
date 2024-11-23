import React from "react";

export default function Controls({ search, handleSearch, sort, handleSort }) {
  return (
    <>
      <h1>Tìm kiếm: {search}</h1>
      {/* ô input tìm kiếm */}
      <input
        type="text"
        placeholder="tìm kiếm theo tên ..."
        onChange={(e) => handleSearch(e.target.value)}
        value={search} //Gắn giá trị state (search) vào ô input. Giá trị trong ô input sẽ luôn đồng bộ với giá trị state.
      />

      {/* chọn chiều sắp xếp */}
      <select
        value={sort.order}
        onChange={(e) => handleSort({ ...sort, order: e.target.value })}
      >
        <option value="asc">tăng dần</option>
        <option value="desc">giảm dần</option>
      </select>
    </>
  );
}
