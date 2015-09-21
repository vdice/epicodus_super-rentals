import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var allCities = this.store.findAll('city');
    return allCities;
  },
  actions: {
    save3(params) {
      var newCity = this.store.createRecord('city', params);
      newCity.save()
        .catch(e => {
          console.log(e.errors);
        });
      this.transitionTo('cities');
    },
    destroyCity(city) {
      city.destroyRecord();
      this.transitionTo('cities');
    }
  }
});
