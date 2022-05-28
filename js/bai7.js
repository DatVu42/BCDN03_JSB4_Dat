/**
 * Input: num (3 digits)
 * 
 * Các bước xử lý:
 *  B1: Lấy các thẻ bằng id
 *  B2: Tạo hàm tính
 *      + num = parseInt(inpNum.value)
 *          hundred = Math.floor(num / 100)
 *          ten = Math.floor(num % 100 / 10)
 *          unit = Math.floor(num % 100 % 10)
 *      + Hiển thị kết quả lên UI
 *  B3: Gắn hàm vào sự kiện click
 * 
 * Output: read
 */

var inpNum = document.getElementById("num");

function readNum() {
    var num = parseInt(inpNum.value);
    var hundred = Math.floor(num / 100);
    var ten = Math.floor(num % 100 / 10);
    var unit = Math.floor(num % 100 % 10);

    document.getElementById("display-read").innerHTML = numToWord(hundred) + " trăm " 
        + numToWord(ten) + " mươi " 
        + numToWord(unit);
}

function numToWord(num) {
    switch (num) {
        case 0:
            return "không"
            break;
        case 1:
            return "một"
            break;
        case 2:
            return "hai"
            break;
        case 3:
            return "ba"
            break;
        case 4:
            return "bốn"
            break;
        case 5:
            return "năm"
            break;
        case 6:
            return "sáu"
            break;
        case 7:
            return "bảy"
            break;
        case 8:
            return "tám"
            break;
        case 9:
            return "chín"
            break;
        default:
            break;
    }
}