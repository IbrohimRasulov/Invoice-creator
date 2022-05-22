const servicesBtn = document.querySelectorAll('#services button');
const tasksList = document.querySelector('#tasks ul p');

// console.log(servicesBtn);

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

    console.log(myServices);
  });
});
