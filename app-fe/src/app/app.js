// Active Item Menu
$(document).on('click', '.sidebar-link', function () {
  $('.sidebar-link').removeClass('active-link')
  $('.sidebar-sublink').removeClass('active-link')
  $('.collapse').removeClass('show')
  $(this).addClass('active-link')
});