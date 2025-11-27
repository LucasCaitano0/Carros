let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')


let active = 0 
let firstPosition = 0
let lastPosition = items.length - 1


prevButton.onclick = function(){
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    /*if(active + 1 > lastPosition){
        active = 0
    } else {
        active + 1
    }
    items[active].classList.add('active')
}*/

    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')

nextButton.onclick = function(){
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firstPosition ? lastPosition : active - 1
    items[active].classList.add('active')


}
}
