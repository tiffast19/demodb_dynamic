async function fetchFavourites(url){
  const repsonse = await fetch(url);
  const data = await repsonse.json();
  displayData(data);
}

fetchFavourites('app/select.php');


function displayData(data){
  //select element from HTML where we'll put our tv show
  const display = document.querySelector('#display');
  display.innerHTML = '';

  //create an unordered list
  let ul = document.createElement('ul');
  
  data.forEach((user)=>{
    //console.log(user);
    //create items, add text and append to the list
    let li = document.createElement('li');
    li.innerHTML = `${user.first_name} gained ${user.total_earnings}.`;
    ul.appendChild(li);
  })
  //don't forget to append your elements.
  display.appendChild(ul);
}



const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', getFormData);

function getFormData(event){
  event.preventDefault();

  //get the form data & call an async function
  const insertFormData = new FormData(document.querySelector('#insert-form'));
  let url = 'app/insert.php';
  inserter(insertFormData, url);
  
}

async function inserter(data, url){
  const response = await fetch(url, {
    method: "POST",
    body: data
  });
  const confirmation = await response.json();

  console.log(confirmation);
  //call function again to refresh the page
  fetchFavourites('app/select.php');
}


// function getFormData(event){
//   event.preventDefault();

//   //get the form data & call an async function
//   const insertFormData = new FormData(document.querySelector('#insert-form'));

   


//   let url = 'app/insert.php';
//   inserter(insertFormData, url);
// }

 
    
 


// function getFormData(event) {
//    event.preventDefault();
//     const insertFormData = new FormData(document.querySelector('#insert-form'));
//    const totalHoursWorked = parseFloat(insertFormData.get('total_hours_worked'));
//   const ratePerHour = parseFloat(insertFormData.get('rate_per_hour'));
//   // let url = 'app/insert.php';
//   // inserter(insertFormData, url);
 
//   // Get the form data & call an async function
//   // const insertFormData = new FormData(document.querySelector('#insert-form'));
//   // const totalHoursWorked = parseFloat(insertFormData.get('total_hours_worked'));
//   // const ratePerHour = parseFloat(insertFormData.get('rate_per_hour'));

//   // Check if the values are valid numbers
//   if (!isNaN(totalHoursWorked) && !isNaN(ratePerHour)) {
//     const totalEarnings = totalHoursWorked * ratePerHour;
    
//     // Display the total earnings in the HTML
//     const totalEarningsElement = document.createElement('p');
//     totalEarningsElement.textContent = `Today Total Earnings: ${totalEarnings.toFixed(2)}`;
    
//     const display = document.querySelector('#display');
//     display.appendChild(totalEarningsElement);

//     // Send the data to the server for insertion
//     let url = 'app/insert.php';
//     inserter(insertFormData, url);
//   } else {
//     // Handle invalid input (e.g., show an error message)
//     alert('Invalid input. Please enter valid numbers for "Total Hours Worked" and "Rate per Hour".');
//   }
// };




  //  const myForm = document.querySelector("#insert-form");
  // myForm.addEventListener("submit", function (e) {
  //   fetch(url, { method: "REQUEST", body: formData })
  //     .then(function (response) {
  //       //return the response into text
  //       return response.text();
  //     })
  //     .then(function (body) {
  //       console.log(body);
  //       if (body === "OK") {
  //         alert("success");
  //         myForm.style.display = "none";
  //         let myHeadline = document.querySelector("h2");
  //         myHeadline.innerHTML = totalEarningsElement;
  //       } else {
  //         alert("error");
  //       }
  //     });
// });







