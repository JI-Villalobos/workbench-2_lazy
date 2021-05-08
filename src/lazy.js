const isIntersecting = (entry) => {
    return entry.isIntersecting //true (in viewport)
}

const action = (entry) => {

    //find nodo
    const nodo = entry.target

    console.log("action");

    //delete wasted events (unlisten)
    observer.unobserve(nodo)
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(action)
})

export const registerImage = (image) => {
    //intesection observer -> observer(image)
    observer.observe(image)
}