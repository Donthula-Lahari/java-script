//if else statment for shopping with coupon

let total_amt = "2500";
let couponCode = "discount250"
let validCoupon = "discount250"
let coupon_amt = "250";

if (couponCode === validCoupon && total_amt >= 1500){
    let finalAmt = number(total_amt) - number(coupon_amt)
    console.log("Coupon Applied!! You saved Rs.250.")
}else if (couponCode === validCoupon && total_amt <= 1500){
    console.log("Coupon is not Valid for the amount less than Rs.1500.")
}else {
    console.log("Invalid Couponcode.")
}