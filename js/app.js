var footer = document.querySelector('footer');
var form = document.querySelector("form");

var newElement = new unElement('monLien', 'a', 'ce site est incroyable', 'href', 'https://github.com/apoplexe');

var addChildElement = function (el){
  var name = document.createElement(el.type);

  name.textContent = el.text;
  name.setAttribute(el.attribute, el.attributeValue);
  footer.appendChild(name);
};

function  unElement(name, type, text, attribute, attributeValue, parent){
  this.name = name;
  this.type = type;
  this.text = text;
  this.attribute = attribute;
  this.attributeValue = attributeValue
}

footer.addEventListener("click", function () {
  addChildElement(newElement);
  addChildElement = function(){
    console.log("Il faut regarder dans le repo cv-mooc !");
  };
  footer.classList.toggle("change");
});

form.addEventListener("submit", function(e){
  console.log("bravo !");
  e.preventDefault();
});

document.querySelector('#cool').addEventListener("input", function(e){
  var onCool = e.target.value;
  var helpBlock = document.querySelector('.help-block');

  helpBlock.textContent = onCool;

})
