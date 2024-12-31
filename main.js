const kvadrat1 = document.getElementById('img1');
const kvadrat2 = document.getElementById('img2');
const kvadrat3 = document.getElementById('img3');
const btn1 = document.getElementById('btns2');
const btn2 = document.getElementById('btns3');
const btn3 = document.getElementById('btns');

const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPzkAuT0Ei1VYkBGGrzUleTbuOm_682D3vw&s",
    "https://dotnettrickscloud.blob.core.windows.net/article/frontend/3720231003225754.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5V7NcNsPL7LJwBGD6lIvEcpB_oMJfNijHQ&s"
];

btn1.addEventListener('click', () => {
    let random = Math.floor(Math.random() * images.length);
    kvadrat1.setAttribute('src', images[random]);
});

btn2.addEventListener('click', () => {
    let random = Math.floor(Math.random() * images.length);
    kvadrat2.setAttribute('src', images[random]);
});

btn3.addEventListener('click', () => {
    let random = Math.floor(Math.random() * images.length);
    kvadrat3.setAttribute('src', images[random]);
});


const item1 = document.getElementById('tree')

item1.querySelectorAll("li").forEach(value => {
    value && value.addEventListener('click', function (tt)  {
        tt.stopPropagation()
        const parent = value.parentNode
        const nextSibling = value.nextElementSibling
        const child = value.children
    
        // alert(nextSibling.nodeName)
        
        alert(value.textContent.trim())
    })
});


document.addEventListener('DOMContentLoaded', function () {
    const text1 = document.getElementById('hello');
    const text2 = document.getElementById('salom');
    const button = document.getElementById('btns2');
  
    button.addEventListener('click', function () {
      const vaqtinchalikMatn = text1.textContent;
      text1.textContent = text2.textContent;
      text2.textContent = vaqtinchalikMatn;
    });
});
  

const buttons = document.querySelectorAll('.buttons');
const randomIndex = Math.floor(Math.random() * buttons.length);
buttons[randomIndex].classList.add('qizil');
buttons.forEach((button) => {
  button.addEventListener('click', function () {
    const currentRedButton = document.querySelector('.qizil');
    if (currentRedButton) {
      currentRedButton.classList.remove('qizil');
    }
    this.classList.add('qizil');
  });
});


const container = document.getElementById('container');
const addButton = document.getElementById('addParagraph');

addButton.addEventListener('click', function () {

  const newParagraph = document.createElement('p');
  newParagraph.textContent = "Bu yangi qo'shilgan paragraf.";
  newParagraph.classList.add('paragraphs');

  const position = document.querySelector('input[name="position"]:checked').value;

  if (position === 'prepend') {
    container.prepend(newParagraph);
  } else {
    container.append(newParagraph);
  }
});


const hideBtns = document.querySelectorAll('.hide-btn');
const showHiddenBtn = document.getElementById('show');
const mainBtns = document.querySelectorAll('.main-btn');

hideBtns.forEach((hideBtn, index) => {
  hideBtn.addEventListener('click', () => {
    mainBtns[index].style.display = 'none';
  });
});

// showHiddenBtn.addEventListener('click', () => {
//   mainBtns.forEach(btn => {
//     btn.style.display = 'inline-block'; 
//   });
// });


const texts = document.querySelectorAll('p');
const cut = document.getElementById('cut'); 

cut && cut.addEventListener('click', function() {
    texts.forEach(function(text) {
        const box = document.querySelector('.box');  
        const newDiv = document.createElement('div');  
        newDiv.textContent = text.textContent;        

        box.appendChild(newDiv);
        text.remove();
    });
});


const buttons1 = document.querySelectorAll('.color-btn'); 
const mainBox = document.getElementById('main-box'); 

buttons1.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color'); 
        
        mainBox.style.backgroundColor = color; 

        buttons.forEach(btn => btn.classList.remove('active')); 
        button.classList.add('active'); 
    });
});

const addButton2 = document.getElementById('a-btn'); 
const list = document.getElementById('list');

addButton2.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `Element ${list.children.length + 1}`;
    
    const dButton = document.createElement('button');
    dButton.textContent = 'O‘chirish';
    dButton.classList.add('d-btn');
    dButton.addEventListener('click', () => {
        newItem.remove();
    });

    newItem.appendChild(dButton);
    list.appendChild(newItem);
});
