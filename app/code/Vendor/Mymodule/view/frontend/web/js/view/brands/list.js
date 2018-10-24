define([
    'jquery',
    'ko',
    'underscore',
    'uiComponent',
    'Vendor_Mymodule/js/model/brands/list'
], function ($, ko, _, Component, brandslist) {
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
            brandslist.getFilteredList();
        }
    });
});
