$(function() {
	if (window.location.pathname.indexOf('shop-cart') + 1) {
		
		objItem = JSON.parse(localStorage.getItem('product'));
		console.log(objItem);
		function building_big_table() {
				var tableObj = document.createElement('table');
        tableObj.className = 'visible_big_screen';
        var tableWrapper = document.getElementsByClassName('table_wrapper')[0];
        tableWrapper.appendChild(tableObj);

        var theadObj = document.createElement('thead');
        tableObj.appendChild(theadObj);

        var thProduct = document.createElement('th');
        thProduct.innerHTML = 'Product';
        theadObj.appendChild(thProduct);

        var thDescription = document.createElement('th');
        thDescription.className = 'large_td';
        thDescription.innerHTML = 'Description';
        theadObj.appendChild(thDescription);

        var thColor = document.createElement('th');
        thColor.innerHTML = 'Color';
        thColor.className = 'center';
        theadObj.appendChild(thColor);

        var thSize = document.createElement('th');
        thSize.innerHTML = 'Size';
        thSize.className = 'center';
        theadObj.appendChild(thSize);

        var thQty = document.createElement('th');
        thQty.innerHTML = 'Qty';
        thQty.className = 'center';
        theadObj.appendChild(thQty);

        var thAmount = document.createElement('th');
        thAmount.innerHTML = 'Amount';
        thAmount.className = 'center';
        theadObj.appendChild(thAmount);

        var thDelete = document.createElement('th');
        thDelete.innerHTML = 'Delete';
        thDelete.className = 'center';
        theadObj.appendChild(thDelete);

        var trObj = document.createElement('tr');
        tableObj.appendChild(trObj);

        var tdObj = document.createElement('td');
        // tdObj.innerHTML = '1';
        trObj.appendChild(tdObj);

        var divObj = document.createElement('div');
        divObj.className = 'product_item_basket';
        tdObj.appendChild(divObj);

        var imgObj = document.createElement('img');
        imgObj.src = 'img/men-clother/3_600 x 600.jpg'; //ajax
        divObj.appendChild(imgObj);

        var td_large = document.createElement('td');
        td_large.className = 'large_td';
        trObj.appendChild(td_large);

        var h3Obj = document.createElement('h3');
        h3Obj.className = 'header_descr_table';
        h3Obj.innerHTML = 'ajax descr';
        td_large.appendChild(h3Obj);

				var p_sub_descr = document.createElement('p');
				p_sub_descr.className = 'sub_descr';
				p_sub_descr.innerHTML = 'Ref. 2514/302';
				td_large.appendChild(p_sub_descr);

				var tdColor = document.createElement('td');
				tdColor.innerHTML = 'ajax color';
				tdColor.className = "center";
				trObj.appendChild(tdColor);

				var tdSize = document.createElement('td');
				tdSize.className = "center";
				tdSize.innerHTML = 'ajax size';
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
				tdAmount.innerHTML = 'Amount';
				trObj.appendChild(tdAmount);

				var tdDelete = document.createElement('td');
				trObj.appendChild(tdDelete);

				var imgDelete = document.createElement('img');
				imgDelete.className = 'delete';
				imgDelete.alt = 'delete';
				imgDelete.src = './img/delete.svg';
				tdDelete.appendChild(imgDelete);

				var tableFoot = document.createElement('tfoot');
				tableObj.appendChild(tableFoot);

				var trTableFoot = document.createElement('tr');
				tableFoot.appendChild(trTableFoot);

				var thTableFoot_rightSide = document.createElement('th');
				thTableFoot_rightSide.className = 'right_side';
				thTableFoot_rightSide.colSpan = "5";
				thTableFoot_rightSide.innerHTML = 'Subtotal';
				trTableFoot.appendChild(thTableFoot_rightSide);

				var thTableFoot_leftSide = document.createElement('th');
				thTableFoot_leftSide.className = 'left_side';
				thTableFoot_leftSide.innerHTML = 'Sub';
				trTableFoot.appendChild(thTableFoot_leftSide);

				var thTableFoot_empty = document.createElement('th');
				trTableFoot.appendChild(thTableFoot_empty);
			}
		building_big_table()	


			function building_small_table() {
				var tableObj = document.createElement('table');
        tableObj.className = 'visible_small_screen';
        var tableWrapper = document.getElementsByClassName('table_wrapper')[0];
        tableWrapper.appendChild(tableObj);

        var theadObj = document.createElement('thead');
        tableObj.appendChild(theadObj);

        var thProduct = document.createElement('th');
        thProduct.innerHTML = 'Product';
        theadObj.appendChild(thProduct);

        var thDescription = document.createElement('th');
        thDescription.className = 'large_td';
        thDescription.innerHTML = 'Description';
        theadObj.appendChild(thDescription);

        var thDelete = document.createElement('th');
        thDelete.className = 'delete';
        thDelete.innerHTML = 'Delete';
        theadObj.appendChild(thDelete);

        var trObj = document.createElement('tr');
        tableObj.appendChild(trObj);

        var tdObj = document.createElement('td');
        // tdObj.innerHTML = '1';
        trObj.appendChild(tdObj);

        var divObj = document.createElement('div');
        divObj.className = 'product_item_basket';
        tdObj.appendChild(divObj);

        var imgObj = document.createElement('img');
        imgObj.src = 'img/men-clother/3_600 x 600.jpg'; //ajax
        divObj.appendChild(imgObj);

        var td_large = document.createElement('td');
        td_large.className = 'large_td';
        trObj.appendChild(td_large);

        var h3Obj = document.createElement('h3');
        h3Obj.className = 'header_descr_table';
        h3Obj.innerHTML = 'ajax descr';
        td_large.appendChild(h3Obj);

				var p_sub_descr = document.createElement('p');
				p_sub_descr.className = 'sub_descr';
				p_sub_descr.innerHTML = 'Ref. 2514/302';
				td_large.appendChild(p_sub_descr);

				var p_table_color = document.createElement('p');
				p_table_color.className = 'table_color';
				p_table_color.innerHTML = 'color ajax';
				td_large.appendChild(p_table_color);

				var p_table_size = document.createElement('p');
				p_table_size.className = 'table_size';
				p_table_size.innerHTML = 'ajax size';
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
				pAmount.innerHTML = 'Amount';
				tdDelete.appendChild(pAmount);

				var tableFoot = document.createElement('tfoot');
				tableObj.appendChild(tableFoot);

				var trTableFoot = document.createElement('tr');
				tableFoot.appendChild(trTableFoot);

				var thTableFoot_rightSide = document.createElement('th');
				thTableFoot_rightSide.className = 'right_side';
				thTableFoot_rightSide.colSpan = "2";
				thTableFoot_rightSide.innerHTML = 'Subtotal';
				trTableFoot.appendChild(thTableFoot_rightSide);

				var thTableFoot_leftSide = document.createElement('th');
				thTableFoot_leftSide.className = 'left_side';
				thTableFoot_leftSide.innerHTML = 'Sub';
				trTableFoot.appendChild(thTableFoot_leftSide);
			}
		building_small_table()	
	}
});
