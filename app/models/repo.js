import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  link: DS.attr('string'),
  branchUrl: DS.attr('string'),
  branches: DS.attr(),
  language: DS.attr('string'),
  isPrivate: DS.attr('boolean'),
  username: DS.attr('string')
});
