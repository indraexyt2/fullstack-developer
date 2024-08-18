const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo')
const thumb = document.querySelectorAll('.thumb')

container.addEventListener('click', function(el) {
    if (el.target.className === 'thumb') {
        jumbo.src = el.target.src;
        jumbo.classList.add('fade');
        setTimeout(function() {
            jumbo.classList.remove('fade')
        }, 500)

        thumb.forEach(function(thumbs) {
            if (thumbs.classList.contains('active')) {
                thumbs.classList.remove('active')
            }
           
        })

        el.target.classList.add('active')
    }
})