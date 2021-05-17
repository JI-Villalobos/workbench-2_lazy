
const maximum = 122
const minimum = 1
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum


export const createImageNodes = () => {
    const wrapper = document.createElement("div")
    wrapper.className = "p-4"

    const image = document.createElement("img")
    image.className = "mx-auto rounded-lg bg-gray-200 mt-4 focus:ring-indigo-100"
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`
    image.width = 320

    wrapper.append(image)

    return [wrapper, image]
}