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

var inpA = document.getElementById("canhA");
var inpB = document.getElementById("canhB");
var inpC = document.getElementById("canhC");

function timTamGiac() {
    var canhA = inpA.value;
    var canhB = inpB.value;
    var canhC = inpC.value;
    var loaiTamGiac = "";

    if (canhA == canhB && canhA == canhC) {
        loaiTamGiac = "Tam giác đều";
    } else if (canhA == canhB || canhA == canhC || canhB == canhC) {
        loaiTamGiac = "Tam giác cân";
    } else if (canhA * canhA + canhB * canhB == canhC * canhC) {
        loaiTamGiac = "Tam giác vuông";
    } else {
        loaiTamGiac = "Không phải là tam giác";
    }

    document.getElementById("display-tamgiac").innerHTML = loaiTamGiac;
} 