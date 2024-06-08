import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './public-path.js'

let root
function render(props) {
  const { container } = props
  const dom = container ? container.querySelector('#root') : document.getElementById('root')
  root = ReactDOM.createRoot(dom);
  root.render(
    <App />
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {

}

export async function mount(props) {
  render(props)
}

export async function unmount() {
  root.unmount()
}