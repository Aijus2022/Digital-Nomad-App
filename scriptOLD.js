// let url = 'https://jobicy.com/api/v2/remote-jobs?count=5&geo=usa&industry=web-app-design'


// function testSearch() {
//     fetch(url)
//         .then(function (response) {
//         return response.json()
//         })
//         .then (function (data) {

//         let testObject = data.apiVersion
//         console.log(testObject)
//     });
// }

// testSearch();


const jobCountryList = [
    "Anywhere",
    "Australia",
    "China",
    "Japan",
    "New Zealand",
    "Philippenes",
    "Singapore",
    "South Korea",
    "Thailand",
    "Vietnam",
    "Austria",
    "Belgium",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czehcia",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Ireland",
    "Italy",
    "Latvia",
    "Lithuania",
    "Netherlands",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "UK",
    "Israel",
    "Turkey",
    "United Arab Emirates",
    "Argentina",
    "Brazil",
    "Costa Rica",
    "Mexico",
    "Canada",
    "USA"
]

const jobTypeList = [
    "Any",
    "Business Development",
    "Copywriting and Content",
    "Customer Success",
    "Data Science",
    "Design and Creative",
    "DevOps & SysAdmin",
    "Engineering",
    "Finance & Legal",
    "HR & Recruiting",
    "Marketing & Sales",
    "Product & Operations",
    "Programming",
    "Sales",
    "SEO",
    "Social Media Marketing",
    "Technical Support",
    "Web & App Design"
]

// console.log(jobCountryList.length)




// Validate user search on home screen (this will need to be connected to the button click event)

function validateSearch() {
  let searchTerm = document.getElementById('answer1').value;
  let searchResult = document.getElementById('searchResult1');

  if (jobCountryList.includes(searchTerm)) {
        searchResult.textContent = 'Search successful for ' + searchTerm + '!';
        return true; 
    }   else {
            searchResult.textContent = 'Please enter a valid country.';
            return false; 
        }
}



// Show searchable countries when menu button is clicked

function countryList() {

    for (let i=0; i<jobCountryList.length; i++) {

        let country = jobCountryList[i];
        let countryDropList = document.getElementById('country-list');

        let addCountry = document.createElement("li");
        addCountry.innerHTML = country;
        countryDropList.appendChild(addCountry);
    }
}

let countryListButton = document.getElementById('country-list-button');

countryListButton.addEventListener('click', function() {
    countryList();
});


// Show searchable job types when menu button is clicked

function jobList() {

    for (let i=0; i<jobTypeList.length; i++) {

        let job = jobTypeList[i];
        let jobDropList = document.getElementById('job-list');

        let addJob = document.createElement("li");
        addJob.innerHTML = job;
        jobDropList.appendChild(addJob);
    }
}

let jobListButton = document.getElementById('job-list-button');

countryListButton.addEventListener('click', function() {
    jobList();
});
