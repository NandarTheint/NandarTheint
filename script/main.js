'use strict';

$(function() {
  AOS.init();
  console.log('OK');
});

function scrollToTargetElement(elementId) {
  $('html, body').animate({
    scrollTop: $(`#${elementId}`).offset().top
  }, 500);
}