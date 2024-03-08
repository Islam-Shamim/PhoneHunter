const loadPhone = async (searchText = '13', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones, isShowAll);
}
const displayPhone = (phones, isShowAll) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    //show all button
    const showAllContainer = document.getElementById('show-container');
    if (phones.length > 12 && !isShowAll) {
        showAllContainer.classList.remove('hidden');
    }
    else {
        showAllContainer.classList.add('hidden');
    }

    // display only first 12 if not show all button
    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }


    phones.forEach(phone => {
        //console.log(phone)
        //console.log('is show all',isShowAll);
        //create a div
        const createDiv = document.createElement('div');
        createDiv.classList = `card bg-red-100 shadow-xl p-4 m-2`;
        createDiv.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>A mobile phone is a portable telephone.</p>
                <div class="card-actions justify-end">
                    <button onclick="showDetails('${phone.slug}')" class="btn btn-warning">Show Details</button>
                </div>
            </div>
        `
        phoneContainer.appendChild(createDiv);
    });
    showSpinner(false);
}

loadPhone();

//eventHandler
const clickHander2 = (isShowAll) => {
    showSpinner(true);
    const search = document.getElementById('phone-name2');
    const searchText = search.value;
    loadPhone(searchText, isShowAll);
    //search input text blank after searching
    //search.value = '';
}
//loading spinner
const showSpinner = (isLoading) => {
    const loadSpinner = document.getElementById('load-spinner');
    if (isLoading) {
        loadSpinner.classList.remove('hidden');
    }
    else {
        loadSpinner.classList.add('hidden');
    }
}

//handle show all 
const handleShowAll = () => {
    clickHander2(true);
}

//show details
const showDetails = async (id) => {
    //console.log('Show details',id);
    //load single data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
    showPhoneDetails(data.data);

}

//show phone details
const showPhoneDetails = (phone) => {
    console.log(phone)
    const detailsPhone = document.getElementById('show-phone-details');
    detailsPhone.innerHTML = `
    <figure><img src="${phone.image}" alt="phone" /></figure>
    <h3 class="font-bold text-lg">${phone.name}</h3>
    <p class="py-4">Storage : ${phone.mainFeatures.storage}
    <br>Display size : ${phone.mainFeatures.displaySize}<br>
    Storage : ${phone.mainFeatures.memory}<br>Chipset : ${phone.mainFeatures.chipSet}</p>
    <h4><span class="font-bold">Release Date:</span>  ${phone.releaseDate ? phone.releaseDate : "Unknown"} </h4>
    <div class="modal-action">
        <form method="dialog">
                <button class="btn">Close</button>
        </form>
    </div>
    `
    show_details_modal.showModal();
}