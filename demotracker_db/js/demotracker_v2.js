async function fetchFavourites(url) {
  const response = await fetch(url);
  const data = await response.json();
  displayData(data);
}

fetchFavourites('app/select_v2.php');

function displayData(data) {
  const display = document.querySelector('#display');
  display.innerHTML = '';

  let ul = document.createElement('ul');

  data.forEach((user) => {
    let li = document.createElement('li');
    li.innerHTML = `${user.first_name} gained ${user.total_earnings}.Date:${user.today_date}`;
    ul.appendChild(li);
  })

  display.appendChild(ul);
}

const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', getFormData);

function getFormData(event) {
  event.preventDefault();

  const searchName = document.querySelector('#search_name').value;
  const searchDate = document.querySelector('#search_date').value;

  const insertFormData = new FormData(document.querySelector('#insert-form'));
  let url = 'app/select_v2.php';

  if (searchName || searchDate) {
    url += '?';

    if (searchName) {
      url += `search_name=${searchName}`;
    }

    if (searchDate) {
      url += searchName ? `&search_date=${searchDate}` : `search_date=${searchDate}`;
    }
  }

  inserter(insertFormData, url);
}

async function inserter(data, url) {
  const response = await fetch(url, {
    method: "REQUEST", // Change to GET to pass parameters in the URL
  });
  
  const confirmation = await response.json();

  console.log(confirmation);
  fetchFavourites('app/select_v2.php');
}
