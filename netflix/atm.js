let user_pincode = 1234;
let balance = 200000;
let bank = "Alfalah";
let bankAcct = 1020304050;

function remove() {
  var showbalance = document.getElementById("Balance");
  var iconbtn = document.getElementById("icon");
  var mainbody = document.getElementById("mainbody");

  var btnspelling = document.getElementById("btnspelling");
  var transferbtn = document.getElementById("transferbtn");
  var widthdrawbtn = document.getElementById("widthdrawbtn");
  var btnspellingfast = document.getElementById("btnspellingfast");

  var flextransfer = document.getElementById("flex-transfer");
  var flexwidthdraw = document.getElementById("flex-widthdraw");
  var flexfast5000 = document.getElementById("flexfast5000");

  btnspelling.disabled = false;
  transferbtn.disabled = false;
  widthdrawbtn.disabled = false;
  btnspellingfast.disabled = false;

  mainbody.style.filter = "blur(0px)";
  showbalance.style.display = "none";
  iconbtn.style.display = "none";
  flextransfer.style.display = "none";
  flexwidthdraw.style.display = "none";
  flexfast5000.style.display = "none";
}

function check_pincode() {
  var show = document.getElementById("flex");

  var loaderpage = document.getElementById("loaderpage");

  var hideform = document.getElementById("flex-cen");

  var user_pincode_put = document.getElementById("inputvalue");
  var newinputValue = user_pincode_put.value;

  var alertboxpinn = document.getElementById("alertboxpin");

  var messageElement = document.getElementById("message");

  if (newinputValue == "") {
    alertboxpinn.style.display = "flex";
    messageElement.style.color = "#e77066";
    messageElement.textContent = "Enter Pin Code";
    user_pincode_put.value = "";
  } else if (user_pincode != newinputValue) {
    messageElement.textContent = "Pin code is not correct";
    alertboxpinn.style.display = "flex";
    messageElement.style.color = "#e77066";
    user_pincode_put.value = "";
  } else {
    messageElement.textContent = "Pin code is correct";
    messageElement.style.color = "#80d894";
    alertboxpinn.style.display = "none";

    loaderpage.style.display = "block";
    mainbody.style.filter = "blur(5px)";

    setTimeout(function () {
      loaderpage.style.display = "none";
      hideform.style.display = "none";

      mainbody.style.filter = "blur(0px)";
      show.style.display = "flex";
    }, 3500);
  }
}

function Check_balance() {
  var mainbody = document.getElementById("mainbody");
  var alertbox = document.getElementById("alertbox");
  var btnspelling = document.getElementById("btnspelling");
  var transferbtn = document.getElementById("transferbtn");
  var widthdrawbtn = document.getElementById("widthdrawbtn");
  var btnspellingfast = document.getElementById("btnspellingfast");
  var flex = document.getElementById("flex");
  alertbox.style.display = "none";

  mainbody.style.filter = "blur(5px)";
  btnspelling.disabled = true;
  transferbtn.disabled = true;
  widthdrawbtn.disabled = true;
  btnspellingfast.disabled = true;

  loaderpage.style.display = "block";

  setTimeout(function () {
    showbalance.style.display = "block";
    iconbtn.style.display = "block";

    loaderpage.style.display = "none";
  }, 3500);

  var showbalance = document.getElementById("Balance");

  var iconbtn = document.getElementById("icon");

  var btns_pelling = document.getElementById("btnspelling");

  var widthdraw_btn = document.getElementById("widthdrawbtn");
  var transfer_btn = document.getElementById("transferbtn");

  var flexfast5000 = document.getElementById("flexfast5000");
  flexfast5000.style.display = "none";

  var flexfast5000txt = document.getElementById("text-fastcash");
  flexfast5000txt.style.display = "none";

  var flexwidthdraw = document.getElementById("flex-widthdraw");
  flexwidthdraw.style.display = "none";

  var flextransfer = document.getElementById("flex-transfer");
  flextransfer.style.display = "none";

  var btnspellingfast = document.getElementById("btnspellingfast");
  //  btnspellingfast.style.display = "none";

  var formated_showbalance = balance
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  showbalance.textContent = "Rs" + " " + formated_showbalance;

  if (!showbalance.style.display || showbalance.style.display == "none") {
    // showbalance.style.display = "block";
    // iconbtn.style.display = "block";
    iconbtn.style.color = "red";
    iconbtn.style.position = "absolute";
    iconbtn.style.right = "20px";
    iconbtn.style.bottom = "55px";

    iconbtn.style.right = "20px";

    btns_pelling.style.borderColor = "#80d894";
    btnspellingfast.style.borderColor = "gray";
    transfer_btn.style.borderColor = "gray";

    widthdraw_btn.style.borderColor = "gray";
    btns_pelling.style.borderWidth = "5px";

    btns_pelling.textContent = "+ Show Balance";
  } else {
    showbalance.style.display = "none";
    iconbtn.style.display = "none";

    btns_pelling.textContent = "+  Show Balance";
  }
}

