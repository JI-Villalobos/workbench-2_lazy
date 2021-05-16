const isIntersecting = (entry) => {
    return entry.isIntersecting //true (in viewport)
}

const loadImage = (entry) => {

    //find nodo
    const container = entry.target
    const image = container.firstChild
    const url = image.dataset.src
    //console.log(nodo.nodeName);

    //load image
    image.src = url

    //delete wasted events (unlisten)
    observer.unobserve(container)
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