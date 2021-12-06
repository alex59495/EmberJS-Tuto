import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | product/detail', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('price', {
      original: 50,
      current: 30,
    });

    this.set('onChangeColor', (color) => {
      assert.equal(color, 'black', 'Color turned black');
    });

    this.set('colors', [{ color: 'red' }, { color: 'black' }]);
    await render(hbs`<Product::Detail 
      @price={{this.price}}
      @colors={{this.colors}}
      @onChangeColor={{this.onChangeColor}}
      @isDetails={{true}}
    />`);
    // await this.pauseTest();
    // assert.dom('del.small').hasText('$50.00');
    assert.dom('[data-test-original-price]').hasText('$50.00');
    assert.dom('[data-test-current-price]').hasText('$30.00');

    await click('[data-test-color="black"]');
  });
});
