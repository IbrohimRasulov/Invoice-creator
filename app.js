const servicesBtn = document.querySelectorAll('#services button');
const tasksList = document.querySelector('#tasks ul');
const totalCost = document.querySelector('#total-cost');
const notes = document.querySelector('#notes');

const myServices = [];

servicesBtn.forEach(service => {
  service.addEventListener('click', (e) => {
    if (e.target.value === 'Wash Car' && !myServices.includes('Wash Car')) {
      myServices.push(e.target.value)
    } else if (e.target.value === 'Mow Lawn' && !myServices.includes('Mow Lawn')) {
      myServices.push(e.target.value)
    } else if (e.target.value === 'Pull Weeds' && !myServices.includes('Pull Weeds')) {
      myServices.push(e.target.value)
    }

    clearList();
    displayList();
    total();
  });
});

const clearList = function () {
  tasksList.innerHTML = `
  <li>
    <h4>TASK</h4>
    <h4>TOTAL</h4>
  </li>
  `;
}

const total = function () {
  const cost = myServices.map(item => {
    if (item === 'Wash Car') {
      return 10;
    } else if (item === 'Mow Lawn') {
      return 20;
    } else if (item === 'Pull Weeds') {
      return 30;
    }
  });

  totalCost.textContent = cost.reduce((a, b) => a + b, 0);

  if (myServices.length !== 0) {
    notes.textContent = 'We accept cash, credit card, or PayPal';
  } else if (myServices.length === 0) {
    notes.textContent = '';
  }
}

const displayList = function () {
  myServices.forEach(singleService => {
    if (singleService === 'Wash Car') {
      tasksList.innerHTML += `
      <li>
        <p>${singleService}</p>
        <img src="assets/icon-delete.svg" alt="delete-btn">
        <p><span>$</span>10</p>
      </li>
      `;
    } else if (singleService === 'Mow Lawn') {
      tasksList.innerHTML += `
      <li>
        <p>${singleService}</p>
        <img src="assets/icon-delete.svg" alt="delete-btn">
        <p><span>$</span>20</p>
      </li>
      `;
    } else if (singleService === 'Pull Weeds') {
      tasksList.innerHTML += `
      <li>
        <p>${singleService}</p>
        <img src="assets/icon-delete.svg" alt="delete-btn">
        <p><span>$</span>30</p>
      </li>
      `;
    }

    addEventToDeleteBtn();
  });
}

const addEventToDeleteBtn = function () {
  document.querySelectorAll('img[alt="delete-btn"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const clickedBtn = e.target.parentNode.firstElementChild.textContent;

      const index = myServices.indexOf(clickedBtn);
      myServices.splice(index, 1);

      clearList();
      displayList();
      total();
    });
  });
}
