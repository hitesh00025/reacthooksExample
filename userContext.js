import React, { useState, useContext, createContext } from "react";

// Create a context
const UserContext = createContext();

// Great-grandchild component
function GreatGrandchild() {
  const username = useContext(UserContext); // Access the context value
  return <h1>Hello, {username}!</h1>;
}

// Grandchild component
function Grandchild() {
  return (
    <div>
      <h2>This is the Grandchild Component</h2>
      <GreatGrandchild />
    </div>
  );
}

// Child component
function Child() {
  return (
    <div>
      <h2>This is the Child Component</h2>
      <Grandchild />
    </div>
  );
}

// Parent component
function ParentComponent() {
  const [username, setUsername] = useState("Alice");

  return (
    <UserContext.Provider value={username}>
      <h2>This is the Parent Component</h2>
      <Child />
    </UserContext.Provider>
  );
}

export default ParentComponent;
