define([
    'jquery',
    'underscore',
    'ko',
    'mage/translate',
    'Vendor_Mymodule/js/model/brands/list'
], function ($, _, ko, $t, brandslist) {
    'use strict';

    return {
        brands: brandslist.brands,
        selectedCity: brandslist.selectedCity,
        queryBrandName: brandslist.queryBrandName,
        filteredList: brandslist.filteredList,

        /**
         * Gets filtered list
         */

        getFilteredList: function () {

            ko.computed(function handleChange() {

                    this.filteredList(ko.utils.arrayFilter(this.brands(), function(item) {

                        if (!this.selectedCity() || this.selectedCity() === $t('All')) {

                            return ko.utils.stringStartsWith(item.name.toLowerCase(), this.queryBrandName().toLowerCase());

                        } else {

                            return ko.utils.stringStartsWith(item.city.toLowerCase(), this.selectedCity().toLowerCase()) &&
                                ko.utils.stringStartsWith(item.name.toLowerCase(), this.queryBrandName().toLowerCase());

                        }

                    }.bind(this)));

            }.bind(this));
        }
    };
});
