(function() {
    'use strict';
    var jlkApp = angular.module('jlkApp', ['ui.router', 'rzModule']);

    jlkApp
        .config(jlkConfig)
        .controller('jlkCtrl', jlkCtrl);

    jlkConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function jlkConfig($stateProvider, $urlRouterProvider) {
        var lang = getCookie('tp-lang') || 'en';

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'pages/home/home.html'
        }).state('contact', {
            url: '/contact',
            templateUrl: 'pages/contact/contact.html'
        }).state('aboutus', {
            url: '/aboutus',
            templateUrl: 'pages/aboutus/aboutus.html'
        });

    }

    jlkCtrl.$inject = ['$scope'];
    function jlkCtrl($scope) {
        var jlk = this;

        jlk.init           = init;
        jlk.openModal      = openModal;
        jlk.toggleLanguage = toggleLanguage;
        jlk.currentLanguage = getCookie('tp-lang') || 'en';

        // jlk.data      = {
        //     en: {},
        //     bm: {}
        // }
        // loadJSON('assets/fixture-en.json', function(response) {
        //     jlk.data.en = JSON.parse(response);
        // });
        // loadJSON('assets/fixture-bm.json', function(response) {
        //     jlk.data.bm = JSON.parse(response);
        // });
        // jlk.lang      = jlk.lang || 'en';

        $scope.slider = {
            value: 500,
            options: {
                floor: 500,
                ceil: 3000,
                step: 500
            }
        };

        function init() {
            var offsetValue = 0;
            // initializeSmoothScroll(offsetValue);
        }

        function openModal(id) {
            $('#' + id).modal('show');
        }

        function toggleLanguage(lang) {
            setCookie("tp-lang", lang, 3);
            location.reload();
        }
    }
})();