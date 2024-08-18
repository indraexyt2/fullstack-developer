// DOM Traversal
const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card')

// close.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none'
//     })
// })

close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.previousElementSibling.style.display = 'none'
    })
})