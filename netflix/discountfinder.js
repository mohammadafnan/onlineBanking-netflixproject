/////////////Discount Finder Code .... //////
function checkdis() {
    var btn = document.getElementById("btn");
    var showdes = document.getElementById("desc");
    var price = document.getElementById("price");
    var discountprice = document.getElementById("discount");
    var coupondiscount = document.getElementById("Coupon");
  
    if (!price.value ) {
      showdes.textContent = "Please Add Price";
      showdes.style.color = "white";
      showdes.style.backgroundColor = "red";
      showdes.style.marginTop = "10px";
      showdes.style.padding = "10px";
    } else if (coupondiscount.value == 2025) {
      discountprice.value = 100;
      var discountfind = price.value - (price.value * discountprice.value) / 100;
      /discount calc formular/;
      showdes.textContent =
        "Current price is " +
        price.value +
        " and You got Special Discount (Coupon code " +
        coupondiscount.value +
        " )" +
        discountprice.value +
        "% Discount " +
        " and your Discounted price is " +
        discountfind;
      showdes.style.color = "white";
      showdes.style.backgroundColor = "#1545c9";
      showdes.style.marginTop = "10px";
      showdes.style.padding = "10px";
      price.value = "";
      coupondiscount.value = "";
    } else {
      discountprice.value = 20;
      var discountfind = price.value - (price.value * discountprice.value) / 100;
      /discount calc formular/;
  
      showdes.textContent =
        "Current price is " +
        price.value +
        " and You got " +
        discountprice.value +
        "% Discount " +
        "and your Discounted price is " +
        discountfind;
  
      showdes.style.color = "white";
      showdes.style.backgroundColor = "green";
      showdes.style.marginTop = "10px";
      showdes.style.padding = "10px";
      price.value = "";
    }
  }
  