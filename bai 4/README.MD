Lỗi 1: Sai điều kiện vòng lặp (Off-by-one Error)
Dòng code cũ:
for (let cupIndex = 1; cupIndex < orderQuantity; cupIndex++)
Nguyên nhân:
Biến cupIndex bắt đầu từ 1 nhưng điều kiện lại sử dụng < orderQuantity. 
Khi số lượng đặt là 3, vòng lặp chỉ chạy 2 lần, khiến hệ thống tính thiếu tiền của 1 ly.
Sửa:
for (let cupIndex = 1; cupIndex <= orderQuantity; cupIndex++)
Sử dụng <= để vòng lặp chạy đủ số lần tương ứng với số lượng ly khách hàng đặt.

Lỗi 2: Áp dụng chiết khấu sai vị trí
Dòng code cũ:
totalBill += singleCupPrice;
if (isGoldMember) {
    totalBill = totalBill * 0.9;
}
Nguyên nhân:
Chiết khấu 10% được áp dụng ngay sau mỗi lần cộng tiền một ly. Điều này khiến tổng tiền bị giảm nhiều lần thay vì chỉ giảm một lần trên tổng hóa đơn.
Sửa:
Đưa phần tính chiết khấu ra ngoài vòng lặp. Chương trình sẽ cộng đủ tiền các ly trước rồi mới áp dụng giảm giá cho thành viên Gold.