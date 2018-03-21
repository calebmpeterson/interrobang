$(function () {
  $('.with-back-behavior')
    .on('click', function (e) {
      console.log('go back');
      e.preventDefault();
      window.history && window.history.go(-1);
    });
});
