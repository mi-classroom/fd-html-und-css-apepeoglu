let currentPageContent = document.querySelector('main');
const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const content3 = document.querySelector('.content3');

const tab1 = document.querySelector('.second-nav ul li:first-child');
tab1.addEventListener('click', openTab1);

const tab2 = document.querySelector('.second-nav ul li:nth-child(2)');
tab2.addEventListener('click', openTab2);

const tab3 = document.querySelector('.second-nav ul li:last-child');
tab3.addEventListener('click', openTab3);

function openTab1() {
    tab1.classList.add('is-open');
    tab2.classList.remove('is-open');
    tab3.classList.remove('is-open');
    currentPageContent.textContent = ''; // Clear the existing content
    currentPageContent.appendChild(content1.cloneNode(true)); // Append the desired content for Tab 1
}

function openTab2() {
    tab2.classList.add('is-open');
    tab1.classList.remove('is-open');
    tab3.classList.remove('is-open');
    currentPageContent.textContent = ''; // Clear the existing content
    currentPageContent.appendChild(content2.cloneNode(true)); // Append the desired content for Tab 1
}

function openTab3() {
    tab3.classList.add('is-open');
    tab1.classList.remove('is-open');
    tab2.classList.remove('is-open');
    currentPageContent.textContent = ''; // Clear the existing content
    currentPageContent.appendChild(content3.cloneNode(true)); // Append the desired content for Tab 1
}