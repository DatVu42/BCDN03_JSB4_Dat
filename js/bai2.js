/**
 * Input: B, M, A, E
 * 
 * Các bước xử lý:
 * B1: Tạo hàm tính
 *      + Lấy giá trị từ form
 *      + Nếu user = "B" => "Chào Bố"
 *          Nếu user = "M" => "Chào Mẹ"
 *          Nếu user = "A" => "Chào Anh trai"
 *          Nếu user = "E" => "Chào Em gái"
 *          Còn lại => "Chào Người lạ ơi!"
 *      + Hiển thị kết quả lên UI
 * B2: Gắn hàm vào sự kiện click
 * 
 * Output: "Chào" + user
 */

function userWelcome() {
    var user = document.getElementById("user").value;
    var welcome = "";
    
    switch (user) {
        case "B":
            welcome = "Chào Bố!";
            break;
        case "M":
            welcome = "Chào Mẹ!";
            break;
        case "A":
            welcome = "Chào Anh trai!";
            break;
        case "E":
            welcome = "Chào Em gái!";
            break;

        default:
            welcome = "Chào Người lạ ơi!";
            break;
    }

    document.getElementById("display-welcome").innerHTML = welcome;
}