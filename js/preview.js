$(function() {
	if (window.location.pathname.indexOf('pdp') + 1) {
		$.ajax({
				dataType: 'json',
				url: '../json/clothes.json',
				success: function(data) {
						var goods_key = Object.keys(data);
						console.log('Connect');
						var my_hash = location.hash; 
						var myId = my_hash.substr(my_hash.indexOf("#") + 1); 
						console.log(myId);
						console.log(data[goods_key]);

						// console.log(typeof goods_key);
						// var toObj=[].slice.call(goods_key);
						// function getById(myId) {
						// 	for (var i = 0; i <= 2; i++) {
						// 		for (var j = 0; j <= goods_key.length; j++) {
						// 			if (data[goods_key[i]][j].id == myId) {
						// 				return data[goods_key[i]][j];
						// 			} else {
						// 				//console.log('Заданного id нет');
						// 				return false;
						// 			}
						// 		};
						// 	};
						// }
						// var id = 1; // твой id
						 //filter возвращает массив. allItems - это массив товаров,



						 //	_____________________________
						//  function getById(myId){
						//  	for (var i = 0; i <= goods_key.length - 1; i++) {
						//  		var findObj = data[goods_key[i]].filter(function(item) {
						// 			console.log(item);
						// 			var myObj = item.id;
						// 			if (item.id == myId) {
						// 				return myObj;
						// 			};
				      
				  //       });
						// 		console.log(findObj);
						//  	};
						//  }
						// var myObj = getById(myId);
						// console.log(myObj);
            //	_____________________________
						function building_gallery () {
							var divGoodsGallery = document.getElementsByClassName('goods__gallery')[0];
							var divGoodsGalleryMain = document.createElement('div');
									divGoodsGalleryMain.className = 'goods__gallery-main';
									divGoodsGallery.appendChild(divGoodsGalleryMain);
							var imgGoodsGallery = document.createElement('img');

									imgGoodsGallery.src = '../img/men-clother/t-shirts/1.jpg'; //from ajax
									imgGoodsGallery.alt = 'pic';
									divGoodsGalleryMain.appendChild(imgGoodsGallery);
							var divGoodsGalleryWrapper = document.createElement('div');
									divGoodsGalleryWrapper.className = 'goods__gallery_wrapper';
									divGoodsGallery.appendChild(divGoodsGalleryWrapper);

									for (var i = 0; i <= goods_key.length-1; i++) {
										var divGoodsGalleryWrapperItem = document.createElement('div');
												divGoodsGalleryWrapperItem.className = 'goods__gallery_wrapper-item';
												divGoodsGalleryWrapper.appendChild(divGoodsGalleryWrapperItem);
										var imgGoodsGalleryPreview = document.createElement('img');
												imgGoodsGalleryPreview.src = '../img/men-clother/t-shirts/1.jpg'; //from ajax
												imgGoodsGalleryPreview.alt = 'pic';
												divGoodsGalleryWrapperItem.appendChild(imgGoodsGalleryPreview);
									};

							var divGoodsWrapperContent = document.getElementsByClassName('goods__wrapper__content')[0];
							var h2Header = document.createElement('h2');
									h2Header.innerHTML = 'take from ajax';
									divGoodsWrapperContent.appendChild(h2Header);
							var pSubheaderSmall = document.createElement('p');
									pSubheaderSmall.className = 'subheader_small';
									pSubheaderSmall.innerHTML = 'Article number: ' + 'take from ajax';
									divGoodsWrapperContent.appendChild(pSubheaderSmall);
							var pGoodsPrice = document.createElement('p');
									pGoodsPrice.className = 'goods__wrapper__price';
									pGoodsPrice.innerHTML = '&euro; ' + 'take from ajax';
									divGoodsWrapperContent.appendChild(pGoodsPrice);
							var pGoodsDescription = document.createElement('p');
									pGoodsDescription.className = 'goods__wrapper__description';
									pGoodsDescription.innerHTML = 'take from ajax';
									divGoodsWrapperContent.appendChild(pGoodsDescription);
							var pGoodsSize = document.createElement('p');
									pGoodsSize.className = 'goods__wrapper__size';
									pGoodsSize.innerHTML = 'Size';
									divGoodsWrapperContent.appendChild(pGoodsSize);
							var divGoodsSizeChoose = document.createElement('div');
									divGoodsSizeChoose.className = 'goods__wrapper__size';
									divGoodsWrapperContent.appendChild(divGoodsSizeChoose);
							//взять в цикл
							var divSize = document.createElement('div');
									divSize.className = 'size';
									divSize.innerHTML = 'ajax';
									divGoodsSizeChoose.appendChild(divSize);
							// end cukl



						}
building_gallery();

				},
				error: function(data) {
						console.log('Connect error');
				}
		});
	}
});
