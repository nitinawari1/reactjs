//example of how reactjs work underthehood 

//for every tag in react it work same for all  


function customRender (reactElement , container){
    // Not a optimal way of writing code because if we have 10 atrribute then we set ten times 

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    
    // domElement.setAttribute('href', 'reactElement.props.href')
    // domElement.setAttribute('href', 'reactElement.props.target')
    // container.appendChild(domElement)

    //optimal way 
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if ('children' === prop) continue;  // usable when we have children in props
        domElement.setAttribute(prop , reactElement.props[prop])
        container.appendChild(domElement)
    }


}
//how react see the a tag in behind
const reactElement = {
    type : 'a' ,
    props : {
        href : 'https://google.com' , //his atributes
        target : '_blank'
    } ,
    children:'click me to visit google' //inside the a tag 
}

const mainconatiner = document.getElementById('root') ;
//rendering a tag  into the div
customRender(reactElement , mainconatiner);

