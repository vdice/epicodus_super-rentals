import Ember from 'ember';

// TODO could use generic tile here and rental-tile?

export default Ember.Component.extend({
  isImageShowing: false,
  areAttractionsShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    delete: function(city) {
      if (confirm('Are you sure you want to delete this city?')) {
        this.sendAction('destroyCity', city);
      }
    },
    showAttractions: function() {
      this.set('areAttractionsShowing', true);
    },
    hideAttractions: function() {
      this.set('areAttractionsShowing', false);
    }
  }
});
