

function customRender(reactElement, container) {

  // Function Component support
  if (typeof reactElement.type === "function") {
    return customRender(reactElement.type(), container);
  }

  // Create DOM element
  const domElement = document.createElement(reactElement.type);

  // Props & Events
  for (const prop in reactElement.props) {
    if (prop.startsWith("on")) {
      const eventType = prop.toLowerCase().substring(2);
      domElement.addEventListener(eventType, reactElement.props[prop]);
    } else {
      domElement.setAttribute(prop, reactElement.props[prop]);
    }
  }

  // Children
  const children = reactElement.Children;

  if (typeof children === "string") {
    domElement.textContent = children;
  } 
  else if (Array.isArray(children)) {
    children.forEach(child => customRender(child, domElement));
  }

  // Append
  container.appendChild(domElement);
}


// Function Component
function App() {
  return {
    type: "div",
    props: { class: "box" },
    Children: [
      {
        type: "h1",
        props: {},
        Children: "Hello Hardeep 👋"
      },
      {
        type: "button",
        props: {
          onClick: () => alert("Button Clicked!")
        },
        Children: "Click Me"
      },
      {
        type: "a",
        props: {
          href: "https://google.com",
          target: "_blank"
        },
        Children: "Visit Google"
      }
    ]
  };
}


// Render App
const mainContainer = document.querySelector("#root");
customRender({ type: App, props: {}, Children: [] }, mainContainer);
