import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import rootComponent from './root.component.js';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent,
  domElementGetter
});

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];

function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('auth');
  if (!el) {
    el = document.createElement('auth');
    el.id = 'auth';
    document.body.appendChild(el);
  }

  return el;
}
