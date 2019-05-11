import Component from '@ember/component';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Component.extend({

  tagName: '',
  repo: null,
  shouldShowBranches: false,
  branches: alias('repo.branches'),
  name: alias('repo.name'),
  language: alias('repo.language'),

  actions: {
    itemClicked() {
      this.toggleProperty('shouldShowBranches');
    }
  }
});
