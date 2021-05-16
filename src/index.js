/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { registerImage } from './lazy'

//create (1) image

/* 
<div class="p-4">
    <img class="mx-auto" width="320" src="https://randomfox.ca/images/2.jpg" alt="">
</div>
*/

const maximum = 122
const minimum = 1
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum

const createImageNode = () => {
    const container = document.createElement('div')
    container.className = "p-4"

    const image = document.createElement('img')
    image.className = 'mx-auto'
    image.width = '320'
    //image.src = `https://randomfox.ca/images/${random()}.jpg` //TODO  
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`

    container.appendChild(image)


    return container
}

//const newImage = createImageNode()

const mountNode =  document.getElementById('images')

const addButton = document.querySelector('button')
const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage)
    registerImage(newImage)
}

addButton.addEventListener("click", addImage)


