$(function () {
  var interval = 100;

  var examples = [
    '!amazon mechanical keyboards',
    '!stackoverflow JavaScript testing',
    '!github react'
  ];

  var explanations = [
    'Search the entire Amazon.com catalog directly',
    'Find answers to your programming questions on StackOverflow',
    'Directly search GitHub.com'
  ];

  var exampleIndex = 0;

  var $omnibar = $('.omnibar');
  var $searchInput = $('#search-input');

  function tick() {
    var searchQuery = $searchInput.val();

    console.log('tick', exampleIndex, searchQuery);

    if (examples[exampleIndex].length === searchQuery.length) {
      $omnibar
        .popover({
          placement: 'bottom',
          content: explanations[exampleIndex]
        })
        .popover('show');

      setTimeout(function () {
        exampleIndex = (exampleIndex + 1) % examples.length;
        $omnibar.popover('hide').popover('dispose');
        $searchInput.val('');
        setTimeout(tick, interval);
      }, 5000);

    }
    else {
      var nextChar = examples[exampleIndex].substr(searchQuery.length, 1);
      $searchInput.val(searchQuery + nextChar);
      setTimeout(tick, interval);
    }
  }

  setTimeout(tick, interval);
});
