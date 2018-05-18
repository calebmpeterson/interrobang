$(function () {
  var interval = 90;

  var examples = [
    '!amazon mechanical keyboards',
    '!stackoverflow JavaScript testing',
    '!github react'
  ];

  var explanations = [
    'Search the entire Amazon.com catalog',
    'Find answers to your programming questions on StackOverflow.com',
    'Directly search GitHub.com repositories'
  ];

  var exampleIndex = 0;

  var $omnibar = $('.omnibar');
  var $searchInput = $('.search-input');

  function tick() {
    var searchQuery = $searchInput.val();

    if (examples[exampleIndex].length === searchQuery.length) {
      $omnibar
        .popover({
          placement: 'bottom',
          content: explanations[exampleIndex]
        })
        .popover('show');

      setTimeout(function () {
        exampleIndex = (exampleIndex + 1) % examples.length;

        $omnibar
          .popover('hide')
          .popover('dispose');
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

  $('a[href="#"]').on('click', function (event) {
    event.preventDefault();
  });

  $('.smooth-scroll').on('click', function (event) {
    event.preventDefault();
    var target = $(this).attr('href');
    document.querySelector(target).scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  });
});
