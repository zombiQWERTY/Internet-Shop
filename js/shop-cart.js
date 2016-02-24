$(function() {
	if (window.location.pathname.indexOf('shop-cart') + 1) {
		
		objItems = localStorage.getItem('product');

		var setCount = function(price_count) {
			var amount = 0;
			for (var i = 0; i <= price_count.length - 1; i++) {
				amount += parseFloat(price_count[i].innerHTML);
			}
			document.getElementsByClassName('left_side')[0].innerHTML = amount.toFixed(2);
			document.getElementsByClassName('left_side')[1].innerHTML = amount.toFixed(2);
		};


		var toCount = function (input, price) {
	    var thisTable = input.parentNode.parentNode.parentNode;
			input.addEventListener('change', function() {
	    	var value = parseInt(input.value) * price;
	    	input.parentNode.parentNode.getElementsByClassName('myprice')[0].innerHTML = value.toFixed(2);
	    	setCount(thisTable.getElementsByClassName('myprice'));
	  	});
	  	setCount(thisTable.getElementsByClassName('myprice'));
		}

		function building_big_table(item) {
			 var tableObj = document.getElementsByClassName('visible_big_screen')[0];

	      var trObj = document.createElement('tr');


        tableObj.appendChild(trObj);

        var tdObj = document.createElement('td');
        trObj.appendChild(tdObj);

        var divObj = document.createElement('div');
        divObj.className = 'product_item_basket';
        tdObj.appendChild(divObj);

        var imgObj = document.createElement('img');
        imgObj.src = item.img[0]; //ajax
        divObj.appendChild(imgObj);

        var td_large = document.createElement('td');
        td_large.className = 'large_td';
        trObj.appendChild(td_large);

        var h3Obj = document.createElement('h3');
        h3Obj.className = 'header_descr_table';
        h3Obj.innerHTML = item.name;
        td_large.appendChild(h3Obj);

				var p_sub_descr = document.createElement('p');
				p_sub_descr.className = 'sub_descr';
				p_sub_descr.innerHTML = 'Ref. 2514/302';
				td_large.appendChild(p_sub_descr);

				var tdColor = document.createElement('td');
				tdColor.innerHTML = item.color;
				tdColor.className = "center";
				trObj.appendChild(tdColor);

				var tdSize = document.createElement('td');
				tdSize.className = "center";
				tdSize.innerHTML = item.needfullSize.join(', ');
				trObj.appendChild(tdSize);

				var tdQty = document.createElement('td');
				tdQty.className = "center";
				trObj.appendChild(tdQty);

				var input_number_table = document.createElement('input');
				input_number_table.className = "center";
				input_number_table.setAttribute("id", 'subCount');
				input_number_table.setAttribute("type", "number");
				input_number_table.value = '1';
				input_number_table.min = 1;
				input_number_table.max = 5;
				tdQty.appendChild(input_number_table);

				var tdAmount = document.createElement('td');
				tdAmount.className = 'table_amount center';
				tdAmount.innerHTML =  '&euro; <span class="myprice">' +item.price+'</span>';

				trObj.appendChild(tdAmount);

				var tdDelete = document.createElement('td');
				trObj.appendChild(tdDelete);

				var imgDelete = document.createElement('img');
				imgDelete.className = 'delete';
				imgDelete.alt = 'delete';
				imgDelete.src = './img/delete.svg';
				imgDelete.dataset.art = item.Article_number;
				tdDelete.appendChild(imgDelete);

				toCount(input_number_table, item.price);
			}
		

			function building_small_table(item) {
				var tableObj = document.getElementsByClassName('visible_small_screen')[0];
        var trObj = document.createElement('tr');
        tableObj.appendChild(trObj);

        var tdObj = document.createElement('td');
        // tdObj.innerHTML = '1';
        trObj.appendChild(tdObj);

        var divObj = document.createElement('div');
        divObj.className = 'product_item_basket';
        tdObj.appendChild(divObj);

        var imgObj = document.createElement('img');
        imgObj.src = item.img[0];; //ajax
        divObj.appendChild(imgObj);

        var td_large = document.createElement('td');
        td_large.className = 'large_td';
        trObj.appendChild(td_large);

        var h3Obj = document.createElement('h3');
        h3Obj.className = 'header_descr_table';
        h3Obj.innerHTML = item.name;
        td_large.appendChild(h3Obj);

				var p_sub_descr = document.createElement('p');
				p_sub_descr.className = 'sub_descr';
				p_sub_descr.innerHTML = 'Ref. 2514/302';
				td_large.appendChild(p_sub_descr);

				var p_table_color = document.createElement('p');
				p_table_color.className = 'table_color';
				p_table_color.innerHTML = item.color;
				td_large.appendChild(p_table_color);

				var p_table_size = document.createElement('p');
				p_table_size.className = 'table_size';
				p_table_size.innerHTML = item.needfullSize.join(', ');
				td_large.appendChild(p_table_size);

				var input_number_table = document.createElement('input');
				input_number_table.setAttribute("type", "number");
				input_number_table.setAttribute("class", 'subCount');
				input_number_table.value = '1';
				input_number_table.min = 1;
				input_number_table.max = 5;
				td_large.appendChild(input_number_table);

				var tdDelete = document.createElement('td');
				trObj.appendChild(tdDelete);

				var imgDelete = document.createElement('img');
				imgDelete.className = 'delete';
				imgDelete.alt = 'delete';
				imgDelete.src = './img/delete.svg';
				imgDelete.dataset.art = item.Article_number;
				tdDelete.appendChild(imgDelete);

				var pAmount = document.createElement('p');
				pAmount.className = 'table_amount';
				pAmount.innerHTML =  '&euro; <span class="myprice">' +item.price+'</span>';
				tdDelete.appendChild(pAmount);
				toCount(input_number_table, item.price);


			}

		var items = JSON.parse(objItems);
		var hasNulls = 0;
		if (items) {
			var item;
			for (var i = 0; i <= items.length - 1; i++) {
				item = items[i];
				if (item != null) {
					building_big_table(item);
					building_small_table(item);
				} else {
					hasNulls++;
				}
			}
		} else {
			hasNulls++;
		}

		var hideTable = function() {
				document.getElementsByClassName('visible_big_screen')[0].style.display = 'none';
				document.getElementsByClassName('visible_small_screen')[0].style.display = 'none';
				document.getElementsByClassName('empty_bag')[0].style.display = 'block';		
				document.getElementById('order').style.display = 'none';		

		}

		var buttonToOpenForm = document.getElementById('order');
			buttonToOpenForm.onclick=function(){
				var order_form = document.getElementsByClassName('order_form')[0];
				order_form.classList.remove('order_form');
				order_form.classList.add('show_form');
				console.log(order_form);

			}
			document.getElementById('order-form').addEventListener('submit', function(event) {
				$('.input').attr('value', '');
				items_count = '0';
				var products = JSON.parse(localStorage['product']);
				for (var i = 0; i <= products.length - 1; i++) {
					if (products[i] != null) {
						products[i] = null;
					}
				}
				localStorage['product'] = JSON.stringify(products);
				window.location.href = '/thank-you.html';
				event.preventDefault();
				return false;
			});


		if (hasNulls == Object.keys(items).length) {
			hideTable();
		}
		
		var deleteItem = $('.delete').on('click', function() {
			var $items_count = document.getElementById('cart-counter');
			var items_count  = $items_count.innerHTML;
			$this = $(this);
			$this.parent().parent().remove();
			var art = $this.data('art');
			var nulls = 0;
			for (var key in items) {
				if (items.hasOwnProperty(key)) {
					if (items[key] != null) {
						if (items[key].Article_number == art) {
							delete items[key];
							items_count--;
							setCount(document.getElementsByClassName('visible_big_screen')[0].getElementsByClassName('myprice'));
							break;
						}
					} else {
						nulls++;
					}
				}
			}

			$items_count.innerHTML = items_count;

			if (nulls == Object.keys(items).length) {
				hideTable();
			}
			localStorage['product'] = JSON.stringify(items);
		});
		
		$('.order_form_delete').on('click', function () {
			$(this).parent().hide();
		})
		







	}
});


