import Route from '@ember/routing/route';
// import { products } from '../data/products';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    return this.store.findAll('product');
  }
}
