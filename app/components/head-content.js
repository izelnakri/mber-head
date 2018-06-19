import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../templates/head';

const headLayoutInModuleUnification = Object.keys(requirejs.entries)
  .find((entry) => entry.endsWith('/src/ui/routes/application/head'));

export default Component.extend({
  tagName: '',
  model: service('head-data'),
  layout: headLayoutInModuleUnification ? require(headLayoutInModuleUnification).default : layout
});
