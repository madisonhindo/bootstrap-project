$(document).ready(() => {
  const $park = $('#park');
  const $water = $('#water');
  const $bike = $('#bike');
  const $soccer = $('#soccer');

  $('#park').on('click', () => {
    $('#park').fadeOut();
  });

  $('#water').on('click', () => {
    $('#water').fadeOut();
  });

  $('#bike').on('click', () => {
    $('#bike').fadeOut();
  });

  $('#soccer').on('click', () => {
    $('#soccer').fadeOut();
  });
});
