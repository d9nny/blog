'use strict';

angular.module('blogApp.auth', ['blogApp.constants', 'blogApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
