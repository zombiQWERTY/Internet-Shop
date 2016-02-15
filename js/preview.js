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
						console.log(goods_key);

						$.each(data, function(key, myArray) {
							myArray.filter(function(myObj) {
								if (myObj.id == myId) {
									console.log(myObj);   
									console.log(myObj.name);   
									console.log(typeof myObj);   
									//return item;   
									//____________________________________________________________________________________________
									function building_gallery () {
										console.log(myObj.img[1]); 
									var divGoodsGallery = document.getElementsByClassName('goods__gallery')[0];
									var divGoodsGalleryMain = document.createElement('div');
											divGoodsGalleryMain.className = 'goods__gallery-main';
											divGoodsGallery.appendChild(divGoodsGalleryMain);
									var imgGoodsGallery = document.createElement('img');

											imgGoodsGallery.src = myObj.img[0]; //from ajax
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
														imgGoodsGalleryPreview.src = myObj.img[i]; //from ajax
														imgGoodsGalleryPreview.alt = 'pic';
														divGoodsGalleryWrapperItem.appendChild(imgGoodsGalleryPreview);
											};

									var divGoodsWrapperContent = document.getElementsByClassName('goods__wrapper__content')[0];
									var h2Header = document.createElement('h2');
											h2Header.innerHTML = 'take from ajax';
											divGoodsWrapperContent.appendChild(h2Header);
									var pSubheaderSmall = document.createElement('p');
											pSubheaderSmall.className = 'subheader_small';
											pSubheaderSmall.innerHTML = 'Article number: ' + myObj.Article_number;
											divGoodsWrapperContent.appendChild(pSubheaderSmall);
									var pGoodsPrice = document.createElement('p');
											pGoodsPrice.className = 'goods__wrapper__price';
											pGoodsPrice.innerHTML = '&euro; ' + myObj.price;
											divGoodsWrapperContent.appendChild(pGoodsPrice);
									var pGoodsDescription = document.createElement('p');
											pGoodsDescription.className = 'goods__wrapper__description';
											pGoodsDescription.innerHTML = myObj.description;
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

									//____________________________________________________________________________________________

				    		}
							})

						})
 

				// var findId = goods_key.forEach(function (elem, item) {
				// 	console.log(elem)
				// 	console.log(item)
				// 	data[goods_key[item]].filter(function(elem){
				// 		var findId = elem.id === myId;
				// 		return findId;
				// 	});
				// });
				//  findId(myId);

						

				},
				error: function(data) {
						console.log('Connect error');
				}
		});
	}
});