function widthdraw_amount() {
  var mainbody = document.getElementById("mainbody");

  var btnspelling = document.getElementById("btnspelling");
  var transferbtn = document.getElementById("transferbtn");
  var widthdrawbtn = document.getElementById("widthdrawbtn");
  var btnspellingfast = document.getElementById("btnspellingfast");
  var iconwidthdraw = document.getElementById("iconwidthdraw");

  mainbody.style.filter = "blur(5px)";
  btnspelling.disabled = true;
  transferbtn.disabled = true;
  widthdrawbtn.disabled = true;
  btnspellingfast.disabled = true;

  var flextransfer = document.getElementById("flex-transfer");
  flextransfer.style.display = "none";

  var show = document.getElementById("flex-widthdraw");
  var widthdraw_btn = document.getElementById("widthdrawbtn");
  var transfer_btn = document.getElementById("transferbtn");

  var lbl = document.getElementById("btnspellingfast");

  var btns_pelling = document.getElementById("btnspelling");

  var Balance = document.getElementById("Balance");
  Balance.style.display = "none";

  var alertbox = document.getElementById("alertbox");
  alertbox.style.display = "none";

  var flexfast5000 = document.getElementById("flexfast5000");
  flexfast5000.style.display = "none";

  var flexfast5000txt = document.getElementById("text-fastcash");
  flexfast5000txt.style.display = "none";

  if (!show.style.display || show.style.display == "none") {
    icontransfer.style.display = "block";
    iconwidthdraw.style.color = "red";
    iconwidthdraw.style.position = "absolute";
    iconwidthdraw.style.right = "20px";
    iconwidthdraw.style.bottom = "200px";

    show.style.display = "flex";
    widthdraw_btn.style.borderColor = "#80d894";

    btns_pelling.style.borderColor = "gray";

    lbl.style.borderColor = "gray";
    transfer_btn.style.borderColor = "gray";

    widthdraw_btn.style.borderWidth = "5px";

    widthdraw_btn.textContent = "+  Show widthdraw";
  } else {
    show.style.display = "none";
    widthdraw_btn.textContent = "+  Show widthdraw";
  }
}

