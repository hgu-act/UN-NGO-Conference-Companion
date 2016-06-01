'use strict';

/**
 * @ngdoc service
 * @name ngoConferenceCompanionApp.resource
 * @description
 * # resource
 * Factory in the ngoConferenceCompanionApp.
 */
angular.module('ngoConferenceCompanionApp')
  .factory('resource', function ($cacheFactory, $resource) {
    var notice = $resource('http://52.78.1.73:3000/notice/:id', {}, {
      get: {cache: true, method: 'get'},
      query: {cache: true, method: 'get', isArray:true}
    });
    var service = {
      notice: notice
    };
    return service;
  });
