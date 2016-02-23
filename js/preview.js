function SaveDataToLocalStorage(data, table) {
	var a = [];	
  // Parse the serialized data back into an aray of objects
  if (localStorage[table]) {
	  a = JSON.parse(localStorage[table]);
	}
  // Push the new data (whether it be an object or anything else) onto the array
  var exists = false;
  for (var i = 0; i <= a.length - 1; i++) {
  	if (a[i] != null) {
	  	if (a[i].Article_number == data.Article_number) {
	  		exists = true;
	  	}
  	}
  }
  if (!exists) {
	  a.push(data);
	  //add ++
  }
  // Re-serialize the array back into a string and store it in localStorage
  localStorage[table] = JSON.stringify(a);
}

$(function() {
	if (window.location.pathname.indexOf('pdp') + 1) {
		$.ajax({
			dataType: 'json',
			url: './json/clothes.json',
			success: function(data) {

				var goods_key = Object.keys(data);
				console.log('Connect');
				var my_hash = location.hash; 
				var myId = my_hash.substr(my_hash.indexOf("#") + 1); 
				// console.log(myId);
				// console.log(goods_key);
				var object = {};

				$.each(data, function(key, myArray) {
					myArray.filter(function(myObj) {
						if (myObj.id == myId) {
							object = myObj;
							// console.log(myObj);   
							// console.log(myObj.name);   
							// console.log(typeof myObj);   

								function building_gallery () {
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
										h2Header.innerHTML = myObj.name;
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
									
										for (var i = 0; i <= myObj.size.length - 1; i++) {
											var divSize = document.createElement('div');
												divSize.className = 'size';

												divSize.innerHTML = myObj.size[i];
												divGoodsSizeChoose.appendChild(divSize);
										};
								var aAddToCart = document.createElement('a');
										aAddToCart.className = 'addToCart disabled';
										//aAddToCart.id = 'addToCart';
										aAddToCart.innerHTML = 'Add to Cart';
										divGoodsWrapperContent.appendChild(aAddToCart)

								}
								building_gallery();
		    		}
					});


					
				});
					
					object.needfullSize = [];
					var $addToCart = $('.addToCart');
					var disableBtn = function() {
						if ($('.size').hasClass('green')) {
							$addToCart.removeClass('disabled');
							$addToCart.attr('href', './shop-cart.html');
						} else {
							$addToCart.addClass('disabled');
							$addToCart.attr('href', 'javascript: return:false');

						}

						if ($addToCart.hasClass('disabled')) {
							object.needfullSize = [];
						}
					};
					var setAddCartActive = function($this, html) {
						if ($this.hasClass('green')) {
							var neededSize = false;
							for (var i = 0; i <= object.needfullSize.length - 1; i++) {
								if (object.needfullSize[i] == html) {
										neededSize = true;
								}
							}
							if (!neededSize) {
								object.needfullSize.push(html);
							}
						} else {
							for (var i = 0; i <= object.needfullSize.length - 1; i++) {
								if (object.needfullSize[i].indexOf(html) + 1) {
									object.needfullSize[i] = null;
								}
							}
						}
						disableBtn();
					};
					// $addToCart.on('click', function(event) {
					// 	if $addToCart.hasClass('disabled'){
					// 		 event.preventDefault();
					// 		 // return false;
					// 	}
					// })


					var sizeClass = document.getElementsByClassName('size');
					// var $this;
					// $(".goods__wrapper__size").on( "click", ".size", function() {
					// 	$this = $(this);
					// 	$this.toggleClass('green');
					// 	setAddCartActive($this, $this.html());
					// });
					var clicked = true;
					$(".goods__wrapper__size").on( "click", ".size", function() {
						var $this;
						$this = $(this);
						if ($this.hasClass('green')) {
							$this.removeClass('green');
							disableBtn();
							clicked = true;
						} else {
							if (clicked) {
								$this.addClass('green');
								setAddCartActive($this, $this.html());
								clicked = false;
							}
						}
					});

					$addToCart.on('click', function(e) {
						//e.preventDefault();
						SaveDataToLocalStorage(object, 'product');
						//window.location = $(this).attr('href');
					});	
			},
			error: function(data) {
					console.log('Connect error');
			}
		});
	}
});
