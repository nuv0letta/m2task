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

        /**
         * Gets filtered list
         */

        getFilteredList: function () {
            var self = this;

            ko.computed(function handleChange() {
                var query = self.queryBrandName();
                var city = self.selectedCity();
                var brandList = self.brands();

                if (!city || city === "All") {

                    self.filteredList(ko.utils.arrayFilter(brandList, function(item) {
                        return ko.utils.stringStartsWith(item.name.toLowerCase(), query.toLowerCase());
                    }));

                } else {

                    self.filteredList(ko.utils.arrayFilter(brandList, function(item) {
                        return ko.utils.stringStartsWith(item.city.toLowerCase(), city.toLowerCase()) &&
                            ko.utils.stringStartsWith(item.name.toLowerCase(), query.toLowerCase());
                    }));

                }
            });
        }
    };
});
