// console.log("IT’S ALIVE!");

// function $$ (selector, context = document) {
//     return Array.from(context.querySelectorAll(selector));
// }

// let navLinks = $$("nav a");

// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);

// currentLink?.classList.add("current");

const ARE_WE_HOME = document.documentElement.classList.contains("home");

let pages = [
    {url: "./", title: "Home"},
    {url: "projects", title: "Projects"},
    {url: "curriculum", title: "Curriculum"},
    {url: "contact", title: "Contact"},
    {url: "https://github.com/PedroPHC25", title: "GitHub"}
];

// let nav = document.createElement("nav");
// document.body.prepend(nav);

// for (let p of pages) {
//     let url = p.url;
//     let title = p.title;
//     // Create link and add it to nav
//     if (!ARE_WE_HOME && !url.startsWith("http")) {
//         let basePath = location.origin + location.pathname.split('/').slice(0, 2).join('/');
    
//         // Garante que basePath termina com "/" e url não começa com "/"
//         if (!basePath.endsWith("/")) basePath += "/";
//         if (url.startsWith("/")) url = url.slice(1);
    
//         url = basePath + url;
//     }

//     let a = document.createElement("a");

//     if (a.host === location.host && a.pathname === location.pathname) {
//         a.classList.add("current");
//     }

//     a.href = url;
//     a.textContent = title;

//     if (a.host != location.host) {
//         a.target = "_blank"
//     }

//     nav.append(a);
// }