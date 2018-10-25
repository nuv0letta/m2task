define([
    'jquery',
    'ko',
    'underscore',
    'uiComponent',
    'Vendor_Mymodule/js/model/brands/list',
    'Vendor_Mymodule/js/action/brands/filtered-list-get'
], function ($, ko, _, Component, brandslist, getFilteredList) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Vendor_Mymodule/brands/list'
        },
        brands: brandslist.brands,
        filters: brandslist.filters,
        selectedCity: brandslist.selectedCity,
        queryBrandName: brandslist.queryBrandName,
        filteredList: brandslist.filteredList,

        initialize: function () {
            this._super();

            this.getFilteredList();
            return this;
        },

        getFilteredList: function () {
            getFilteredList.getFilteredList();
        }
    });
});
