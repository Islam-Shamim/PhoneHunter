
// //find post by catagory name
// function loadData(searchText){
//     fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
//     .then(res => res.json())
//     .then(data => displayLoad(data.data))
// }

// function displayLoad(phones){
//     const phoneDiv = document.getElementById('phone-container');
//     phoneDiv.textContent = '';
//     phones.forEach(phone =>{
//         //console.log(phone)
//         //create a div
//         const createDiv = document.createElement('div');
//         createDiv.classList = `card bg-red-100 shadow-xl p-4 m-2`;
//         createDiv.innerHTML = `
//         <figure><img src="${phone.image}" alt="Shoes" /></figure>
//             <div class="card-body">
//                 <h2 class="card-title">${phone.phone_name}</h2>
//                 <p>${phone.slug}</p>
//                 <div class="card-actions justify-end">
//                     <button class="btn btn-primary">Buy Now</button>
//                 </div>
//             </div>
//         `
//         phoneDiv.appendChild(createDiv);
//     })
// }

// loadData();

// function clickHander(){
//     const input = document.getElementById('phone-name');
//     const searchText = input.value;
//     //console.log(searchText);
//     loadData(searchText)
// }