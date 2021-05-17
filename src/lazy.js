let totalImages = 0
let loadedImages = 0

const observer = new IntersectionObserver((entries) => {
    entries
    .filter(isIntersecting)
    .forEach(loadImage)
})

const isIntersecting = (intersectionEntry) => {
    return intersectionEntry.isIntersecting //true (in viewport)
}

const loadImage = (intersectionEntry) => {

    //find nodo
    const imgNode = intersectionEntry.target
    //const image = container.firstChild
    const url = imgNode.dataset.src
    //console.log(nodo.nodeName);

    //load image
    imgNode.src = url
    imgNode.onload = () => {
        loadedImages += 1
        logState()
    }
    //delete wasted events (unlisten)
    observer.unobserve(imgNode)
}

export const registerImage = (image) => {
    //intesection observer -> observer(image)
    observer.observe(image)
    totalImages += 1
    logState()
}

function logState(){
    console.log(`⚪️ Total imágenes: ${totalImages}`);
    console.log(`🟣 Imágenes cargadas ${loadedImages}`);
    console.log("-------------------------------------");
}