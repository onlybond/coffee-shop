window.onload = function () {
  class coffee {
    constructor(...item) {
      this.item = item[0];
      this.prices = item[1];
      // this.Espresso = prices[0]["Espresso"];
      // this.Cappucinno = prices[1]["Cappucinno"];
      // this.Latte = prices[2]["Latte"];
    }
    add_item() {
      const list = document.getElementsByClassName("ul.payout-list");
      const new_item = document.createElement("li");
      const item_text = document.createTextNode(`${this.item}`);
      const remove_button = document.createElement('button');
      const btn_text = document.createTextNode('x');
      remove_button.appendChild(btn_text);
      remove_button.classList.add("remove-btn");
      new_item.appendChild(item_text);
      new_item.appendChild(remove_button);
      document.querySelector("ul.payout-list").appendChild(new_item);
    }
    delete_item(){

    }
    Total_amount(amount) {
      const total = amount.split('/')
      console.log(total[0])
      var bill_Amt = parseInt(total[0]);
      const AmtDiv = document.querySelector(".total-price");
      const coffeeType = this.item.split("-");
      for (const type of Object.keys(this.prices[0])) {
        if (type === coffeeType[0]) {
          bill_Amt += parseInt(coffeeType[2]);
        }
      }
      AmtDiv.innerHTML = bill_Amt.toString() +'/-';
      console.log("bill_amt", bill_Amt);
    }
    bill(item_list){
      item_list.push(this.item)
      console.log(item_list);
    }
  }
  const prices = [
    {
      Espresso: { milk: 60, cream: 75, latte: 100 },
      Cappucinno: { milk: 80, cream: 90, latte: 125 },
      Latte: { milk: 100, cream: 125, latte: 150 },
    },
  ];
  var btnType = document.querySelectorAll(".btn");
  var radioGroup = document.querySelectorAll(".radio-group");
  var item_list = []
  const AmtDiv = document.querySelector(".total-price");
  const AmtText = document.createTextNode('0/-');
  AmtDiv.appendChild(AmtText);

  var i = 0,
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
            console.log("total", total);
            // document.querySelector('ul.payout-list').innerHTML = '<li>'+`${addon}`+'</li>';
            order = new coffee(addon, prices);
            order.add_item();
            order.Total_amount(total);
            order.bill(item_list);
          }
        }
      });
    }
  }
};
