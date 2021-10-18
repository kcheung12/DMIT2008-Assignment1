const todoItem = function({id,category,title,endDate,isComplete}){
    const template = 
    `
    <ul class="list">
        <li class="category" data-key="${id}">${category}</li>
        <li class="title" data-key="${id}">${title}</li>
        <li class="date" data-key="${id}">${endDate}</li>
        <li class="isComplete" data-key="${id}">${isComplete? 'Completed' : '&nbsp;'}</li>
    </ul>
    `
    return template
}

export default todoItem