function transfer_amount() {
  var mainbody = document.getElementById("mainbody");

  var btnspelling = document.getElementById("btnspelling");
  var transferbtn = document.getElementById("transferbtn");
  var widthdrawbtn = document.getElementById("widthdrawbtn");
  var btnspellingfast = document.getElementById("btnspellingfast");

  mainbody.style.filter = "blur(5px)";
  btnspelling.disabled = true;
  transferbtn.disabled = true;
  widthdrawbtn.disabled = true;
  btnspellingfast.disabled = true;

  var show = document.getElementById("flex-transfer");
  var transfer_btn = document.getElementById("transferbtn");
  var widthdraw_btn = document.getElementById("widthdrawbtn");
  var flexwidthdraw = document.getElementById("flex-widthdraw");
  var icontransfer = document.getElementById("icontransfer");

  flexwidthdraw.style.display = "none";

  var lbl = document.getElementById("btnspellingfast");

  var btns_pelling = document.getElementById("btnspelling");

  var Balance = document.getElementById("Balance");
  Balance.style.display = "none";

  var alertbox = document.getElementById("alertbox");
  alertbox.style.display = "none";

  var flexfast5000 = document.getElementById("flexfast5000");
  flexfast5000.style.display = "none";

  var flexfast5000txt = document.getElementById("text-fastcash");
  flexfast5000txt.style.display = "none";

  if (!show.style.display || show.style.display == "none") {
    icontransfer.style.display = "block";
    icontransfer.style.color = "red";
    icontransfer.style.position = "absolute";
    icontransfer.style.right = "20px";
    icontransfer.style.bottom = "400px";
    show.style.display = "flex";
    btns_pelling.style.borderColor = "gray";
    lbl.style.borderColor = "gray";
    transfer_btn.style.borderColor = "#80d894";
    widthdraw_btn.style.borderColor = "gray";
    transfer_btn.style.borderWidth = "5px";
    transfer_btn.textContent = "+  Show Pay to";
  } else {
    show.style.display = "none";
    transfer_btn.textContent = "+  Show Pay to";
  }
}

function calc_amount() {
  var mainbody = document.getElementById("mainbody");
  mainbody.style.filter = "blur(5px)";

  var btnspelling = document.getElementById("btnspelling");
  var transferbtn = document.getElementById("transferbtn");
  var widthdrawbtn = document.getElementById("widthdrawbtn");
  var btnspellingfast = document.getElementById("btnspellingfast");
  var iconwidthdraw = document.getElementById("iconwidthdraw");

  btnspelling.disabled = false;
  transferbtn.disabled = false;
  widthdrawbtn.disabled = false;
  btnspellingfast.disabled = false;

  var widthdraw_value = document.getElementById("widthdrawvalue");
  var show = document.getElementById("flex-widthdraw");

  var transaction_msg = document.getElementById("widthdrawamounmsg");
  var alertbox = document.getElementById("alertbox");
  // alertbox.style.display = "flex";
  var lbl = document.getElementById("widthdrawamount");
  var err_input = document.getElementById("err");

  if (widthdraw_value.value == "" || err_input.style.display == "none") {
    alertbox.style.display = "none";
    err_input.style.display = "flex";
    err_input.textContent = "Please enter Amount";
    err_input.style.color = "#e77066";
    mainbody.style.filter = "blur(5px)";
  } else {
    err_input.style.display = "";

    err_input.textContent = "";
  }

  if (balance < widthdraw_value.value) {
    lbl.textContent = "Insuffient Balance";
    lbl.style.color = "#e77066";
    transaction_msg.style.display = "none";
    alertbox.style.display = "flex";

    show.style.display = "none";
    widthdraw_value.value = "";
    mainbody.style.filter = "blur(0px)";
  } else if (widthdraw_value.value < 0) {
    lbl.textContent = "Negative value not allowed";
    lbl.style.color = "#e77066";
    transaction_msg.style.display = "none";
    show.style.display = "none";
    widthdraw_value.value = "";
    mainbody.style.filter = "blur(0px)";
    alertbox.style.display = "flex";
  } else {
    mainbody.style.filter = "blur(5px)";

    balance = balance - widthdraw_value.value;
    lbl.style.color = "#80d894";

    var formated_transaction_msg = widthdraw_value.value
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    var formated_showbalance = balance
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    showbal = formated_showbalance;

    if (widthdraw_value.value != "") {
      loaderpage.style.display = "block";
      mainbody.style.filter = "blur(5px)";

      setTimeout(function () {
        loaderpage.style.display = "none";
        alertbox.style.display = "flex";
        mainbody.style.filter = "blur(0px)";
      }, 3500);

      transaction_msg.style.display = "list-item";
      show.style.display = "flex";

      transaction_msg.textContent =
        "Widthdraw Successfully Done" +
        " " +
        "Rs" +
        " " +
        formated_transaction_msg;

      transaction_msg.style.color = "orange";
      lbl.textContent = "Remaining Balance" + " " + "Rs" + " " + showbal;
      show.style.display = "none";
      // mainbody.style.filter = "blur(0px)";
    } else {
      lbl.textContent = "";
    }

    widthdraw_value.value = "";
  }
}

