'use strict';

Polymer('versed-menu', {
  created: function() {
    this.recentActivity = [{
      title: 'Completed Lesson',
      description: 'An Adventure Abroad',
      type: 'Lesson',
      date: Date.now(),
      url: '/lessons/1'
    }, {
      title: 'Reached Level 2!',
      type: 'Level',
      date: Date.now(),
      url: '/profile'
    }, {
      title: 'Unlocked New Lesson',
      description: 'Under The Old Oak Tree',
      type: 'Unlock',
      date: Date.now(),
      url: '/lessons/4'
    }, {
      title: 'Three Day Streak!',
      type: 'Achievement',
      date: Date.now()
    }];
  }
});
