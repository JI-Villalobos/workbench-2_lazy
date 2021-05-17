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
    //delete wasted events (unlisten)
    observer.unobserve(imgNode)
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

export const registerImage = (image) => {
    //intesection observer -> observer(image)
    observer.observe(image)
}