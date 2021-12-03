import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductDetailComponent extends Component {
  @service shoppingCart;

  @action
  addToCart() {
    const { name, color, colors, price } = this.args;
    this.shoppingCart.addItem({
      name,
      color,
      image: colors.find((colorInfo) => colorInfo.color === color).image,
      price: price.current,
    });
  }
}
