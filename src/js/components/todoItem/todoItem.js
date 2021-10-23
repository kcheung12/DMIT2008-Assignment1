import makeElement from "../../utils/makeElement"

const todoItem = function({id,category,title,endDate,isComplete}){
    const template = 
    `
    <ul class="list" data-key="${id}">
        <li class="category" >${category}</li>
        <li class="title" >${title}</li>
        <li class="date" >${endDate}</li>
        <li class="isComplete" >${isComplete? 'Completed' : '&nbsp;'}</li>
    </ul>
    `

    return makeElement(template)
}

export default todoItem