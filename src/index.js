/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { format } from 'prettier'
import { registerImage } from './lazy'
import { createImageNodes } from './utils'
import { clearValues } from './lazy'
//create (1) image

/* 
<div class="p-4">
    <img class="mx-auto" width="320" src="https://randomfox.ca/images/2.jpg" alt="">
</div>
*/

//load img when the page load
const allImages =  document.querySelectorAll("img[data-src]")
allImages.forEach(registerImage)

//add new images
const imageContainer = document.querySelector("#images")

const button = document.querySelector("button[type='submit']")

button.addEventListener("click", () => {
    const [node, image] = createImageNodes()
    registerImage(image)
    imageContainer.append(node)
})

//clean
const clean = document.querySelector("button[type='reset']")
clean.addEventListener("click", () => {
    imageContainer.innerHTML = ""
    console.clear()
    clearValues()
})


