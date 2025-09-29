const rootDomElement = document.getElementById('root');
const rootReactElement = ReactDOM.createRoot(rootDomElement);

function Header () {
    const mainHeaderReactElement = React.createElement('h1', null, 'React Header');
    const subHeaderReactElement = React.createElement('h2', {className: 'sub-header'}, 'React Subheader');

    const headerReactElement = React.createElement('header', null, mainHeaderReactElement, subHeaderReactElement);

    return headerReactElement;
}

function Main () {
    const mainReactElement = React.createElement('main', null, React.createElement('p', null, 'This is the main part'));
    return mainReactElement;
}

function Body () {
    const bodyReactElement = React.createElement(
        React.Fragment, 
        null, 
        React.createElement(Header),
        React.createElement(Main),
    )

    return bodyReactElement;
}

rootReactElement.render(React.createElement(Body));