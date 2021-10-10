import logo from "../icon/logo";
import header from "../components/header";
import link from "../components/link";
import Router from "../routes/router";

const onRequestNewPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path)
}

const toDoPage = function(params){

    const pageHeader = document.createElement('header')
    pageHeader.classList.add('homePage-header')
    const logoElm = logo()
    const h1 = header ('h1','Bingo is life')
    const linkElm = link('404', '/pageNotFound')
    linkElm.addEventListener('click',onRequestNewPage)
    pageHeader.append(logoElm)
    pageHeader.append(h1)
    pageHeader.append(linkElm)
    return pageHeader
}

export default toDoPage