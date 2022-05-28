/**
 * Input: a, b, c (3 cạnh tam giác)
 * 
 * Các bước xử lý:
 * B1: tạo hàm tính
 *  + Lấy giá trị từ form
 *  + Nếu a == b && a == c => tam giác đều
 *      Nếu a == b || a == c || b == c => tam giác cân
 *      Nếu a2 + b2 = c2 => tam giác vuông
 *  + Hiển thị kết quả lên UI
 * B2: gắn hàm vào sự kiện click
 * 
 * Output: loại tam giác
 */

function timTamGiac() {
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);
    var loaiTamGiac = "";

    if (a == b && b == c) {
        loaiTamGiac = "Tam giác đều";
    } else if (a == b || a == c || b == c) {
        loaiTamGiac = "Tam giác cân";
    } else if (a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b) {
        loaiTamGiac = "Tam giác vuông";
    } else {
        loaiTamGiac = "Một loại tam giác nào đó";
    }

    document.getElementById("display-tamgiac").innerHTML = loaiTamGiac;
} 