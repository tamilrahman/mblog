import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('index', {path: ''});
	this.route('contact', {path: 'contact'});
});

export default Router;
