import logo from "../../icon/logo"
import header from "../header"
import tagline from "../tagline"

const brandingHeader = function(params){

    const pageHeader = document.createElement('header')
    pageHeader.classList.add('toDoPage-header')
    const logoElm = logo()
    const h1 = header ('h1','Bingo')
    const p = tagline('Time to play')
    pageHeader.append(logoElm)
    pageHeader.append(h1)
    pageHeader.append(p)

    return pageHeader
}

export default brandingHeader