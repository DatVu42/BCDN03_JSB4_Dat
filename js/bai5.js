/**
 * Input: date/month/year
 * 
 * Các bước xử lý:
 *  B1: Tìm các thẻ bằng id
 *  B2: Tạo hàm tính
 *      + selectDate = new Date(inpDate.value)
 *      + nextDate = new Date(selectDate)
 *          nextDate.setDate(selectDate.getDate() + 1)
 *      + prevDate = new Date(selectDate)
 *          prevDate.setDate(selectDate.getDate() - 1)
 *      + Hiển thị kết quả lên UI
 *  B3: Gắn hàm vào sự kiện click
 * 
 * Output: 
 *  + Next: date/month/year
 *  + Previous: date/month/year
 */

var inpDate = document.getElementById("dateTime");

function findDate() {
    var selectDate = new Date(inpDate.value);
    var nextDate = new Date(selectDate);
    nextDate.setDate(selectDate.getDate() + 1);

    var prevDate = new Date(selectDate);
    prevDate.setDate(selectDate.getDate() - 1);

    document.getElementById("nextDate").value = nextDate.toLocaleDateString('vi-VN'); 
    document.getElementById("prevDate").value = prevDate.toLocaleDateString('vi-VN');
}