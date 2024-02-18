const tabs = document.querySelectorAll('.tab');

const tabContents = document.querySelectorAll('.tab__content');

function switchTab(index) {
  tabs.forEach(tab => tab.classList.remove('tab_active'));
  
  tabs[index].classList.add('tab_active');

  tabContents.forEach(content => content.classList.remove('tab__content_active'));
  
  tabContents[index].classList.add('tab__content_active');
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    switchTab(index);
  });
});

switchTab(0);