$(function () {
  var $searchEngineUrl = $('#search-engine-url');
  var gist = $searchEngineUrl.data('gist');

  $searchEngineUrl.val(window.location.protocol + '//' + window.location.host + '/' + gist + '/search?query=%s');

  $('#copy-search-engine-url')
    .on('click', function (event) {
      $searchEngineUrl.select();
      try {
        document.execCommand('copy');
      }
      catch (error) {
        // Swallow the error
      }
    });

});
