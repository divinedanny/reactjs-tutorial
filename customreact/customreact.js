function customRender (ReactElement, container) {
    // const donElement = document.createElement(ReactElement.type)
    // donElement.innerHTML = ReactElement.children
    // donElement.setAttribute('href', ReactElement.props.href)
    // donElement.setAttribute('target', ReactElement.props.target)
    // container.appendChild(donElement);

    const createnewDomElement = document.createElement(ReactElement.type)
    createnewDomElement.innerHTML = ReactElement.children
    for (const prop in ReactElement.props) {
        if(prop === 'children') continue
        createnewDomElement.setAttribute(prop, ReactElement.props[prop])
    }
    container.appendChild(createnewDomElement);
}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click me!'
}

const mainContainer = document.querySelector('#root')
// const mainContainer = document.getElementById('root')

customRender(ReactElement, mainContainer)