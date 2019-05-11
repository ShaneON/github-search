import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': 'token 85c12bb9175efb454e43467a1829fecf40789822'
  },

  urlForFindRecord(id, modelName) {
    return `https://api.github.com/users/${id}`;
  },
});
