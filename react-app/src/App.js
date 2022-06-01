// https://create-react-app.dev/
import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useReducer, useRef } from "react";
import { Link, Outlet } from "react-router-dom";

// const languages = ["JavaScript", "Python", "Swift"]
// console.log(languages[0])

// const [firstLanguage, secondLanguage] = [
//   "JavaScript",
//   "Python",
//   "Swift"
// ]
//
// console.log(firstLanguage)
// console.log(secondLanguage)

function App_v1() {
  // const what = useState();
  // const what = useState("happy"); // useState is a Hook
  // console.log(what);

  const [language, setLanguage] = useState("JavaScript");
  // language - our state variable
  // setLanguage - the function used to update the state
  // a state variable can be a string, boolean, object, or array

  const [secondary, setSecondary] = useState("Python");

  // useEffect(() => {
  //   console.log(`Learning ${language} at the moment`);
  // });
  // useEffect can be used with console logging, loading, animations


/*
  useEffect(() => {
    console.log(`Learning ${language} at the moment`);
  }, [language]); // passing [] won't cause useEffect to be called again, after the first render
  // it's called the dependency array

  // useEffect(() => {
  //   console.log(`Learning ${secondary} as a secondary language`);
  // }, []);
*/

  useEffect(() => {
    console.log(`Learning ${language} at the moment`);
  }, [language, secondary]); // called anytime language or secondary changes

  useEffect(() => {
    console.log(`Learning ${secondary} as a secondary language`);
  }, [secondary]); // called anytime secondary changes

  return (
    <div className="App">

      <h1>Currenty learning {language}</h1>
      <button onClick={() => setLanguage("JavaScript")}>Switch to JavaScript</button>
      <button onClick={() => setLanguage("Python")}>Switch to Python</button>

      <h2>Current secondary language is {secondary}</h2>
      <button onClick={() => setSecondary("Swift")}>Swift</button>

    </div>
  );
}

function App_v2() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <input
        type="checkbox"
        value={checked}
        onChange={() =>
          setChecked(checked => !checked)
        }
      />
      <label>{checked ? "checked" : "not checked"}</label>
    </div>
  );
}

function App_v3() {
  const [checked, setChecked] = useReducer(
    (checked) => !checked,
    false
  );
  return (
    <div className="App">
      <input
        type="checkbox"
        value={checked}
        onChange={setChecked}
      />
      <label>{checked ? "checked" : "not checked"}</label>
    </div>
  );
}

// Working with uncontrolled components
function App_v4() {
  const txtTitle = useRef();
  const hexColor = useRef();
  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  };
  return (
    <form onSubmit={submit}>
      <input
        ref={txtTitle}
        type="text"
        placeholder="color title..."
      />
      <input ref={hexColor} type="color" />
      <button>ADD</button>
    </form>
  );
}

// Controlled form elements (because we create state values for the form elements)
function App_v5() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("#000000");
  };
  return (
    <form onSubmit={submit}>
      <input
        value={title}
        type="text"
        placeholder="color title..."
        onChange={(event) =>
          setTitle(event.target.value)
        }
      />
      <input
        value={color}
        type="color"
        onChange={(event) =>
          setColor(event.target.value)
        }
      />
      <button>ADD</button>
    </form>
  );
}

// Custom Hook
// Starts with use
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  // Similar to what we did with out controlled component
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ];
}

function App_v6() {
  // Use custom hook
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000"); // useState did not work
  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);
    resetTitle();
    resetColor();
  };
  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
      />
      <input
        {...colorProps}
        type="color"
      />
      <button>ADD</button>
    </form>
  );
}

// formik.org
// react-hook-form.com
// usehooks.com

// Asynchronous React
// Fetching data with Hooks
function App_v7() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/ppalancica`)
      .then((response) => response.json()
      .then(setData)); // same as: .then(data => setData(data)));
  }, []);
  if (data)
    return (
      <pre>{JSON.stringify(data, null, 2)}</pre>
    );
  return <h1>Data</h1>;
}

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name} />
    </div>
  );
}

// Asynchronous React
// Display data from an API
function App_v8() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/ppalancica`)
      .then((response) => response.json()
      .then(setData)); // same as: .then(data => setData(data)));
  }, []);
  if (data)
    return (
      // <pre>{JSON.stringify(data, null, 2)}</pre>
      <GithubUser
        name={data.name}
        location={data.location}
        avatar={data.avatar_url}
      />
    );
  return <h1>Data</h1>;
}

// Asynchronous React
// Handling loading states
function App_v9() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/ppalancica`)
      .then((response) => response.json()
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError));
  }, []);

  if (loading) { return <h1>Loading...</h1> }
  if (error) { return <pre>JSON.stringify(error)</pre> }
  if (!data) { return null; }

  return (
    // <pre>{JSON.stringify(data, null, 2)}</pre>
    <GithubUser
      name={data.name}
      location={data.location}
      avatar={data.avatar_url}
    />
  );
}

// Asynchronous React
// Fteching data with GraphQL
// https://snowtooth.moonhighway.com/
/*
query {
  allLifts {
    name
    elevationGain
    status
  }
}
*/
const query = `
query {
  allLifts {
    name
    elevationGain
    status
  }
}
`;

const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};

function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{elevationGain} {status}</p>
    </div>
  );
}

function App_v10() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://snowtooth.moonhighway.com/`, opts)
      .then((response) => response.json()
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError));
  }, []);

  if (loading) { return <h1>Loading...</h1> }
  if (error) { return <pre>JSON.stringify(error)</pre> }
  if (!data) { return null; }

  return (
    <div>{data.data.allLifts.map((lift) => (
      <Lift name={lift.name} elevationGain={lift.elevationGain} status={lift.status} />
    ))}</div>
  );
}

// Asynchronous React
// Working with render props
// (use functions to display the right data at the right time)

// const tahoe_peaks = [];
const tahoe_peaks = [
  { name: "Freel", elevation: 10891 },
  { name: "Monument", elevation: 10067 },
  { name: "Pyramid", elevation: 9983 },
  { name: "Tallac", elevation: 9735 }
];

function List({ data, renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>
          {renderItem(item)}
        </li>
      ))}
    </ul>);
}

function App_v11() {
  return (
    <List
      data={tahoe_peaks}
      renderEmpty={<p>This list is empty</p>}
      renderItem={(item) => (
        <>
          {item.name} - {item.elevation} ft.
        </>
      )}
    />
  );
}

// React Router
// https://reactrouter.com/
// npm install react-router-dom@6

function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About Us</h1>
      <Outlet />
    </div>
  );
}

export function History() {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Contact Us</h1>
    </div>
  );
}

export function App() {
  return <Home />
  // return (
  //   <h1>App</h1>
  // );
}

// export default App;
