const d = document;
const body = d.body;
const html = d.documentElement;
const totalPageHeight = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight)
// elementos
const btnHomePage = d.querySelector('.btn_homePage');

document.addEventListener('DOMContentLoaded', (e) => {
    
})

document.addEventListener('scroll', (e) => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    const scrolled = (currentScroll + windowHeight) / totalPageHeight;

    if (scrolled > 0.6) {
        btnHomePage.style.display = 'flex';
    }
    else if (scrolled < 0.6) {
        btnHomePage.style.display = 'none'
    }

})


