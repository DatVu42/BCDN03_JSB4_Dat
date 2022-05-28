/**
 * Input: num1, num2, num3
 * 
 * Các bước xử lý:
 *  B1: Tạo hàm tính
 *      + Lấy giá trị từ form
 *      + Nếu num1 > num2
 *          nếu num2 > num3 => num3 < num2 < num1
 *          nếu num2 < num3
 *              nếu num1 > num3 => num2 < num3 < num1
 *              nếu num1 < num3 => num2 < num1 < num3
 *      + Nếu num1 < num2
 *          nếu num2 > num3
 *              nếu num1 > num3 => num3 < num1 < num2
 *              nếu num1 < num3 => num1 < num3 < num2
 *          nếu num2 < num3 => num1 < num2 < num3
 *              
 *      + Hiển thị kết quả lên UI                  
 *  B2: Gắn hàm vào sự kiện click
 * 
 * Output: min < mid < max
 */

function sortInt() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);
    var hienThi = "";
    
    if (num1 > num2) {
        if (num2 > num3) {
            hienThi = num3 + " < " + num2 + " < " + num1;
        } else {
            if (num1 > num3) {
                hienThi = num2 + " < " + num3 + " < " + num1;
            } else {
                hienThi = num2 + " < " + num1 + " < " + num3;
            }
        }
    } else {
        if (num2 > num3) {
            if (num1 > num3) {
                hienThi = num3 + " < " + num1 + " < " + num2;
            } else {
                hienThi = num1 + " < " + num3 + " < " + num2;
            }
        } else {
            hienThi = num1 + " < " + num2 + " < " + num3;
        }
    }

    document.getElementById("display-sort").innerHTML = hienThi;
}