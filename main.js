(function(angular) {
    'use strict';

    angular.module('new-theme', ['theme'])
    .filter('prettifyIsoDate', function() {
        return function(input) {
            return moment(input).format('HH:mm');
        };
    });

})(angular);
