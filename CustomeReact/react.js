function customRender(reactElement,conatiner){
// const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)
//     conatiner.appendChild(domElement)
 const domElement=document.createElement(reactElement.type)
 domElement.innerHTML =reactElement.children
 for(const prop in reactElement. props){
    if(prop=== 'children') continue
    domElement.setAttribute(prop, reactElement.props[prop])
 }
 conatiner.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
            },
            children:'Click me to go to google'
}

const mainContainer =document.querySelector("#root")

customRender(reactElement, mainContainer)
