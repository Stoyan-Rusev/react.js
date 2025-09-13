// Get DOM containter
var rootDomElement = document.getElementById('root');

// Create root
var rootReactElement = ReactDOM.createRoot(rootDomElement);

// Create react element without JSX
var headingReactElement = React.createElement('h1', {}, 'Hello from JSX');
var subHeadingReactElement = React.createElement('h2', { id: 'sub-header' }, 'The best framework!');
var headerSectionReactElement = React.createElement('header', {}, headingReactElement, subHeadingReactElement);

// Create react element with JSX
var headerSectionReactJSXElement = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        { className: 'greeting' },
        'Hello from JSX'
    ),
    React.createElement(
        'h2',
        { id: 'sub-header' },
        'The best superset language'
    ),
    React.createElement(
        'p',
        null,
        'Hello'
    )
);

// Render element to UI
rootReactElement.render(headerSectionReactJSXElement);