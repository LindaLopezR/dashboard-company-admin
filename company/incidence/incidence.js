import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './incidence.html';

Template.incidence.rendered = function() {

  //- SPARKLINE BAR - Create a inline charts with spark line
  $('.sparkbar').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type: 'bar',
      height: $this.data('height') ? $this.data('height') : '30',
      barColor: $this.data('color')
    });
  });

  /* TABLES */
  $('#incidence').DataTable({
    "paging": true,
    "ordering": true,
    "info": false,
    "autoWidth": false
  });
};

Template.incidence.helpers({
  showTableIncidences() {
    return true;
  },
  getIncidence() {
    return [{}, {}];
  }

});

Template.incidence.events({
  //VIEW
  'click #btnViewIncidence'(e) {
    e.preventDefault();
    // let id = $(e.target).closest('a').data('id');
    // Router.go('viewIncidence',{id:id});
    // Boton redirecciona a: /viewIncidence / Aún no funciona el enlace
  },
  //EDIT
  'click #btnEditIncidence'(e) {
    e.preventDefault();
    // let id = $(e.target).closest('a').data('id');
    // Router.go('editIncidence',{id:id});
    //Boton redirecciona a: /editIncidence / Aún no funciona el enlace
  },

  'click #deleteIncidence'(e) {
    e.preventDefault();
    let id = $(e.target).closest('a').data('id');
    console.log(id);

    Session.set('OPTIONS_MESSAGE','¿Desea eliminar esta incidencia?');

    $('#modalOptions').modal({
      closable  : false,
      onDeny() {

      },

      onApprove() {

        Meteor.call('deleteCategory',id, function(error, result){
          if(error){
            Session.set('ERROR_MESSAGE', 'Error en eliminar incidencia');
            $('#modalError').modal('show');
          }else if(result){
            Session.set('SUCCESS_MESSAGE', '¡Incidencia eliminada!');
            $('#modalSuccess').modal('show');
          }
        });
      }
    }).modal('show');
  }
});
