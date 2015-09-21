import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },
    appendInput: function() {
      $('#attractions-div').append('<input type="text" class="attractions"></input>');
    },

    save1() {
      var params = {
        name: this.get('name'),
        attractions: [],
        image: this.get('image'),
      };
      $('.attractions').each(function() {
        params.attractions.push($(this).val());
      }),
      this.set('addNewCity', false),
      this.sendAction('save2', params);
    }
  }
});
