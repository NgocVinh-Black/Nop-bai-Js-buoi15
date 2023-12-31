//Bài tập quản lý tuyển sinh
//Điểm cộng khu vực
function diemCongKhuVuc() {
  var chonKhuVuc = document.getElementById("txtChonKhuVuc").value;
  var diemKhuVuc = 0;
  switch (chonKhuVuc) {
    case "A":
      {
        diemKhuVuc = 2;
      }
      return diemKhuVuc;
    case "B":
      {
        diemKhuVuc = 1;
      }
      return diemKhuVuc;
    case "C":
      {
        diemKhuVuc = 0.5;
      }
      return diemKhuVuc;
    default: {
      diemKhuVuc = 0;
      return diemKhuVuc;
    }
  }
}
//Điểm cộng đối tượng
function diemCongDoiTuong() {
  var chonDoiTuong = document.getElementById("txtChonDoiTuong").value;
  var diemDoiTuong = 0;
  switch (chonDoiTuong) {
    case "1": {
      diemDoiTuong = 2.5;
      return diemDoiTuong;
    }

    case "2": {
      diemDoiTuong = 1.5;
      return diemDoiTuong;
    }

    case "3": {
      diemDoiTuong = 1;
      return diemDoiTuong;
    }

    default: {
      diemDoiTuong = 0;
      return diemDoiTuong;
    }
  }
}
//Bấm click tổng điểm
document.getElementById("txtKetQuaTS").onclick = function () {
  var diemKhuVuc = diemCongKhuVuc();
  var diemDoiTuong = diemCongDoiTuong();
  var diemMon1 = document.getElementById("txtDiemMonThu1").value * 1;
  var diemMon2 = document.getElementById("txtDiemMonThu2").value * 1;
  var diemMon3 = document.getElementById("txtDiemMonThu3").value * 1;
  var diemChuan = document.getElementById("txtDiemChuan").value * 1;
  var diemTong = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;
  if (diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
    if (diemChuan > diemTong) {
      document.getElementById(
        "ketQuaTuyenSinh"
      ).innerHTML = `Bạn đã rớt. Tổng điểm: ${diemTong}`;
    } else {
      document.getElementById(
        "ketQuaTuyenSinh"
      ).innerHTML = `Bạn đã đậu. Tổng điểm: ${diemTong}`;
    }
  } else {
    document.getElementById(
      "ketQuaTuyenSinh"
    ).innerHTML = `Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0`;
  }
};

