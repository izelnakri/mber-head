import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../src/ui/routes/application/head';

const headLayoutInModuleUnification = Object.keys(requirejs.entries)
  .find((entry) => entry.endsWith('/src/ui/routes/application/head'));

export default Component.extend({
  tagName: '',
  headData: service(),
  layout: headLayoutInModuleUnification ? require(headLayoutInModuleUnification).default : layout
});