function calc_amount_transfer() {
  var mainbody = document.getElementById("mainbody");
  var banklist = document.getElementById("banklist");
  var errbanklist = document.getElementById("errbanklist");

  mainbody.style.filter = "blur(5px)";

  var btnspelling = document.getElementById("btnspelling");
  var transferbtn = document.getElementById("transferbtn");
  var widthdrawbtn = document.getElementById("widthdrawbtn");
  var btnspellingfast = document.getElementById("btnspellingfast");
  var iconwidthdraw = document.getElementById("iconwidthdraw");

  btnspelling.disabled = false;
  transferbtn.disabled = false;
  widthdrawbtn.disabled = false;
  btnspellingfast.disabled = false;

  var transfervalue = document.getElementById("transfervalue");

  var transferacctvalue = document.getElementById("transferacctvalue");

  var showtransfer = document.getElementById("flex-transfer");

  var transaction_msg = document.getElementById("widthdrawamounmsg");
  var alertbox = document.getElementById("alertbox");
  // alertbox.style.display = "flex";
  var lbl = document.getElementById("widthdrawamount");
  var err_input = document.getElementById("errtransfer");
  var errtransferacct = document.getElementById("errtransferacct");

  if (
    transfervalue.value == "" ||
    banklist.value == "" ||
    transferacctvalue.value == ""
  ) {
    alertbox.style.display = "none";
    err_input.style.display = "flex";
    err_input.textContent = "Please Enter Amount";
    err_input.style.color = "#e77066";
    errbanklist.textContent = " Please Select Bank ";
    errbanklist.style.color = "#e77066";
    errtransferacct.textContent = "Please Enter Account Number ";
    errtransferacct.style.color = "#e77066";
    mainbody.style.filter = "blur(5px)";
  } else {
    err_input.style.display = "";
    err_input.textContent = "";
    errbanklist.style.display = "";
    errbanklist.textContent = "";
    errtransferacct.style.display = "";
    errtransferacct.textContent = "";
  }

  if (
    balance < transfervalue.value &&
    banklist.value != "" &&
    transferacctvalue.value != ""
  ) {
    lbl.textContent = "Insuffient Balance";
    lbl.style.color = "#e77066";
    transaction_msg.style.display = "none";
    showtransfer.style.display = "none";
    transfervalue.value = "";
    transferacctvalue.value = "";
    banklist.value = "Select Bank";
    alertbox.style.display = "flex";

    mainbody.style.filter = "blur(0px)";
  } else if (
    transfervalue.value < 0 &&
    banklist.value != "" &&
    transferacctvalue.value != ""
  ) {
    lbl.textContent = "Negative value not allowed";
    lbl.style.color = "#e77066";
    transaction_msg.style.display = "none";
    showtransfer.style.display = "none";
    transfervalue.value = "";
    transferacctvalue.value = "";
    banklist.value = "Select Bank";
    alertbox.style.display = "flex";

    mainbody.style.filter = "blur(0px)";
  } else {
    mainbody.style.filter = "blur(5px)";

    if (
      transfervalue.value != "" &&
      banklist.value != "" &&
      transferacctvalue.value != ""
    ) {
      balance = balance - transfervalue.value;
      lbl.style.color = "#80d894";

      var formated_transaction_msg = transfervalue.value
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      var formated_showbalance = balance
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      showbal = formated_showbalance;
    }

    if (
      transfervalue.value != "" &&
      banklist.value != "" &&
      transferacctvalue.value != ""
    ) {
      transaction_msg.style.display = "list-item";
      showtransfer.style.display = "flex";

      loaderpage.style.display = "block";
      mainbody.style.filter = "blur(5px)";

      setTimeout(function () {
        loaderpage.style.display = "none";
        alertbox.style.display = "flex";
        mainbody.style.filter = "blur(0px)";
      }, 3500);

      transaction_msg.textContent =
        "Successfully Tranfer to  " +
        `${banklist.value}` +
        " " +
        "Bank" +
        " " +
        "Rs" +
        " " +
        formated_transaction_msg;

      transaction_msg.style.color = "orange";
      lbl.textContent = "Remaining Balance" + " " + "Rs" + " " + showbal;
      showtransfer.style.display = "none";
      // mainbody.style.filter = "blur(0px)";
      transfervalue.value = "";
      transferacctvalue.value = "";
      banklist.value = "Select Bank";
    } else {
      lbl.textContent = "";
    }
  }
}

