import { Template } from 'meteor/templating';

import './viewIncidence.html';

Template.viewIncidence.events({

  'click #btnPrint'(e) {
  	e.preventDefault();
  	Router.go('printIncidence');
  }
});
