document.getElementById("txtTinhTienCap").onclick = function () {
  var tienNhaDan = loaiNhaDan();
  var tienDoanhNghiep = loaiDoanhNghiep();
  var chonKhachHang = document.getElementById("txtChonLoaiKhachHang").value;
  var traKQTien = 0;
  if (chonKhachHang === "nhaDan") {
    traKQTien = loaiNhaDan();
    return traKQTien;
  } else {
    traKQTien = loaiDoanhNghiep();
    return traKQTien;
  }
};
