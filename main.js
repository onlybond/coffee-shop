window.onload = function () {
  class coffee {
    constructor(...item) {
      this.item = item[0];
      this.prices = item[1];
      this.bill_msg = '';
    }
    add_item() {
      const list = document.getElementsByClassName("ul.payout-list");
      const new_item = document.createElement("li");
      const item_text = document.createTextNode(`${this.item}`);
      const btn_text = document.createTextNode("x");
      new_item.appendChild(item_text);
      document.querySelector("ul.payout-list").appendChild(new_item);
    }
    Total_amount(amount) {
      const total = amount.split("/");
      // console.log(total[0]);
      var bill_Amt = parseInt(total[0]);
      const AmtDiv = document.querySelector(".total-price");
      const coffeeType = this.item.split("-");
      for (const type of Object.keys(this.prices[0])) {
        if (type === coffeeType[0]) {
          bill_Amt += parseInt(coffeeType[2]);
        }
      }
      AmtDiv.innerHTML = bill_Amt.toString() + "/-";
      // console.log("bill_amt", bill_Amt);
    }
    bill_message(item_list, bill_amt) {
      item_list.push(this.item);
      var list = item_list;
      this.bill_msg = "selected items:\n";
      for (const items of list) {
        this.bill_msg += items + "\n";
      }
      this.bill_msg = this.bill_msg + "\n";
      this.bill_msg = this.bill_msg + "and the total amount is :" + bill_amt.toString();
    }
  }
  const prices = [
    {
      Espresso: { milk: 60, cream: 75, latte: 100 },
      Cappucinno: { milk: 80, cream: 90, latte: 125 },
      Latte: { milk: 100, cream: 125, latte: 150 },
    },
  ];
  var btnType = document.querySelectorAll(".add-btn");
  var radioGroup = document.querySelectorAll(".radio-group");
  var item_list = [];
  const AmtDiv = document.querySelector(".total-price");
  const AmtText = document.createTextNode("0/-");
  AmtDiv.appendChild(AmtText);
  var i = 0;
  length = btnType.length;
  for (i; i < length; i++) {
    let index = i;
    if (document.addEventListener) {
      btnType[i].addEventListener("click", () => {
        let radioButtons = radioGroup[index].querySelectorAll("input");
        for (const radio of radioButtons) {
          if (radio.checked) {
            addon = radio.value;
            total = AmtDiv.childNodes[0].data;
            order = new coffee(addon, prices);
            order.add_item();
            order.Total_amount(total);
            total_amount =
              document.querySelector(".total-price").childNodes[0].data;
            order.bill_message(item_list, total_amount);
            const pay = document.querySelector(".pay-btn");
            console.log(pay);
            pay.addEventListener("click", () => {
              alert(order.bill_msg);
            });
          }
        }
      });
    }
  }
};