function logout() {
  var flex = document.getElementById("flex");
  var flexcen = document.getElementById("flex-cen");
  var alertbox = document.getElementById("alertbox");

  alertbox.style.display = "none";
  flex.style.display = "none";
  flexcen.style.display = "flex";

  inputvalue.value = "";
}

function show_fast_cash() {
  var mainbody = document.getElementById("mainbody");

  var btnspelling = document.getElementById("btnspelling");
  var transferbtn = document.getElementById("transferbtn");
  var widthdrawbtn = document.getElementById("widthdrawbtn");
  var btnspellingfast = document.getElementById("btnspellingfast");
  var iconfastcash = document.getElementById("iconfastcash");

  mainbody.style.filter = "blur(5px)";
  btnspelling.disabled = true;
  transferbtn.disabled = true;
  widthdrawbtn.disabled = true;
  btnspellingfast.disabled = true;

  var transfer_btn = document.getElementById("transferbtn");

  var hide = document.getElementById("flex-widthdraw");
  hide.style.display = "none";
  var flextransfer = document.getElementById("flex-transfer");
  flextransfer.style.display = "none";

  var widthdraw_btn = document.getElementById("widthdrawbtn");
  var show = document.getElementById("flexfast5000");
  var show1 = document.getElementById("text-fastcash");
  var lbl = document.getElementById("btnspellingfast");
  var btnspelling = document.getElementById("btnspelling");

  var lbl1 = document.getElementById("widthdrawamount");

  var alertbox = document.getElementById("alertbox");
  alertbox.style.display = "none";

  if (
    !show.style.display ||
    show.style.display == "none" ||
    !show1.style.display ||
    show1.style.display == "none"
  ) {
    iconfastcash.style.display = "block";
    iconfastcash.style.color = "red";
    iconfastcash.style.position = "absolute";
    iconfastcash.style.right = "20px";
    iconfastcash.style.bottom = "280px";

    show.style.display = "flex";
    show1.style.display = "block";
    lbl1.style.display == "flex";

    btnspelling.style.borderColor = "gray";
    widthdraw_btn.style.borderColor = "gray";
    lbl.style.borderColor = "#80d894";

    transfer_btn.style.borderColor = "gray";

    lbl.style.borderWidth = "5px";
    // widthdraw_btn.style.borderWidth = "5px";

    lbl.textContent = " + Show fast cash";
  } else {
    show.style.display = "none";
    show1.style.display = "none";
    lbl1.style.display == "none";

    lbl.textContent = " + Show fast cash";
  }
}

function calc_fast_cash5000() {
  var mainbody = document.getElementById("mainbody");
  mainbody.style.filter = "blur(5px)";

  var btnspelling = document.getElementById("btnspelling");
  var transferbtn = document.getElementById("transferbtn");
  var widthdrawbtn = document.getElementById("widthdrawbtn");
  var btnspellingfast = document.getElementById("btnspellingfast");

  btnspelling.disabled = false;
  transferbtn.disabled = false;
  widthdrawbtn.disabled = false;
  btnspellingfast.disabled = false;

  var cash5000 = document.getElementById("inputvalue5000");
  var show = document.getElementById("flexfast5000");
  var text = document.getElementById("text-fastcash");
  var transaction_msg = document.getElementById("widthdrawamounmsg");

  var lbl = document.getElementById("widthdrawamount");
  var alertbox = document.getElementById("alertbox");
  // alertbox.style.display = "flex";
  cashvalue1 = cash5000.value;

  if (balance < cashvalue1) {
    lbl.textContent = "no/insuffient balance";
    lbl.style.color = "#e77066";
    transaction_msg.style.display = "none";
    show.style.display = "none";
    text.style.display = "none";
    mainbody.style.filter = "blur(0px)";
    alertbox.style.display = "flex";
  } else {
    transaction_msg.style.display = "list-item";
    show.style.display = "flex";
    text.style.display = "flex";

    balance = balance - cashvalue1;
    lbl.style.color = "#80d894";

    var formated_transaction_msg = cashvalue1
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    var formated_showbalance = balance
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    showbal = formated_showbalance;

    loaderpage.style.display = "block";
    mainbody.style.filter = "blur(5px)";

    setTimeout(function () {
      loaderpage.style.display = "none";
      alertbox.style.display = "flex";
      mainbody.style.filter = "blur(0px)";
    }, 3500);

    lbl.textContent = "Remaining Balance" + " " + "Rs" + " " + showbal;
    transaction_msg.textContent =
      "Widthdraw Successfully Done" +
      " " +
      "Rs" +
      " " +
      formated_transaction_msg;
    transaction_msg.style.color = "orange";
    show.style.display = "none";
    text.style.display = "none";
    // mainbody.style.filter = "blur(0px)";
  }
}

