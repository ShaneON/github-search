import Component from '@ember/component';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Component.extend({

  tagName: '',
  repos: null,
  languageFilterSelectedOption: 'All',
  languageFilterOptions: computed( function () {
    let languageSet = new Set();
    let repos = this.repos;
    repos.forEach((repo) => {
      if(repo.language) {
        languageSet.add(repo.language);
      }
    })
    let languages = Array.from(languageSet);
    languages.push('All')
    return languages;
  }),
  filter: computed('repos.@each', 'languageFilterSelectedOption', function () {
    let repos = this.repos;
    if (this.languageFilterSelectedOption === 'All') {
      return repos;
    }
    return repos.filterBy('language', this.languageFilterSelectedOption);
  }),

  actions: {
    languageSelected(language) {
      this.set('languageFilterSelectedOption', language);
    }
  }
});
