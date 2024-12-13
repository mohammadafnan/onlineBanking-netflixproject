/////////////Discount Finder Code .... //////
function checkdis() {
    var btn = document.getElementById("btn");
    var showdes = document.getElementById("desc");
    var price = document.getElementById("price");
    var discountprice = document.getElementById("discount");
    var coupondiscount = document.getElementById("Coupon");
    // Check if the price input is empty or invalid
    if (!price.value || isNaN(Number(price.value)) || Number(price.value) <= 0) {
        showdes.textContent = "Please Add a valid Price";
        showdes.style.color = "white";
        showdes.style.backgroundColor = "red";
        showdes.style.marginTop = "10px";
        showdes.style.padding = "10px";
    }
    else if (coupondiscount.value === "2025") {
        // Special coupon discount (Coupon code 2025)
        discountprice.value = "100"; // Set the discount percentage to 100 for coupon code 2025
        var discountfind = Number(price.value) -
            (Number(price.value) * Number(discountprice.value)) / 100;
        // Discount calculation
        // showdes.textContent =
        //   `Current price is ${price.value} and You got Special Discount (Coupon code ${coupondiscount.value}) ` +
        //   `${discountprice.value}% Discount and your Discounted price is ${discountfind}`;
        showdes.textContent =
            "Current price is " + price.value + " " + "and You got Special Discount (Coupon code " + coupondiscount.value +
                " )" + discountprice.value + "% Discount and your Discounted price is " + discountfind;
        showdes.style.color = "white";
        showdes.style.backgroundColor = "#1545c9";
        showdes.style.marginTop = "10px";
        showdes.style.padding = "10px";
        price.value = "";
        coupondiscount.value = "";
    }
    else {
        // Regular discount (e.g., 20%)
        discountprice.value = "20"; // Set discount to 20%
        var discountfind = Number(price.value) -
            (Number(price.value) * Number(discountprice.value)) / 100;
        // Discount calculation
        showdes.textContent =
            "Current price is ".concat(price.value, " and You got ").concat(discountprice.value, "% Discount ") +
                "and your Discounted price is ".concat(discountfind);
        showdes.style.color = "white";
        showdes.style.backgroundColor = "green";
        showdes.style.marginTop = "10px";
        showdes.style.padding = "10px";
        price.value = "";
    }
}
