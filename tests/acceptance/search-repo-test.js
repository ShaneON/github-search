import { module, test } from 'qunit';
import { visit, pauseTest, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | search repo', function(hooks) {
  setupApplicationTest(hooks);

  test('searching for a repo', async function(assert) {
    await visit('/org');

    fillIn('[data-test-input]', 'ShaneOn');

    await click('[data-test-search]');

    assert.ok('[data-test-item-id="3rdYearProject"]');
  });
});
