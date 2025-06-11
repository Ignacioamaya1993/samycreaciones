async function includeHTML() {
let pathPrefix = location.pathname === "/" || location.pathname === "/index.html" ? "pages/" : "";

const header = await fetch(pathPrefix + "header.html").then(res => res.text());
const footer = await fetch(pathPrefix + "footer.html").then(res => res.text());

document.querySelector("#header").innerHTML = header;
document.querySelector("#footer").innerHTML = footer;
}