define([
    'jquery',
    'underscore',
    'ko'
], function ($, _, ko) {
    'use strict';

    var brands = [{
        "city":"Odesa",
        "name":"Puma"
    }, {
        "city":"Lviv",
        "name":"Nike"
    }, {
        "city":"Kyiv",
        "name":"2XU"
    }, {
        "city":"Dnipro",
        "name":"2XU"
    }, {
        "city":"Kyiv",
        "name":"New Balance"
    },{
        "city":"Kyiv",
        "name":"Adidas"
    },{
        "city":"Dnipro",
        "name":"Adidas"
    },{
        "city":"Kyiv",
        "name":"Adidas"
    },{
        "city":"Lviv",
        "name":"Puma"
    }];

    var filters = [
        "All",
        "Lviv",
        "Kyiv",
        "Odesa",
        "Dnipro"
    ];

    return {
        brands: ko.observableArray(brands),
        filters: ko.observable(filters),
        selectedCity: ko.observable(''),
        queryBrandName: ko.observable(''),
        filteredList: ko.observableArray([]),
    };
});
