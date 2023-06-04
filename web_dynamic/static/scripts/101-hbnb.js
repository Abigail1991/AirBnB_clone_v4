$(document).ready(function () {
  $('#toggle-reviews').click(function () {
    var status = $(this).attr('data-status');
    if (status === 'show') {
      // Fetch, parse, and display reviews
      fetchReviews();
      $(this).text('hide').attr('data-status', 'hide');
    } else {
      // Hide the reviews
      $(this).text('show').attr('data-status', 'show');
      $('.review').remove();
    }
  });
});

function fetchReviews() {
  // Simulated asynchronous fetch
  setTimeout(function () {
    var reviews = [
      { title: 'Review 1', content: 'review our services.' },
      { title: 'Review 2', content: 'review our amenities.' }
      // Add more reviews as needed
    ];

    displayReviews(reviews);
  }, 1000); // Simulated delay of 1 second
}

function displayReviews(reviews) {
  var reviewsContainer = $('#reviews-container');

  for (var i = 0; i < reviews.length; i++) {
    var review = reviews[i];
    var reviewElement = $('<div>').addClass('review');
    $('<h3>').text(review.title).appendTo(reviewElement);
    $('<p>').text(review.content).appendTo(reviewElement);
    reviewsContainer.append(reviewElement);
  }
}
