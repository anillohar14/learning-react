// What is React
// React is an javaScript library for building web apps
// It is used for building user interfaces(UI) for single page applications
// adevantages of React
// 1. It is fast to learn
// 2. It is scalable
// 3. It is use to make single page application 
// 4. It is provide us the facility to write declarative code means we can describe what we want to do
// 5. It is powerful


// What is React Element?
// React Element is an object representation of a DOM element.When we create a React element, 
// it is not an actual DOM element but rather a lightweight description of what the DOM element should look like.
// React elements are immutable, meaning that once they are created, they cannot be changed. Instead
// we create new React elements to represent changes in the UI.

// for exmaple we have created an element using React createElement method
// this method will create an object representation of a DOM element
//When we type container in browser console we will get the object representation of the DOM element


const container = React.createElement(
  "container",
  { className: "container", key: 1 },
  [
    React.createElement("section", { className: "section", key: 1 }, [
      React.createElement("div", { className: "content", key: 2 }, [
        React.createElement("img", {
          src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          alt: "animals",
          key: 1,
          style: { width: 200 },
        }),
      ]),
      React.createElement("form", { className: "form-content", key: 1 }, [
        React.createElement("div", { key: 1, className: "form-group" }, [
          React.createElement(
            "label",
            { key: 1, htmlFor: "username" },
            "username"
          ),
          React.createElement("input", {
            key: 2,
            placeholder: "Enter your name",
            type: "text",
            id: "username",
          }),
          React.createElement(
            "label",
            { key: 3, htmlFor: "password" },
            "Password"
          ),
          React.createElement("input", {
            key: 2,
            placeholder: "Enter your Password",
            type: "password",
            id: "password",
          }),
        ]),
      ]),
    ]),
  ]
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
