// Tabs of the tab navigation
const tab1 = document.querySelector('.second-nav ul li:first-child');
const tab2 = document.querySelector('.second-nav ul li:nth-child(2)');
const tab3 = document.querySelector('.second-nav ul li:last-child');

// Content of the tabs
const tabContentOptions = document.querySelectorAll('.tab-content');

const tabNavigation = document.querySelector('.second-nav ul');
tabNavigation.addEventListener('click', openTab);

function openTab(event) {
    const tabList = [tab1, tab2, tab3];
    const openedTab = event.target;

    // Checks which tab is opened and adds the active class to it
    for (let i = 0; i < tabList.length; i++) {
        if (openedTab.textContent == tabList[i].textContent) {
            tabList[i].classList.add('is-active'); // Highlights the opened tab
            if (tabContentOptions[i].classList.contains('is-hidden')) {
                tabContentOptions[i].classList.remove('is-hidden'); // Makes content of the opened tab visible
            }
        }
        else {
            if (tabList[i].classList.contains('is-active')) {
                tabList[i].classList.remove('is-active');
            }
            tabContentOptions[i].classList.add('is-hidden');
        }
    }
}