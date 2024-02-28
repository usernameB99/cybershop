
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

// Funktion zum Aktualisieren des ausgewählten Bildes und des ausgewählten Buttons
function updateSelection(model) {
    // Finden Sie das Bild und den Button mit dem gegebenen Modell
    var picture = document.querySelector('.small-picture[data-model="' + model + '"]');
    var button = document.querySelector('.model-button[data-model="' + model + '"]');

    // Aktualisieren Sie das Hauptbild und den Preis
    changeMainPicture(picture.src);
    changePrice(button.dataset.price);

    // Hervorheben des ausgewählten Bildes und des ausgewählten Buttons
    highlightSelectedPicture(picture);
    highlightSelectedButton(button);
}

document.querySelectorAll('.small-picture').forEach(function(picture) {
    picture.addEventListener('click', function() {
        updateSelection(this.dataset.model);
    });
});

document.querySelectorAll('.model-button').forEach(function(button) {
    button.addEventListener('click', function() {
        updateSelection(this.dataset.model);
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