//Bài tập tính tiền điện
//Bảng giá tiền điện
function giaTienDien() {
  var soKW = document.getElementById("txtNhapSokw").value * 1;
  if (soKW > 0) {
    if (0 < soKW && soKW <= 50) {
      tongTien = soKW * 500;
      return tongTien;
    } else if (50 < soKW && soKW <= 100) {
      tongTien = 50 * 500 + (soKW - 50) * 650;
      return tongTien;
    } else if (100 < soKW && soKW <= 200) {
      tongTien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
      return tongTien;
    } else if (200 < soKW && soKW <= 350) {
      tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
      return tongTien;
    } else {
      tongTien =
        50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
      return tongTien;
    }
  } else {
    alert("Nhập lại dữ liệu");
  }
}
//Bấm click tính giá tiền điện
document.getElementById("txtTinhTienDien").onclick = function () {
  var nhapHoTen = document.getElementById("txtNhapHoTen").value;
  var giaTienDienPT = giaTienDien();
  document.getElementById(
    "ketQuaTienDien"
  ).innerHTML = `Họ tên: ${nhapHoTen}; Tiền điện: ${giaTienDienPT.toLocaleString(
    "it-IT",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
};

//Bài tập tính thuế thu nhập cá nhân
//Số người phụ thuộc
function soNguoiPhuThuoc() {
  var sNPT = document.getElementById("txtSoNguoiPhuThuoc").value * 1;
  var tienNPT = 0;
  tienNPT = sNPT * 1600000;
  return tienNPT;
}
//Thu nhập chịu thuế = Tổng thu nhập năm - 4tr - Số người phụ thuộc * 1.6tr
document.getElementById("txtTinhTienThue").onclick = function () {
  var nhapHoTenTT = document.getElementById("txtNhapHoTenTinhThue").value;
  var tongThuNhap1Nam = document.getElementById("txtTongThuNhap").value * 1;
  var sNPT = soNguoiPhuThuoc();
  var tong = 0;
  if (tongThuNhap1Nam > 0) {
    if (0 < tongThuNhap1Nam && tongThuNhap1Nam <= 60000000) {
      tong = (tongThuNhap1Nam - 4000000 - sNPT) * 0.05;
    } else if (60000000 < tongThuNhap1Nam && tongThuNhap1Nam <= 120000000) {
      tong = (tongThuNhap1Nam - 4000000 - sNPT) * 0.1;
    } else if (120000000 < tongThuNhap1Nam && tongThuNhap1Nam <= 210000000) {
      tong = (tongThuNhap1Nam - 4000000 - sNPT) * 0.15;
    } else if (210000000 < tongThuNhap1Nam && tongThuNhap1Nam <= 384000000) {
      tong = (tongThuNhap1Nam - 4000000 - sNPT) * 0.2;
    } else if (384000000 < tongThuNhap1Nam && tongThuNhap1Nam <= 624000000) {
      tong = (tongThuNhap1Nam - 4000000 - sNPT) * 0.25;
    } else if (624000000 < tongThuNhap1Nam && tongThuNhap1Nam <= 960000000) {
      tong = (tongThuNhap1Nam - 4000000 - sNPT) * 0.3;
    } else {
      tong = (tongThuNhap1Nam - 4000000 - sNPT) * 0.35;
    }
  } else {
    alert("Nhập lại dữ liệu");
  }
  document.getElementById(
    "ketQuaTienThue"
  ).innerHTML = `Họ tên: ${nhapHoTenTT}; Tiền thuế thu nhập cá nhân: ${tong.toLocaleString(
    "it-IT",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
};

//Bài tập tính tiền cáp
//Ẩn hiện sô kết nối
function chonLoaiKhachHang() {
  var chonKhachHang = document.getElementById("txtChonLoaiKhachHang").value;
  var demoAnHien = document.getElementById("demoAH");
  if (chonKhachHang === "doanhNghiep") {
    demoAnHien.style.display = "block";
  } else {
    demoAnHien.style.display = "none";
  }
}
//tính giá nhà dânyy
function loaiNhaDan() {
  var kenhCaoCap = document.getElementById("txtSoKenhCaoCap").value * 1;
  var phiHoaDon = 4.5;
  var phiDichVu = 20.5;
  var thueKenhCaoCap = 7.5;
  var tienCapNhaDan = 0;
  if (kenhCaoCap > 0) {
    tienCapNhaDan = kenhCaoCap * thueKenhCaoCap + phiHoaDon + phiDichVu;
    return tienCapNhaDan;
  } else {
    alert("Nhập lại dữ liệu");
  }
}
//tính giá doanh nghiệp
function loaiDoanhNghiep() {
  var kenhCaoCap = document.getElementById("txtSoKenhCaoCap").value * 1;
  var soKetNoi = document.getElementById("txtSoKetNoi").value * 1;
  var phiHoaDon = 15;
  var thueKenhCaoCap = 50;
  var phiDichVu = 75;
  var tienCapDoanhNghiep = 0;
  if (kenhCaoCap > 0) {
    if (soKetNoi <= 10) {
      tienCapDoanhNghiep = phiHoaDon + phiDichVu + thueKenhCaoCap * kenhCaoCap;
      return tienCapDoanhNghiep;
    } else {
      tienCapDoanhNghiep =
        phiHoaDon +
        (phiDichVu + 5 * (soKetNoi - 10)) +
        thueKenhCaoCap * kenhCaoCap;
      return tienCapDoanhNghiep;
    }
  } else {
    alert("Nhập lại dữ liệu");
  }
}
//Bấm nút tính giá tiền
document.getElementById("txtTinhTienCap").onclick = function () {
  var chonKhachHang = document.getElementById("txtChonLoaiKhachHang").value;
  var tienNhaDan = loaiNhaDan();
  var tienDoanhNghiep = loaiDoanhNghiep();
  var maKH = document.getElementById("txtNhapMaKhachHang").value;
  var traKQTien = 0;
  if (chonKhachHang === "nhaDan") {
    traKQTien = loaiNhaDan();
  } else if (chonKhachHang === "doanhNghiep") {
    traKQTien = loaiDoanhNghiep();
  } else {
    alert("Nhập lại dữ liệu");
  }
  document.getElementById(
    "ketQuaTienCap"
  ).innerHTML = `Mã khách hàng: ${maKH}; Tiền cáp: ${traKQTien}`;
};
