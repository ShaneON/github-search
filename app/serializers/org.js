import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    const newPayload = this._toNormalisedPayload(payload);
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  },

  normalizeQueryRecordResponse(store, primaryModelClass, payload, id, requestType) {
    const newPayload = this._toNormalisedPayload(payload);
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  },

  _toNormalisedPayload(payload) {
    return {
      org: {
        id: payload.id,
        name: payload.name,
        username: payload.login
      }
    };
  }
});