function calc_fast_cash10000() {
  var mainbody = document.getElementById("mainbody");
  mainbody.style.filter = "blur(5px)";

  var btnspelling = document.getElementById("btnspelling");
  var transferbtn = document.getElementById("transferbtn");
  var widthdrawbtn = document.getElementById("widthdrawbtn");
  var btnspellingfast = document.getElementById("btnspellingfast");

  btnspelling.disabled = false;
  transferbtn.disabled = false;
  widthdrawbtn.disabled = false;
  btnspellingfast.disabled = false;

  var cash10000 = document.getElementById("inputvalue10000");

  var lbl = document.getElementById("widthdrawamount");
  var show = document.getElementById("flexfast5000");
  var text = document.getElementById("text-fastcash");
  var transaction_msg = document.getElementById("widthdrawamounmsg");
  var alertbox = document.getElementById("alertbox");
  // alertbox.style.display = "flex";
  cashvalue2 = cash10000.value;

  if (balance < cashvalue2) {
    lbl.textContent = "no/insuffient balance";
    lbl.style.color = "#e77066";
    transaction_msg.style.display = "none";
    show.style.display = "none";
    text.style.display = "none";
    mainbody.style.filter = "blur(0px)";
    alertbox.style.display = "flex";
  } else {
    show.style.display = "flex";
    text.style.display = "flex";

    transaction_msg.style.display = "list-item";

    balance = balance - cashvalue2;
    lbl.style.color = "#80d894";

    var formated_transaction_msg = cashvalue2
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    var formated_showbalance = balance
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    showbal = formated_showbalance;

    loaderpage.style.display = "block";
    mainbody.style.filter = "blur(5px)";

    setTimeout(function () {
      loaderpage.style.display = "none";
      alertbox.style.display = "flex";
      mainbody.style.filter = "blur(0px)";
    }, 3500);

    lbl.textContent = "Remaining Balance" + " " + "Rs" + " " + showbal;
    transaction_msg.textContent =
      "Widthdraw Successfully Done" +
      " " +
      "Rs" +
      " " +
      formated_transaction_msg;
    transaction_msg.style.color = "orange";
    show.style.display = "none";
    text.style.display = "none";
    // mainbody.style.filter = "blur(0px)";
  }
}

