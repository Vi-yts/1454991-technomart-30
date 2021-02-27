/* modal-add-product */
const showPopupProduct = function () {
  const PopupProduct = document.querySelector('.modal-add-product');
  const openBtn = document.querySelectorAll('.card-button1');

  for (var i = 0; i < openBtn.length; i++) {
    openBtn[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    PopupProduct.classList.add('modal-show');
  });
  }

  const closeBtn = PopupProduct.querySelector('.modal-close');
  closeBtn.addEventListener('click', function () {
    PopupProduct.classList.remove('modal-show');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      PopupProduct.classList.remove('modal-show');
    }
  });
}

if(document.querySelector('.js-index')){
/* modal-write-us */
const popup = document.querySelector('.modal-write-us');
const openPopupButton = document.querySelector('.contacts-button');
const closePopupButton = popup.querySelector('.modal-close');
const loginForm = popup.querySelector(".write-us-form");
const loginName = popup.querySelector(".user-name-input");
const loginEmail = popup.querySelector(".user-email-input");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');

  if (storage) {
    loginName.value = storage;
    loginEmail.focus();
  } else {
    loginName.focus();
  }
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginName.value || !loginEmail.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginName.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('modal-show');
  }
});

/* modal-modal-map */
const popupMap = document.querySelector('.modal-modal-map');
const openButton = document.querySelector('.min-map');
const closeButton = popupMap.querySelector('.modal-close');

openButton.addEventListener('click', function () {
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
showPopupProduct();

/* features */
const btn = document.querySelectorAll('.feature-btn');
const openedTab = function(evt){
  const blocks = document.querySelectorAll('.other-description > div')
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
showPopupProduct();
}

