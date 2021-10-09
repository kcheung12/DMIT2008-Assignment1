import logo from "../icon/logo";
import header from "../components/header";
import button from "../components/button";
import makeElement from "../utils/makeElement";

const homePage = function(params){

    const pageHeader = document.createElement('header')
    pageHeader.classList.add('homePage-header')
    pageHeader.appendChild(makeElement(logo()))
    pageHeader.appendChild(makeElement(header('Bingo is life')))
    pageHeader.appendChild(makeElement(button('To Do List App')))
    return pageHeader
}

export default homePage