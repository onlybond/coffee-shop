window.onload = function () {
  prices = [
    {
      Espresso: [60, 75, 100],
      Cappuchinno: [80, 90, 125],
      Latte: [100, 125, 150],
    },
  ];
  var btnType = document.querySelectorAll(".btn");
  var radioGroup = document.querySelectorAll(".radio-group");
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
            console.log(addon);
            // document.querySelector('ul.payout-list').innerHTML = '<li>'+`${addon}`+'</li>';
            add_addon(addon);
          }
        }
      });
    }
  }
  function add_addon(item){
    list = document.getElementsByClassName('ul.payout-list');
    new_item = document.createElement('li');
    item_text = document.createTextNode(`${item}`);
    new_item.appendChild(item_text);
    document.querySelector('ul.payout-list').appendChild(new_item);
  }
  function total_price(){
    
  }
};
