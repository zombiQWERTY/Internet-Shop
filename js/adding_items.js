$(function() {
  if (window.location.pathname.indexOf('category') + 1) {
    $.ajax({
        dataType: 'json',
        url: './json/clothes.json',
        success: function(data) {
              function getting_items() {
                var goods_key = Object.keys(data);
                for (var category_length = 0; category_length <= goods_key.length - 1; category_length++) {

                    var h2Obj = document.createElement('h2');
                    h2Obj.className = 'men-clother__header';
                    h2Obj.innerHTML = goods_key[category_length];
                    var divWrapper = document.getElementsByClassName('men-clother__wrapper')[0];
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
                        divDescr.id = data[goods_key[category_length]][i].id;
                        flexItemRow.appendChild(divDescr);

                        var divDescr_item = document.createElement('div');
                        divDescr_item.className = 'men-clother-item';
                        divDescr.appendChild(divDescr_item);

                        var imgClother_item = document.createElement('img');
                        imgClother_item.className = 'men-clother-item-img';
                        imgClother_item.src = data[goods_key[category_length]][i].img[0];
                        imgClother_item.alt = 'pic';
                        divDescr_item.appendChild(imgClother_item);

                        var h3_header = document.createElement('h3');
                        h3_header.innerHTML = data[goods_key[category_length]][i].name;
                        divDescr.appendChild(h3_header);

                        var p_price = document.createElement('p');
                        p_price.className = 'men-clother-item-price';
                        p_price.innerHTML = data[goods_key[category_length]][i].price + ' $';
                        divDescr.appendChild(p_price);


                        divDescr.addEventListener('click', function() {
                          window.location = './pdp.html#' + this.id;
                        });

                    };
                    //end filling row collection by categories

                };
                // $(divWrapper).on('click', function() {
                  
                // });

            }
            getting_items();
        },
        error: function(data) {
            console.log('Connect error');
        }
    });
  }
});
