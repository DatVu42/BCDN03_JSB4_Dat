/**
 * Input: num1, num2, num3
 * 
 * Các bước xử lý:
 *  B1: Tìm các thẻ bằng id
 *  B2: Tạo hàm tính
 *      + Lấy giá trị từ form
 *      + Tìm min
 *          Nếu num1 < num2 && num1 < num3 => min = num1
 *          else if num2 < num3 => min = num2
 *          else min = num3
 *      + Tìm max
 *          Nếu num1 > num2 && num1 > num3 => max = num1
 *          else if num2 > num3 => max = num2
 *          else max = num3 
 *      + Tìm mid
 *          Nếu num1 != min && num1 != max => mid = num1
 *          else if num2 != min && num2 != max => mid = num2
 *          else mid = num3
 *      + Hiển thị kết quả lên UI                  
 *  B3: Gắn hàm vào sự kiện click
 * 
 * Output: min < mid < max
 */

var inpNum1 = document.getElementById("num1");
var inpNum2 = document.getElementById("num2");
var inpNum3 = document.getElementById("num3");
var min = 0;
var mid = 0;
var max = 0;

function sortInt() {
    var num1 = parseInt(inpNum1.value);
    var num2 = parseInt(inpNum2.value);
    var num3 = parseInt(inpNum3.value);
    
    if (num1 < num2 && num1 < num3) {
        min = num1;
    } else if (num2 < num3) {
        min = num2;
    } else {
        min = num3;
    }

    if (num1 > num2 && num1 > num3) {
        max = num1;
    } else if (num2 > num3) {
        max = num2;
    } else {
        max = num3;
    }

    if (num1 != min && num1 != max) {
        mid = num1;
    } else if (num2 != min && num2 != max) {
        mid = num2;
    } else {
        mid = num3;
    }

    document.getElementById("display").innerHTML = min + " < " + mid + " < " + max;
}