function createCard(jobTitle, jobSalary) {
        // Clone the original card template
        var originalCard = document.querySelector('.card.job-card');
        var newCard = originalCard.cloneNode(true);

        // Modify content if needed
        newCard.querySelector('.card-title').textContent = jobTitle;
        newCard.querySelector('.card-text').textContent = jobSalary;

        // Append the new card to the container
        document.getElementById('job-card-container').appendChild(newCard);
}


function displayCards(jobs) {
    for (let i=0; i < jobs.length; i++) {
        createCard(jobs[i].jobTitle, jobs[i].annualSalaryMin);
    }
}

document.addEventListener("DOMContentLoaded", function() {


    createCard();
})

