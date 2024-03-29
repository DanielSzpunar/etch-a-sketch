//create container to house etch a sketch and btn to customize how many rows.
const container = document.createElement('div');
const btn = document.createElement('btn');

//append to body
document.body.appendChild(btn);
document.body.appendChild(container);

//set css attributes to container using css grid
container.setAttribute('id', 'container');
container.style.display = 'grid';
container.style.width = '600px';
container.style.height = '600px';
container.style.positon = 'relative';
container.style.margin = '0 auto';
container.style.gridTemplateColumns = 'repeat(16, 1fr)';
container.style.gridTemplateRows = 'repeat(16, 1fr)';

//set btn attributes
btn.textContent = 'Change Grid';
btn.style.textAlign = 'center';
btn.style.position = 'relative';
btn.style.display = 'block';
btn.style.margin = '20px auto';
btn.style.cursor = 'pointer';
btn.style.fontSize = '1em';
btn.style.backgroundColor = '#67c385';
btn.style.textTransform = 'uppercase';
btn.style.padding = '8px';
btn.style.color = '#fff';
btn.style.transition = 'color .1s,background-color .1s,fill .1s';
btn.style.width = '264px';
btn.style.height = '44px';

for (let i = 0; i < 16 * 16; i++) {
    const sqr = document.createElement('div');
    container.appendChild(sqr);
    sqr.setAttribute('class','sqr')
}
const squares = document.querySelectorAll('.sqr');
squares.forEach(sqr => sqr.addEventListener('mouseenter', changeSquareBackground));
btn.addEventListener('click', changeSquareToOriginal);

function changeSquareBackground(e) {
    e.target.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
}

function changeSquareToOriginal() {
    const newGridSize = prompt("Enter New Grid Size");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }  
    for (i = 0;i < (newGridSize*newGridSize);i++) {
      const square = document.createElement('div');
      container.appendChild(square);
      square.setAttribute('class', 'square');
    }
    const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.addEventListener('mouseenter', changeSquareBackground));
  container.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${newGridSize}, 1fr)`;
  container.style.placeContent = 'stretch / stretch';
}