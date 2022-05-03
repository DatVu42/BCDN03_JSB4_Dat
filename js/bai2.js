/**
 * Input: B, M, A, E
 * 
 * Các bước xử lý:
 * B1: Tìm các thẻ bằng id
 * B2: Tạo hàm tính
 *      + Lấy giá trị từ form
 *      + Nếu user = "B" => "Chào Bố"
 *          Nếu user = "M" => "Chào Mẹ"
 *          Nếu user = "A" => "Chào Anh trai"
 *          Nếu user = "E" => "Chào Em gái"
 *          Còn lại => "Bạn không phải thành viên trong gia đình"
 *      + Hiển thị kết quả lên UI
 * B3: Gắn hàm vào sự kiện click
 * 
 * Output: "Chào" + user
 */

var inpUser = document.getElementById("user");

function welcomeUser() {
    var user = inpUser.value;
    user = user.toUpperCase();
    var welcome = "";
    
    switch (user) {
        case "B":
            welcome = "Chào Bố";
            break;
        case "M":
            welcome = "Chào Mẹ";
            break;
        case "A":
            welcome = "Chào Anh trai";
            break;
        case "E":
            welcome = "Chào Em gái";
            break;

        default:
            welcome = "Bạn không phải thành viên trong gia đình";
            break;
    }

    document.getElementById("display-welcome").innerHTML = welcome;
}