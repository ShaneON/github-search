import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    searchOrg(orgName) {
      this.transitionTo('org.show', orgName);
    }
  },
});
