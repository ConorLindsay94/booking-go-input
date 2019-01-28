import './styles/main.scss';
import svgxhr from '../node_modules/webpack-svgstore-plugin/src/helpers/svgxhr';

const __svg__ = {
  path: './img/svg/**/*.svg',
  name: './img/svg-sprite.svg',
};

svgxhr(__svg__);
