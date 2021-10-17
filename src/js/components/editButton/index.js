import makeElement from "../../utils/makeElement"


const addToDo = function(img, path='/', className='link'){
    const template = `<a href="${path}" data-path="${path}" class="${className}">${img}</a>`
    const element = makeElement(template)
    return element
}

export default addToDo