   document.querySelectorAll('.accordion-item').forEach(item => {
            const accBtn = item.querySelector('.accordion-btn');
            accBtn.addEventListener('click', () => toggleAccordion(item));
        });

        function toggleAccordion(activeItem) {
            const accordionItems = document.querySelectorAll('.accordion-item');

            accordionItems.forEach(item => {
                const content = item.querySelector('.accordion-text');
                const arrow = item.querySelector('img');

                if (item === activeItem) {
                    item.classList.toggle('active');
                    content.classList.toggle('-mt-48');
                 
                    arrow.classList.toggle('rotate-180');
                    arrow.src = item.classList.contains('active') 
                        ? './assets/images/svg/open-acc.svg' 
                        : './assets/images/svg/plus.svg';
                } else {
                    item.classList.remove('active');
                    content.classList.add('-mt-48');
                   
                    arrow.classList.remove('rotate-180');
                    arrow.src = './assets/images/svg/plus.svg';
                }
            });
        }