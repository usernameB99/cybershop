/* document.querySelectorAll('.small-picture').forEach(function(picture) {
    picture.addEventListener('click', function() {
        document.querySelector('#main-picture').src = this.src;
        document.querySelector('.small-picture.selected').classList.remove('selected');
        this.classList.add('selected');
    });
});

document.querySelectorAll('.model-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('.model-button.selected').classList.remove('selected');
        this.classList.add('selected');
        document.querySelector('#price').textContent = this.dataset.price;
        document.querySelector('#main-picture').src = 'bild' + this.dataset.model + '.jpeg';
    });
}); */

// Funktion zum Wechseln des Hauptbildes
function changeMainPicture(src) {
    document.querySelector('#main-picture').src = src;
}

// Funktion zum Hervorheben des ausgewählten kleinen Bildes
function highlightSelectedPicture(picture) {
    document.querySelector('.small-picture.selected').classList.remove('selected');
    picture.classList.add('selected');
}

// Funktion zum Ändern des Preises
function changePrice(price) {
    document.querySelector('#price').textContent = price;
}

// Funktion zum Hervorheben des ausgewählten Modell-Buttons
function highlightSelectedButton(button) {
    document.querySelector('.model-button.selected').classList.remove('selected');
    button.classList.add('selected');
}

document.querySelectorAll('.small-picture').forEach(function(picture) {
    picture.addEventListener('click', function() {
        changeMainPicture(this.src);
        highlightSelectedPicture(this);
    });
});

document.querySelectorAll('.model-button').forEach(function(button) {
    button.addEventListener('click', function() {
        changePrice(this.dataset.price);
        changeMainPicture('bild' + this.dataset.model + '.jpeg');
        highlightSelectedButton(this);
    });
});


/* ---------- accordeon ----------- */



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
