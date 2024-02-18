const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach((dropdown) => {
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');

  
    valueElement.addEventListener('click', () => {
        const isActive = listElement.classList.contains('dropdown__list_active');
        if (isActive) {
            listElement.classList.remove('dropdown__list_active');
        } else {
            listElement.classList.add('dropdown__list_active');
        }
    });

    
    listElement.addEventListener('click', (event) => {
        event.preventDefault();
        const linkElement = event.target;
        const selectedValue = linkElement.textContent;
        valueElement.textContent = selectedValue;
        listElement.classList.remove('dropdown__list_active');
    });
});