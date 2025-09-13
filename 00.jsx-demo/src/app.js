// Get DOM containter
const rootDomElement = document.getElementById('root');

// Create root
const rootReactElement = ReactDOM.createRoot(rootDomElement);

// Create react element without JSX
const headingReactElement = React.createElement('h1', {}, 'Hello from JSX');
const subHeadingReactElement =  React.createElement('h2', {id: 'sub-header'}, 'The best framework!');
const headerSectionReactElement = React.createElement('header', {}, headingReactElement, subHeadingReactElement)

// Create react element with JSX
const headerSectionReactJSXElement = (
    <header>
        <h1 className='greeting'>Hello from JSX</h1>
        <h2 id='sub-header'>The best superset language</h2>
        <p>Hello</p>
    </header>
);

// Render element to UI
rootReactElement.render(headerSectionReactJSXElement);