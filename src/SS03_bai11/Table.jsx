import React from "react";
import StateListUser from "./stateListUser";
import Controls from "./Controls";

export default function Table() {
  const studentList = [
    { id: 1, name: "Nguyễn Văn A", age: 20, grade: "A" },
    { id: 2, name: "Trần Thị B", age: 22, grade: "B" },
    { id: 3, name: "Phạm Văn C", age: 21, grade: "C" },
  ];
  // State để lưu danh sách sinh viên
  const [students, setStudents] = useState(studentList);
  // State để quản lý nội dung tìm kiếm
  const [search, setSearch] = useState("");
  // State để quản lý điều kiện sắp xếp
  const [sort, setSort] = useState({
    field: "id", // Trường được sắp xếp (id, name, age, grade)
    order: "asc", // "asc" = tăng dần, "desc" = giảm dần
  });

  //==========hảm xử lý thay đổi nội dung tìm kiếm=============
  const handleSearch = (e) => {
    const newSearch = e.target.value; // Lấy giá trị tìm kiếm mới
    setSearch(newSearch);
    setStudents(filteredAndSortedStudents(students, newSearch, sort));
  };
  //=========hảm Hàm xử lý thay đổi điều kiện sắp xếp==========
  const handleSort = (field) => {
    const newOrder = sort.order === "asc" ? "desc" : "asc"; // kiểm tra xem hiện tại đang sắp xếp theo thứ tự tăng dần hay giảm dần
    setSort({
      field: field,
      order: newOrder, // đổi chiều
    });
  };
  //========= Lọc và sắp xếp dữ liệu==============================
  const filteredAndSortedStudents = (students, search, sort) => {
    return students
      .filter(
        (student) => student.name.toLowerCase().includes(search.toLowerCase()) // Lọc theo tên
      )
      .sort((a, b) => {
        if (sort.order === "asc") {
          return a[sort.field] > b[sort.field] ? 1 : -1; // Sắp xếp tăng dần
        } else {
          return a[sort.field] < b[sort.field] ? 1 : -1; // Sắp xếp giảm dần
        }
      });
  };

  return (
    <>
      <Controls
        search={search}
        handleSearch={handleSearch}
        sort={sort}
        handleSort={handleSort}
      />
      <h1>Danh sách sinh viên</h1>
      <table>
        <thead>
          <tr>ID</tr>
          <tr>họ tên</tr>
          <tr>tuổi</tr>
          <tr>xếp loại</tr>
        </thead>
        <tbody>
          <StateListUser studentList={filteredAndSortedStudents} />
        </tbody>
      </table>
    </>
  );
}
