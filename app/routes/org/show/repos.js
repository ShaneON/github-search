import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  ajax: service(),

  page: 1,

  setupController (controller, model) {
    controller.set('model', model);
    this._super(...arguments);
  },

  model () {
    return this._getRepos();
  },

  actions: {
    loadNextPage() {
      this.set('page', ++this.page);
      this.refresh();
    },

    loadPreviousPage() {
      if (this.page > 1) {
        this.set('page', --this.page);
        this.refresh();
      }
    }
  },

  _getRepos() {
    let org = this.modelFor('org.show');
    return this.store.query('repo', {
        orgName: org.username,
        page: this.page
    })
    .then((repos) => {
      let newRepos = repos.toArray();
      newRepos.forEach((repo) => {
        this.get('ajax').request(repo.branchUrl).then((branches) => {
          Ember.set(repo, 'branches', branches);
        })
        .catch((error) => {
          alert("There was an error in retrieving the branches")
        })
      });
      return newRepos;
    })
    .catch((error) => {
      console.log('error')
      console.log(error)
    })
  }
});
