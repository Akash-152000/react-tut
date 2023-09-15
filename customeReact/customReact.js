const reactElement = {
    tag:'a',
    attributes :{
        href: 'https://google.com',
        target:'_blank'
    },
    text:"Visit google website"

}

function customRender(reactElement,mainContainer){

    let tagElem = document.createElement(reactElement.tag)
    tagElem.innerHTML = reactElement.text
console.log(tagElem);
   for (const attr in reactElement.attributes) {
        tagElem.setAttribute(attr,reactElement.attributes[attr])
   }

   mainContainer.appendChild(tagElem)
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)