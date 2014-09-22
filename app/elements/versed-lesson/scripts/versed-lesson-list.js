'use strict';

Polymer('versed-lesson-list', {
  created: function() {
    this.lessons = [{
      title: 'An Adventure Abroad',
      difficulty: 1
    }, {
      title: 'Getting Down To It',
      difficulty: 2
    }, {
      title: 'Learning A Better Way',
      difficulty: 3
    }];
  }
});
