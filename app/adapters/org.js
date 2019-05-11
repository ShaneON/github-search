import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  headers: {
    'Accept': 'application/vnd.github.v3+json'
  },

  urlForFindRecord(id, modelName) {
    return `https://api.github.com/users/${id}`;
  },
});
