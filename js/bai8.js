/**
 * Khối 1: Input
 *  Tên và tọa độ của sv1, sv2, sv2
 *  Tọa độ của trường học
 * 
 * Khối 2: Các bước xử lý
 *  B1: Tạo hàm timSV
 *      + Lấy các giá trị từ form
 *      + Tính khoảng cách của từng SV tới trường
 *      + Tìm khoảng cách lớn nhất
 *      + Hiển thị kết quả lên UI
 *  B2: Gắn hàm vào sự kiện click
 * 
 * Khối 3: Output
 *  Tên SV xa trường nhất
 */

function timSV() {
    var sv1 = document.getElementById("sv1").value;
    var x1 = document.getElementById("x1").value;
    var y1 = document.getElementById("y1").value;
    var sv2 = document.getElementById("sv2").value;
    var x2 = document.getElementById("x2").value;
    var y2 = document.getElementById("y2").value;
    var sv3 = document.getElementById("sv3").value;
    var x3 = document.getElementById("x3").value;
    var y3 = document.getElementById("y3").value;
    var x0 = document.getElementById("x0").value;
    var y0 = document.getElementById("y0").value;

    var d1 = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
    var d2 = Math.sqrt(Math.pow(x2 - x0, 2) + Math.pow(y2 - y0, 2));
    var d3 = Math.sqrt(Math.pow(x3 - x0, 2) + Math.pow(y3 - y0, 2));

    var max = d1;
    if (d2 > max) {
        max = d2;
    }
    if (d3 > max) {
        max = d3;
    }

    if (max == d1) {
        document.getElementById("sinhVien").innerHTML = "Sinh viên xa trường nhất: " + sv1;
    } else if (max == d2) {
        document.getElementById("sinhVien").innerHTML = "Sinh viên xa trường nhất: " + sv2;
    } else {
        document.getElementById("sinhVien").innerHTML = "Sinh viên xa trường nhất: " + sv3;
    }
}