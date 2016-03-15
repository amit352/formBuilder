var formBuilderEvents = function(opts, _helpers) {
  'use strict';

  var events = {};

  events.loaded = new Event('loaded');

  events.viewData = new Event('viewData');
  events.userDeclined = new Event('userDeclined');
  events.modalClosed = new Event('modalClosed');

  return events;
};