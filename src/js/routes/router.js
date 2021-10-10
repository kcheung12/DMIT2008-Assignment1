import home from "../pages/home";
import pageNotFound from "../pages/pageNotFound";
import toDoPage from "../pages/toDoPage";

const routes = {
    '/': home(),
    '/toDoPage': toDoPage(),
    '/pageNotFound': pageNotFound()
}

const Router = function (pathname) {
    

    const app = document.querySelector('#app')
    app.innerHTML = ''
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    app.appendChild(routes[window.location.pathname])
}

export default Router