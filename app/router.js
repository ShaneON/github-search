import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('org', function() {
    this.route('show', function() {
      this.route('repos');
    });
  });
});

export default Router;