function calc_fast_cash15000() {
  var mainbody = document.getElementById("mainbody");
  mainbody.style.filter = "blur(5px)";

  var btnspelling = document.getElementById("btnspelling");
  var transferbtn = document.getElementById("transferbtn");
  var widthdrawbtn = document.getElementById("widthdrawbtn");
  var btnspellingfast = document.getElementById("btnspellingfast");

  btnspelling.disabled = false;
  transferbtn.disabled = false;
  widthdrawbtn.disabled = false;
  btnspellingfast.disabled = false;

  var cash15000 = document.getElementById("inputvalue15000");
  var show = document.getElementById("flexfast5000");
  var text = document.getElementById("text-fastcash");
  var lbl = document.getElementById("widthdrawamount");
  var transaction_msg = document.getElementById("widthdrawamounmsg");
  var alertbox = document.getElementById("alertbox");
  // alertbox.style.display = "flex";
  cashvalue3 = cash15000.value;

  if (balance < cashvalue3) {
    lbl.textContent = "no/insuffient balance";
    lbl.style.color = "#e77066";
    transaction_msg.style.display = "none";
    show.style.display = "none";
    text.style.display = "none";
    mainbody.style.filter = "blur(0px)";
    alertbox.style.display = "flex";
  } else {
    show.style.display = "flex";
    text.style.display = "flex";

    balance = balance - cashvalue3;
    lbl.style.color = "#80d894";
    transaction_msg.style.display = "list-item";

    var formated_transaction_msg = cashvalue3
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    var formated_showbalance = balance
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    showbal = formated_showbalance;

    loaderpage.style.display = "block";
    mainbody.style.filter = "blur(5px)";

    setTimeout(function () {
      loaderpage.style.display = "none";
      alertbox.style.display = "flex";
      mainbody.style.filter = "blur(0px)";
    }, 3500);

    lbl.textContent = "Remaining Balance" + " " + "Rs" + " " + showbal;
    transaction_msg.textContent =
      "Widthdraw Successfully Done" +
      " " +
      "Rs" +
      " " +
      formated_transaction_msg;
    transaction_msg.style.color = "orange";
    show.style.display = "none";
    text.style.display = "none";
    // mainbody.style.filter = "blur(0px)";
  }
}

function calc_fast_cash20000() {
  var mainbody = document.getElementById("mainbody");
  mainbody.style.filter = "blur(5px)";

  var btnspelling = document.getElementById("btnspelling");
  var transferbtn = document.getElementById("transferbtn");
  var widthdrawbtn = document.getElementById("widthdrawbtn");
  var btnspellingfast = document.getElementById("btnspellingfast");

  btnspelling.disabled = false;
  transferbtn.disabled = false;
  widthdrawbtn.disabled = false;
  btnspellingfast.disabled = false;

  var cash20000 = document.getElementById("inputvalue20000");
  var lbl = document.getElementById("widthdrawamount");
  var show = document.getElementById("flexfast5000");
  var text = document.getElementById("text-fastcash");
  var transaction_msg = document.getElementById("widthdrawamounmsg");
  var alertbox = document.getElementById("alertbox");
  // alertbox.style.display = "flex";
  text.style.display = "none";

  cashvalue4 = cash20000.value;

  if (balance < cashvalue4) {
    lbl.textContent = "no/insuffient balance";
    lbl.style.color = "#e77066";
    transaction_msg.style.display = "none";
    show.style.display = "none";
    text.style.display = "none";
    mainbody.style.filter = "blur(0px)";
    alertbox.style.display = "flex";
  } else {
    balance = balance - cashvalue4;
    lbl.style.color = "#80d894";
    transaction_msg.style.display = "list-item";
    show.style.display = "flex";

    text.style.display = "flex";

    var formated_transaction_msg = cashvalue4
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    var formated_showbalance = balance
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    showbal = formated_showbalance;

    loaderpage.style.display = "block";
    mainbody.style.filter = "blur(5px)";

    setTimeout(function () {
      loaderpage.style.display = "none";
      alertbox.style.display = "flex";
      mainbody.style.filter = "blur(0px)";
    }, 3500);

    lbl.textContent = "Remaining Balance" + " " + "Rs" + " " + showbal;
    transaction_msg.textContent =
      "Widthdraw Successfully Done" +
      " " +
      "Rs" +
      " " +
      formated_transaction_msg;
    transaction_msg.style.color = "orange";
    show.style.display = "none";
    text.style.display = "none";
    // mainbody.style.filter = "blur(0px)";
  }
}

cars = ["Mercedez Benx", "Roll Royce", "Audi", "Bently", "Maybach"];

const ul = document.createElement("ul");

for (let i = 0; i < cars.length; i++) {
  const li = document.createElement("li");
  li.textContent = cars[i];
  ul.appendChild(li);
}

// array.appendChild(ul)
