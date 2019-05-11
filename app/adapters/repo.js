import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  headers: {
    'Accept': 'application/vnd.github.v3+json'
  },

  urlForQuery(query, modelName) {
    let orgName = query.orgName;
    delete query.orgName;
    return `https://api.github.com/users/${orgName}/repos`;
  },
});
