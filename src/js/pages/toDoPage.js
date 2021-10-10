// import logo from "../icon/logo";
// import header from "../components/header";
import link from "../components/link";
import Router from "../routes/router";
import addToDo from "../components/addToDo";
import addlogo from "../icon/addlogo";


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
    const pageFooter = document.createElement('footer')
    const linkElm = addToDo(addlogo,'/pageNotFound','addbutton')
    linkElm.addEventListener('click',onRequestNewPage)

    pageFooter.append(linkElm)
    div.append(pageFooter)
    return div
}

export default toDoPage