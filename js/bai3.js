/**
 * Input: number1, number2, number3
 * 
 * Các bước xử lý:
 * B1: Tìm các thẻ bằng id
 * B2: Tạo hàm tính
 *      + Lấy giá trị từ form
 *      + Nếu number1 % 2 == 0 => countEven++; else countOdd++
 *          Nếu number2 % 2 == 0 => countEven++; else countOdd++
 *          Nếu number3 % 2 == 0 => countEven++; else countOdd++
 *      + Hiển thị kết quả lên UI
 * B3: Gắn hàm vào sự kiện click
 * 
 * Output: countEven, countOdd 
 */

var inpNumber1 = document.getElementById("number1");
var inpNumber2 = document.getElementById("number2");
var inpNumber3 = document.getElementById("number3");

function countEvenOdd() {
    var number1 = inpNumber1.value;
    var number2 = inpNumber2.value;
    var number3 = inpNumber3.value;
    var countEven = 0;
    var countOdd = 0;

    if (number1 % 2 == 0) {
        countEven++;
    } else {
        countOdd++;
    }

    if (number2 % 2 == 0) {
        countEven++;
    } else {
        countOdd++;
    }

    if (number3 % 2 == 0) {
        countEven++;
    } else {
        countOdd++;
    }

    document.getElementById("display-count").innerHTML = "Tổng số chẵn: " + countEven + "<br>" + "Tổng số lẻ: " + countOdd;
}