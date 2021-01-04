$(document).ready(function(){
  $('[data-toggle="popover"]').popover({
         //trigger: 'focus',
     trigger: 'hover',
         html: true,
         content: function () {
       return '<img class="img-fluid" src="'+$(this).data('img') + '" />';
         },
         title: 'Toolbox'
   }) 
});