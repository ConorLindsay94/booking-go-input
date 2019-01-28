import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './styles/main.scss';
import svgxhr from '../node_modules/webpack-svgstore-plugin/src/helpers/svgxhr';

const __svg__ = {
  path: './img/svg/**/*.svg',
  name: './img/svg-sprite.svg',
};

svgxhr(__svg__);

ReactDOM.render(<App />, document.getElementById('root'));
