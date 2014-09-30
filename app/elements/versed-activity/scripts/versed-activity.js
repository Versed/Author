'use strict';

var filters = {
  'completion': '',
  'levelUp': '',
  'newSkill': '',
  'generic': ''
};

Polymer({
  filterType: function(value) {
    if (filters[value]) {
      return filters[value];
    }

    return filters.generic;
  }
});
