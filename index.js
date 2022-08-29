document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.swiper', {
        pagination: {
            el: '.swiper-scrollbar',
            type: 'progressbar'
        },
        slidesPerView: 2,
        loop: true,
        autoplay: {
            delay: 2000,
        },
    })
new WOW().init();
 }, false);

 const apps = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");
apps.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        let arhip = item;
        let tabId = arhip.getAttribute("data-tab");
        let arhipTab = document.querySelector(tabId);

        if( ! arhip.classList.contains('active') ) {
            apps.forEach(function(item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });


            arhip.classList.add('active');
            arhipTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();