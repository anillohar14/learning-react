// const container = React.createElement(
//   "container",
//   { className: "container", key: 1 },
//   [
//     React.createElement("section", { className: "section", key: 1 }, [
//       React.createElement("div", { className: "content", key: 2 }, [
//         React.createElement("img", {
//           src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
//           alt: "animals",
//           key: 1,
//           style: { width: 200 },
//         }),
//       ]),
//       React.createElement("form", { className: "form-content", key: 1 }, [
//         React.createElement("div", { key: 1, className: "form-group" }, [
//           React.createElement(
//             "label",
//             { key: 1, htmlFor: "username" },
//             "username"
//           ),
//           React.createElement("input", {
//             key: 2,
//             placeholder: "Enter your name",
//             type: "text",
//             id: "username",
//           }),
//           React.createElement(
//             "label",
//             { key: 3, htmlFor: "password" },
//             "Password"
//           ),
//           React.createElement("input", {
//             key: 2,
//             placeholder: "Enter your Password",
//             type: "password",
//             id: "password",
//           }),
//         ]),
//       ]),
//     ]),
//   ]
// );

/*
    Babel is a JavaScript compiler that allows you to write modern JavaScript (ES6+) and JSX code, 
    and then transforms it into code that is compatible with older browsers or environments. 
    In React projects, Babel is commonly used to convert JSX syntax into regular JavaScript that 
    browsers can understand.
*/

// JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe what the UI should look like.
//  It allows you to write HTML-like code directly within JavaScript,
//  which Babel then compiles into React.createElement calls.
//  This makes it easier to visualize and build user interfaces.

// now we can write the above code in jsx
// below is the jsx code

// IMPORTANT in react the react will not display the undefine , null , false values
// but it will display 0 value

const container = (
  <container className="container">
    <section className="section">
      <div className="content">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="animals"
          style={{ width: 200 }}
        />
      </div>
      <form className="form-content">
        <div className="form-group">
          <label htmlFor="username">username</label>
          <input
            placeholder="Enter your name"
            type="text"
            id="username"
          />
          <label htmlFor="password">Password</label>
          <input
            placeholder="Enter your Password"
            type="password"
            id="password"
          />
        </div>
      </form>
    </section>
  </container>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
