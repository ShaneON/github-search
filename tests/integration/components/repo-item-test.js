import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | repo-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    let repo = {
      name: 'ShaneRepo',
      language: 'javascript',
      branches: [{
          name: 'branchy'
        }]
    };
    this.set('repo', repo);

    await render(hbs`{{repo-item repo=repo}}`);

    assert.equal(this.$('[data-test-repo-name]').text().trim(), 'ShaneRepo');
    assert.equal(this.$('[data-test-language]').text().trim(), 'javascript');
    assert.equal(this.$('[data-test-num-branches]').text().trim(), 'Branches: 1');

    // await this.$('[data-test-item]').click();

    // await pauseTest();

    // assert.equal(this.$('[data-test-branch-name]').text().trim(), 'branchy');

  });
});
