$.ajax({
  dataType: 'json',
  url: '../json/clothes.json',
  success: function(data) {
    console.log('Connect');

var goods_key = Object.keys(data);
console.log(data);
console.log(goods_key);
console.info("for start");
for (var i = goods_key.length-1; i >= 0; i--) {
   console.log("key:", goods_key[i]);
   console.log("id:", goods_key[i][0]);
   console.log("value:", data[ goods_key[i] ]); //array of objects
    console.info("forEach start");   
   data[ goods_key[i] ].forEach(function(item, index) {
    console.warn('your object', item);
    console.warn(item.name);
   });
   console.info("forEach end");   
};
console.info("for end");


    
    function getting_items(arrayOfItems) {
      for (var category_length = 0; category_length <= goods_key.length - 1; category_length++) {
     
      var h2Obj = document.createElement('h2');
        h2Obj.className = 'men-clother__header';
        h2Obj.innerHTML = goods_key[category_length]; //take variable from json
      var divWrapper = document.getElementsByClassName('men-clother__wrapper')[0];
      console.log(divWrapper);
        divWrapper.appendChild(h2Obj);

      var headerLink = document.createElement('a');
        headerLink.className = 'men-clother__header-link';
        headerLink.innerHTML = 'show more...';
        divWrapper.appendChild(headerLink);

      var flexItemRow = document.createElement('div');
        flexItemRow.className = 'flex-item-row';
        divWrapper.appendChild(flexItemRow);
        
        //filling row collection by categories
        for (var i = 0; i <= 3; i++) {
          var divDescr = document.createElement('div');
            divDescr.className = 'men-clother-description';
            divDescr.id = 'oo'; //take from ajax
            flexItemRow.appendChild(divDescr);

          var divDescr_item = document.createElement('div');
            divDescr_item.className = 'men-clother-item';
            divDescr.appendChild(divDescr_item);

          var imgClother_item = document.createElement('img');
            imgClother_item.className = 'men-clother-item-img';
            imgClother_item.src = '#' //take from ajax
            imgClother_item.alt = 'pic' //take from ajax
            divDescr_item.appendChild(imgClother_item);

          var h3_header = document.createElement('h3');
            h3_header.innerHTML = "take from ajax";
            divDescr.appendChild(h3_header);

          var p_price = document.createElement('p');
            p_price.className = 'men-clother-item-price';
            p_price.innerHTML = 'take from ajax' + ' $';
            divDescr.appendChild(p_price);
        };
        //end filling row collection by categories
       };
}
getting_items();



}, error: function(data) {
    console.log('Connect error');
  }
});



