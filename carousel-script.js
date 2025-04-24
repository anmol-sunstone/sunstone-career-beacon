
document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.carousel-wrapper');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    
    let currentScroll = 0;
    const imageWidth = wrapper.querySelector('img').offsetWidth + 16; // width + gap
    const totalImages = wrapper.querySelectorAll('img').length;
    
    nextBtn.addEventListener('click', () => {
        currentScroll += imageWidth * 3;
        if (currentScroll >= totalImages * imageWidth) {
            currentScroll = 0;
        }
        wrapper.scrollTo({ left: currentScroll, behavior: 'smooth' });
    });
    
    prevBtn.addEventListener('click', () => {
        currentScroll -= imageWidth * 3;
        if (currentScroll < 0) {
            currentScroll = (totalImages - 3) * imageWidth;
        }
        wrapper.scrollTo({ left: currentScroll, behavior: 'smooth' });
    });
});
