import Woowahan from 'woowahan';
import { MainView } from './views';

global.$ = global.jQuery = Woowahan.$;

const app = new Woowahan();

app.start({
  url: '/', view: MainView, container: '#app'
});