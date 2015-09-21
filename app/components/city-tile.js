import Ember from 'ember';

// TODO could use generic tile here and rental-tile?

export default Ember.Component.extend({
  isImageShowing: false,
  areAttractionsShowing: false,
  editCityBool: false,
  actions: {
    editCityFormShow: function() {
      this.set('editCityBool', true);
    },
    editCityFormHide: function() {
      this.set('editCityBool', false);
    },
    appendInput: function() {
      $('.edit-attractions-div').append('<input type="text" class="edit-attractions"></input>');
    },
    editCity: function(city) {
      var params = {
        name: this.get('edit-name'),
        attractions: [],
        image: this.get('edit-image'),
      };
      $('.edit-attractions').each(function() {
        params.attractions.push($(this).val());
      })
      this.set('editCityBool', false),
      this.sendAction('editCity', city, params);
    },
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
