import { Template } from 'meteor/templating';

import moment from 'moment';

import './companyDashboard.html';
import './statistics/reports/statisticsReport.js';
import './statistics/map/mapCompany.js';
import './incidence/incidence.js';

Template.companyDashboard.rendered = function() {

  $('#loadingPass').hide();

};

Template.companyDashboard.helpers({
  // DETAILS
  installationDate(dateInst) {
    return moment(dateInst).format('MMM-DD-YYYY');
  },
  getTotalUsers() {
    return 200;
  },
  getHoursTotal(hrsTotal) {
    return moment(hrsTotal).format('hh:mm');;
  },
  getIncidenceAnswered() {
    return 466;
  },
  getIncidenceNoAnswered() {
    return 66;
  },
  //STADISTICS MAP
  //VISITS TOTALES
  getVisitsGraphics() {
    return 90 + ',' + 70 + ',' + 90 + ',' + 70+ ',' + 75 + ',' + 80 + ',' + 70;
  },
  getVisitsTotal() {
    return 890;
  },
  //ONLINE
  getOnlineGraphics() {
    return 10 + ',' + 60 + ',' + 9 + ',' + 43 + ',' + 56 + ',' + 18 + ',' + 32;
  },
  getOnlineTotal() {
    return 34;
  },
  //EXISTENTS
  getExistsGraphics() {
    return 35 + ',' + 30 + ',' + 20 + ',' + 43 + ',' + 40 + ',' + 28 + ',' + 32;
  },
  getExistsTotal() {
    return 34;
  },
});

Template.companyDashboard.events({
  //NEW INCIDENCE
  'click #btnIncidence'(e) {
    e.preventDefault();
    Router.go('newIncidence');
  },

});
