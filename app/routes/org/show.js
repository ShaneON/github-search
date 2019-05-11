import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.find('org', params.org_id).then((org) => {
      this.transitionTo('org.show.repos');
      return org;
    })
    .catch((error) => {
      console.log(error)
      if (error.errors[0].status === '404') {
        alert('This organisation may not exist, please try again');
        this.replaceWith('org');
      }
    });
  }
});
