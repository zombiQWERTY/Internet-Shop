// $.ajax({
//   dataType: 'json',
//   url: '../json/clothes.json',
//   success: function(data) {
//     console.log('Connect' + Object.keys(data));
// }, error: function(data) {
//     console.log('Connect error');
//   }
// });


function getting_items() {
  divObj = document.createElement('div');
  divObj.className = 'men-clother__wrapper';
  h2Obj = document.createElement('h2');
  h2Obj.className = 'men-clother__header';
  h2Obj.innerHTML = 'coats'; //take variable from json
  document.body.appendChild(divObj);
  document.divObj.appendChild(h2Obj);


}
getting_items();