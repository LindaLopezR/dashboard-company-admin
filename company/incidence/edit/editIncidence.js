import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './editIncidence.html';

Template.editIncidence.rendered = function() {

  $('#loadingEditIncidence').hide();

	//Date picker
  $('#dateStart').datepicker({
    autoclose: true
  });

  $('#dateEnd').datepicker({
    autoclose: true
  });

  //Timepicker
  $(".timeStart").timepicker({
    showInputs: false
  });

  $(".timeEnd").timepicker({
    showInputs: false
  });

  $('#formEditIncidence').form({
  	inline : true,
    on     : 'blur',
    fields: {
    	idCompany: {
            identifier  : 'idCompany',
            rules: [
                {
                  type   : 'empty',
                  prompt : 'Por favor introduce un ID'
                }
            ]
        },
        dateStart: {
            identifier  : 'dateStart',
            rules: [
                {
                  type   : 'empty',
                  prompt : 'Introduce una fecha de inicio'
                }
            ]
        },
        dateFinish: {
            identifier  : 'dateFinish',
            rules: [
                {
                  type   : 'empty',
                  prompt : 'Introduce una fecha de termino'
                }
            ]
        },
      	nameIncidence: {
            identifier  : 'nameIncidence',
            rules: [
                {
                  type   : 'empty',
                  prompt : 'Por favor introduce un nombre'
                }
            ]
        },
        descriptionIncidence: {
            identifier  : 'descriptionIncidence',
            rules: [
                {
                  type   : 'empty',
                  prompt : 'Por favor introduce una descripción'
                }
            ]
        },
    }
  })
;
};

Template.editIncidence.events({

  'submit #formEditIncidence'(e, template) {
    e.preventDefault();

    $('#loadingEditIncidence').show();

    let startDate  = $('#dateStart').val();
    let finishDate  = $('#dateEnd').val();

    if(startDate == finishDate){
      Session.set('ERROR_MESSAGE', 'Días inválidos, son iguales');
      $('#modalError').modal('show');
    }

    let startTime  = $('.timeStart').val();
    let finishTime  = $('.timeEnd').val();

    if(!startTime || !finishTime){
      Session.set('ERROR_MESSAGE', 'Hora inválida');
      $('#modalError').modal('show');
      return;
    }

    let schedule = {
      days  : {
        start  : Number(startDate),
        finish : Number(finishDate)
      },
      hours : {
        start  : startTime,
        finish : finishTime
      }
    };

    let incidence = {
      id         : template.data._id,
      idCompany  : $('input[name="idCompany"]').val(),
      schedule   : schedule,
      state      : {
        stateIncidence  : $('#stateIncidence').val(),
        prioriry        : $('#prioriry').val(),
        category        : $('#category').val(),
        assigned        : $('#user').val(),
      },
      name        : $('input[name="nameIncidence"]').val(),
      description : $('textarea[name="descriptionIncidence"]').val(),
    }

  },

  'click #btnCancelIncidence'(e) {
  	e.preventDefault();
    Router.go('companyDashboard');
  },
});
