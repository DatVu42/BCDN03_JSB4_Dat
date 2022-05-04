/**
 * Input: a, b, c (3 cạnh tam giác)
 * 
 * Các bước xử lý:
 * B1: Tìm các thẻ bằng id
 * B2: tạo hàm tính
 *  + Lấy giá trị từ form
 *  + Nếu a == b && a == c => tam giác đều
 *      Nếu a == b || a == c || b == c => tam giác cân
 *      Nếu a2 + b2 = c2 => tam giác vuông
 *  + Hiển thị kết quả lên UI
 * B3: gắn hàm vào sự kiện click
 * 
 * Output: loại tam giác
 */

var inpA = document.getElementById("a");
var inpB = document.getElementById("b");
var inpC = document.getElementById("c");

function timTamGiac() {
    var a = Number(inpA.value);
    var b = Number(inpB.value);
    var c = Number(inpC.value);
    var loaiTamGiac = "";

    if (a + b <= c || b + c <= a || a + c <= b) {
        alert("Không phải là tam giác");
        return;
    };

    if (a == b && b == c) {
        loaiTamGiac = "Tam giác đều";
    } else if (a == b || a == c || b == c) {
        loaiTamGiac = "Tam giác cân";
    } else if (a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b) {
        loaiTamGiac = "Tam giác vuông";
    }

    document.getElementById("display-tamgiac").innerHTML = loaiTamGiac;
} 