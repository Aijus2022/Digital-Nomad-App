sideBarElement = document.getElementById("side-bar");

recentSearchesElement = document.getElementById("previous-search-container");

function setLocalStorage(userPreferences) {

    let searchHistoryArray = getLocalStorage();

    // Add the new search to the beginning of the array

    searchHistoryArray.unshift(userPreferences);

    // Trim the array to keep only the first five most recent searches

    searchHistoryArray = searchHistoryArray.slice(0, 5);

    localStorage.setItem('searchHistory',JSON.stringify(searchHistoryArray));
  
}

  function getLocalStorage(){

    const searchHistoryArray = JSON.parse(localStorage.getItem('searchHistory')) || [];
    
    return searchHistoryArray;

  }

// Create a function to dynamically create the card

// this function  takes an object userPreferences as its argument and destructures its properties

function createCard({country, industry, salary}) {
    
    // Create card element

    const card = document.createElement('div');

    card.className = 'card';

    card.id = 'previous-search-card';

    card.style.width = '18rem';

    // Create card body

    const cardBody = document.createElement('div');

    cardBody.className = 'card-body';

    // Create card title/country name

    const cardTitle = document.createElement('h5');

    cardTitle.className = 'card-title';

    cardTitle.textContent = country;

     // Create card text for industry

     const cardIndustryText = document.createElement('p');

     cardIndustryText.className = 'card-text';

     cardIndustryText.id = 'industry';

     cardIndustryText.textContent = 'Industry: ' + industry;
 
    // Create card text for salary

    const cardSalaryText = document.createElement('p');

    cardSalaryText.className = 'card-text';

    cardSalaryText.id = 'salary';

    cardSalaryText.textContent = 'Minimum salary: ' + salary;

   
    // Create "Resubmit search" button

    const resubmitLink = document.createElement('a');
    
    resubmitLink.className = 'btn btn-primary';

    resubmitLink.setAttribute('data-bs-dismiss', 'offcanvas');
   
    resubmitLink.textContent = 'Resubmit search';

    // Append elements to build the card structure

    cardBody.appendChild(cardTitle);

    cardBody.appendChild(cardIndustryText);

    cardBody.appendChild(cardSalaryText);

    cardBody.appendChild(resubmitLink);

    card.appendChild(cardBody);

    //append the search history card to the end of side bar

    recentSearchesElement.prepend(card);

}

function removeOldestCard(){

    console.log(recentSearchesElement.lastElementChild);

    recentSearchesElement.removeChild(recentSearchesElement.lastElementChild);

}

// Function to populate recent searches on page load

function populateSearchHistoryArea() {

    const searchHistory = getLocalStorage();

    // Clear existing content in case of updates

    recentSearchesElement.innerHTML = '';

    // Create and append cards for each search history entry

    searchHistory.forEach(userPreferences => {

        createCard(userPreferences);

    });

}

function createDropdown(dropdownAnchor, Items){

    const searchBar = document.createElement("input");

    searchBar.className = "form-control mx-auto";

    dropdownAnchor.appendChild(searchBar);

    Items.forEach(item => {

        const dropdownItem = document.createElement("li");

        dropdownItem.textContent = item;

        dropdownAnchor.appendChild(dropdownItem);

    })

}

function filterDropdown(dropdown) {

    const searchTerm = document.querySelector("input").value.toLowerCase();

    const dropdownItems = dropdown.getElementsByTagName("li");

    // should dropdownItem show  or not

    for(const dropdownItem of dropdownItems){

        const dropdownItemText = dropdownItem.textContent.toLowerCase();

        dropdownItem.style.display = dropdownItemText.includes(searchTerm) ? "block" : "none";

    }

}

function selectDropdownItem(dropdownAnchor, item){

    dropdownAnchor.textContent = item;

}

window.onload = populateSearchHistoryArea;