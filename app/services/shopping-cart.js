import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class CartItem {
  @tracked count = 0;

  name;
  color;
  image;
  price;

  constructor(item) {
    this.id = item.id;
    this.name = item.name;
    this.price = item.price;
    this.image = item.image;
    this.color = item.color;
    this.count = item.count;
  }
}

export default class ShoppingCartService extends Service {
  @tracked itemList = [];

  addItem(item) {
    const existingItem = this.itemList.find((obj) => {
      return obj.name === item.name && obj.color === item.color;
    });

    if (existingItem) {
      existingItem.count += 1;
    } else {
      this.itemList = [
        ...this.itemList,
        new CartItem({
          ...item,
          count: 1,
        }),
      ];
    }
  }
}
