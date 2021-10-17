// import logo from "../icon/logo";
// import header from "../components/header";
// import link from "../components/link";
import Router from "../routes/router";
import addToDo from "../components/addToDo";
import addlogo from "../icon/addlogo";
import todoList from "../components/todoList/todoList";
// import dataFetcher from "../utils/dataFertcher";


import brandingHeader from "../components/brandingheader/brandingHeader"

const onRequestNewPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path)
}

const toDoPage = function(params){
    const div = document.createElement('div')
    div.classList.add('toDoPage')
    const pageHeader = brandingHeader()
    div.append(pageHeader)

    const main = document.createElement('main')
    div.append(main)
    const getData = async function(){
        const category = await todoList()   
        main.append(category)
    }
    getData()
    const pageFooter = document.createElement('footer')
    const linkElm = addToDo(addlogo,'/pageNotFound','addbutton')
    linkElm.addEventListener('click',onRequestNewPage)

    pageFooter.append(linkElm)
    div.append(pageFooter)
    return div
}

// const appInit = async function (){
//     const appData = await dataFetcher('https://raw.githubusercontent.com/kcheung12/DMIT2008-Assignment1/main/src/js/data/todos.json')
//     console.log(appData)
// }

// appInit()

export default toDoPage