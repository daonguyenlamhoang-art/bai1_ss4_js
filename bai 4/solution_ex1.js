const drinkName = "Phin Sữa Đá";
const basePrice = 29000;
const drinkSize = "M";
const toppingsPerCup = 2;
const orderQuantity = 3;
const isGoldMember = true;
const toppingPrice = 8000;

let sizeUpcharge = 0;

if (drinkSize === "M") {
    sizeUpcharge = 6000;
} 
else if (drinkSize === "L") {
    sizeUpcharge = 10000;
}
const singleCupPrice = basePrice + sizeUpcharge + (toppingsPerCup * toppingPrice);
let totalBill = 0;
for (let cupIndex = 1; cupIndex <= orderQuantity; cupIndex++) {
    totalBill += singleCupPrice;
}
if (isGoldMember === true) {
    totalBill = totalBill * 0.9;
}
console.log(`
========== HOA DON HIGHLANDS COFFEE ===============
Ten mon: ${drinkName}
Size: ${drinkSize}
So luong: ${orderQuantity}
Tien 1 ly: ${singleCupPrice} VNĐ
Tong tien sau chiet khau: ${totalBill} VNĐ
==============================================
`);