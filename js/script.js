if(document.querySelector('.js-index')){
/* modal-write-us */
var popup = document.querySelector('.modal-write-us');
var openPopupButton = document.querySelector('.contacts-button');
var closePopupButton = popup.querySelector('.modal-close');

openPopupButton.addEventListener('click', function () {
  popup.classList.add('modal-show');
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('modal-show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('modal-show');
  }
});

/* modal-modal-map */
var popupMap = document.querySelector('.modal-modal-map');
var openButton = document.querySelector('.min-map');
var closeButton = popupMap.querySelector('.modal-close');

openButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMap.classList.add('modal-show');
});

closeButton.addEventListener('click', function () {
  popupMap.classList.remove('modal-show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popupMap.classList.remove('modal-show');
  }
});

/* modal-add-product */
var PopupProduct = document.querySelector('.modal-add-product');
var openBtn = document.querySelectorAll('.card-button1');

for (var i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener('click', function () {
  PopupProduct.classList.add('modal-show');
});
}

var closeBtn = PopupProduct.querySelector('.modal-close');
closeBtn.addEventListener('click', function () {
  PopupProduct.classList.remove('modal-show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    PopupProduct.classList.remove('modal-show');
  }
});

/* features */
var btn = document.querySelectorAll('.feature-btn');
var openedTab = function(evt){
  var blocks = document.querySelectorAll('.other-description > div')
  for(var j = 0; j < blocks.length; j++){
      blocks[j].classList.remove('block-show')
    if(evt.currentTarget.id === "button-1"){
      blocks[0].classList.add('block-show');
    }
    if(evt.currentTarget.id === "button-2"){
      blocks[1].classList.add('block-show');
    }
    if(evt.currentTarget.id === "button-3"){
      blocks[2].classList.add('block-show');
    }
  }
}
for(var i = 0; i < btn.length; i++){
  btn[i].addEventListener('click', openedTab)
}

} else if(document.querySelector('.js-catalog')){

/* modal-add-product */
var PopupProduct = document.querySelector('.modal-add-product');
var openBtn = document.querySelectorAll('.card-button1');

for (var i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener('click', function () {
  PopupProduct.classList.add('modal-show');
});
}

var closeBtn = PopupProduct.querySelector('.modal-close');
closeBtn.addEventListener('click', function () {
  PopupProduct.classList.remove('modal-show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    PopupProduct.classList.remove('modal-show');
  }
});
}
