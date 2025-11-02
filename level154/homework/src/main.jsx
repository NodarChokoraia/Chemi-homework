import React from "react";
import { createRoot } from 'react-dom/client';
let container = document.getElementById('root');
let root = createRoot(container)
root.render(
  <>
    <p>hello</p>
    <h1>hello</h1>
    <button>click me</button>
    <a href="#">dont click me</a>
  </>
)