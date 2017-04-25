
var footer = document.querySelector('footer');
var form = document.querySelector("form");
var sidebar = document.querySelector('#sidebar');
var cool = document.querySelector('#cool');
var maxValue = 10;

var newElement = new unElement('monLien', 'a', 'ce site est incroyable', 'href', 'https://github.com/apoplexe');

var ziziElement = new unElement('zizi', 'img', 'un zizi', 'src', '/media/zizi.png');

var addChildElement = function (el, parent){
  var name = document.createElement(el.type);

  name.textContent = el.text;
  name.setAttribute(el.attribute, el.attributeValue);
  name.setAttribute("id", el.name);
  parent.appendChild(name);
};

function  unElement(name, type, text, attribute, attributeValue, parent){
  this.name = name;
  this.type = type;
  this.text = text;
  this.attribute = attribute;
  this.attributeValue = attributeValue;
}

footer.addEventListener("click", function () {
  addChildElement(newElement, footer);
  addChildElement = function(){
    console.log("Il faut regarder dans le repo cv-mooc !");
  };
  footer.classList.toggle("change");
});

form.addEventListener("submit", function(e){
  console.log("bravo !");
  cool.removeAttribute('readonly', '');

  e.preventDefault();
});

cool.addEventListener("input", function(e){
  var onCool = e.target.value;
  var helpBlock = document.querySelector('.help-block');
  var compteur = [];

  compteur.push(onCool);

  if (compteur[0].length <= maxValue) {
    helpBlock.textContent = onCool;
    if (compteur[0] === "lieutenant") {
      addChildElement(ziziElement, sidebar);
      ziziElement = document.querySelector("#zizi");
    };
  } else {
    helpBlock.textContent = "Oh non ! Tu as dépassé la valeur limite !";
    cool.setAttribute('readonly', '');
    form.reset();
  };

});

function changeColor() {
  document.querySelector('#sidebar').classList.toggle("newcolor");
};

setInterval(changeColor, 5000);
