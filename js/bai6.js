/**
 * Input: month/year
 * 
 * Các bước xử lý:
 * B1: Tìm các thẻ bằng id
 * B2: Tạo hàm tính
 *    + monthYear = new Date(inpMonthYear.value)
 *       month = monthYear.getMonth() + 1
 *       year = monthYear.getFullYear()
 *       days = new Date(year, month, 0).getDate()
 *    + Hiển thị kết quả lên UI
 * B3: Gắn hàm vào sự kiện click
 * 
 * Output: days
 */

var inpMonthYear = document.getElementById("monthYear");

function getDaysInMonth() {
   var monthYear = new Date(inpMonthYear.value);
   var month = monthYear.getMonth() + 1;
   var year = monthYear.getFullYear();

   var days = new Date(year, month, 0).getDate();

   document.getElementById("display-days").innerHTML = "Tháng " + month + "/" + year + " có " + days + " ngày ";
}