//= require jquery
//= require jquery_ujs
//= require ahoy
//= require Chart.bundle
//= require chartkick
//= require twitter/bootstrap
//= require bootstrap.js
//= require chosen-jquery
//= require gmaps/google
//= require sb-admin-2
//= require underscore
//= require turbolinks
//= require toastr
//= reqiure self
//= require react
//= require react_ujs
//= require components
//= require_tree .


 // toastr.options = {
 //  "closeButton": true,
 //  "debug": false,
 //  "newestOnTop": false,
 //  "progressBar": false,
 //  "positionClass": "toast-top-right",
 //  "preventDuplicates": false,
 //  "onclick": null,
 //  "showDuration": "300",
 //  "hideDuration": "1000",
 //  "timeOut": "2000",
 //  "extendedTimeOut": "1000",
 //  "showEasing": "swing",
 //  "hideEasing": "linear",
 //  "showMethod": "fadeIn",
 //  "hideMethod": "fadeOut"
 //  };

//  $(document).ready(function () {
//   $('.navbar .dropdown').hover(function () {
//         $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
//     }, function () {
//         $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105);
//     });
// });


// $(document).ready(function () {
//   var trigger = $('.hamburger'),
//       overlay = $('.overlay'),
//      isClosed = false;

//     trigger.click(function () {
//       hamburger_cross();
//     });

//     function hamburger_cross() {

//       if (isClosed === true) {
//         overlay.hide();
//         trigger.removeClass('is-open');
//         trigger.addClass('is-closed');
//         isClosed = false;
//       } else {
//         overlay.show();
//         trigger.removeClass('is-closed');
//         trigger.addClass('is-open');
//         isClosed = true;
//       }
//   }

//   $('[data-toggle="offcanvas"]').click(function () {
//         $('#wrapper').toggleClass('toggled');
//   });
// });
// $(function () {
//     var iframe = $('.main-content iframe')[0],
//         menu_links = $('.items li a'),
//         selected_link,
//         href;


//     $(window).on('hashchange', function() {

//         if(window.location.hash){
//             href = window.location.hash.substring(1);
//             selected_link = $('a[href$="'+href+'"]');

//             if(selected_link.length){
//                 iframe.contentWindow.location.replace(href + '.html');

//                 menu_links.removeClass('active');
//                 selected_link.addClass('active');
//             }
//         }
//         else{
//             iframe.contentWindow.location.replace('Footer-with-logo.html');
//             menu_links.removeClass('active');
//             $(menu_links[0]).addClass('active');
//         }

//     });


//     if(window.location.hash){
//         $(window).trigger('hashchange');
//     }


//     menu_links.on('click', function (e) {
//         e.preventDefault();

//         window.location.hash = $(this).attr('href');
//     });


//     $('#template-select').on('change', function (e) {
//         e.preventDefault();

//         window.location.hash = $(this).find(':selected').data('href');
//     });

// });
  























