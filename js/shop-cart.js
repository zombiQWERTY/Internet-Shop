$(function() {
	if (window.location.pathname.indexOf('shop-cart') + 1) {
		
		objItems = localStorage.getItem('product');

		function building_big_table() {
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
				input_number_table.setAttribute("type", "number");
				input_number_table.value = '1';
				input_number_table.min = 1;
				input_number_table.max = 5;
				tdQty.appendChild(input_number_table);

				var tdAmount = document.createElement('td');
				tdAmount.className = 'table_amount center';
				tdAmount.innerHTML =  '&euro; ' +item.price;
				trObj.appendChild(tdAmount);

				var tdDelete = document.createElement('td');
				trObj.appendChild(tdDelete);

				var imgDelete = document.createElement('img');
				imgDelete.className = 'delete';
				imgDelete.alt = 'delete';
				imgDelete.src = './img/delete.svg';
				tdDelete.appendChild(imgDelete);
			}
		

			function building_small_table() {
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
				input_number_table.value = '1';
				input_number_table.min = 1;
				input_number_table.max = 5;
				td_large.appendChild(input_number_table);

				var tdDelete = document.createElement('td');
				trObj.appendChild(tdDelete);

				var imgDelete = document.createElement('img');
				imgDelete.className = 'delete_table';
				imgDelete.alt = 'delete';
				imgDelete.src = './img/delete.svg';
				tdDelete.appendChild(imgDelete);

				var pAmount = document.createElement('p');
				pAmount.className = 'table_amount';
				pAmount.innerHTML = '&euro; ' +item.price;
				tdDelete.appendChild(pAmount);

			}

		var items = JSON.parse(objItems);
		if (items) {
			var item;
			for (var i = 0; i <= items.length - 1; i++) {
				item = items[i];
				building_big_table(item);
				building_small_table(item);
			}
		}

		var deleteItem = $('.delete_table').on('click',function() {
			$this = $(this);
			console.log($this);
			// $this.removeClass('delete_table');

			$this.addClass('delete_item');
			$this.parent().parent().remove();
		});
		
	}
});


