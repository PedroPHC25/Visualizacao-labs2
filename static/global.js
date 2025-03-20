// console.log("IT’S ALIVE!");

// function $$ (selector, context = document) {
//     return Array.from(context.querySelectorAll(selector));
// }

// let navLinks = $$("nav a");

// // console.log(navLinks);

// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);

// currentLink?.classList.add("current");

const ARE_WE_HOME = document.documentElement.classList.contains("home");

let pages = [
    {url: "./", title: "Home"},
    {url: "projects", title: "Projects"},
    {url: "contact", title: "Contact"},
    {url: "curriculum", title: "Curriculum"},
    {url: "https://github.com/PedroPHC25", title: "GitHub"}
];

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
    let url = p.url;

    if (!ARE_WE_HOME && !url.startsWith("http"))
    {
        url = "../" + url;
    }

    let title = p.title;
    // Create link and add it to nav
    // nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );
    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;

    if (a.host === location.host && a.pathname === location.pathname)
    {
        a.classList.add("current");
    }

    if (a.host != location.host)
    {
        a.target = "_blank";
    }

    nav.append(a);
}