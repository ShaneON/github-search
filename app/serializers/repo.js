import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    const repos = payload.map(t => this._toNormalisedPayload(t));
    const newPayload = { repos: repos }
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  },

  _toNormalisedPayload(payload) {
    return {
      id: payload.id,
      name: payload.name,
      link: payload.html_url,
      language: payload.language,
      isPrivate: payload.private,
      branchUrl: payload.branches_url.split('{')[0],
      username: payload.owner.login
    };
  }
});
