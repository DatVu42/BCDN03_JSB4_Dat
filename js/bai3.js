/**
 * Input: number1, number2, number3
 * 
 * Các bước xử lý:
 * B1: Tạo hàm tính
 *      + Lấy giá trị từ form
 *      + Nếu number1 % 2 == 0 => countEven++
 *          Nếu number2 % 2 == 0 => countEven++
 *          Nếu number3 % 2 == 0 => countEven++
 *      + countOdd = 3 - countEven
 *      + Hiển thị kết quả lên UI
 * B2: Gắn hàm vào sự kiện click
 * 
 * Output: countEven, countOdd 
 */

function countEvenOdd() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;
    var countEven = 0;
    var countOdd = 0;

    if (number1 % 2 == 0) {
        countEven++;
    }

    if (number2 % 2 == 0) {
        countEven++;
    }

    if (number3 % 2 == 0) {
        countEven++;
    }

    countOdd = 3 - countEven;

    document.getElementById("display-count").innerHTML = "Số chẵn: " + countEven + "<br>" + "Số lẻ: " + countOdd;
}