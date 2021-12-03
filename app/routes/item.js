import Route from '@ember/routing/route';
// import { products } from '../data/products';
import { inject as service } from '@ember/service';

export default class ItemRoute extends Route {
  @service store;

  async model(params) {
    const { item_id } = params;
    const data = await this.store.findAll('product');
    return data.find((obj) => obj.id === item_id);
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.color = model.colors[0].color;
  }
}
