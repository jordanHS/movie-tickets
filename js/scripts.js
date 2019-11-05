
// var time = $('#movieTime').val();

MovieInfo.prototype.ticketPrice = function() {
  if(age == 'Under 13' && rated == 'R'){
     alert('You are not old enough to see this film! Choose another.')
  } else if(age == 'Under 13' && (rated == 'G' || "PG-13")) {
    return 'The price for children is always $5.'
  } else if(time == 'Before 4 PM'){
    return 'Your ticket is a matinee. It will cost you $5.' ;
  } else {
    return 'Your ticket is the normal evening price of $10.'
  }
}




function MovieInfo(movieTitle, movieTime, ageGroup, movieRating) {
  this.movieTitle = movieTitle,
  this.movieTime = movieTime,
  this.ageGroup = ageGroup,
  this.movieRating = movieRating
}
// // MovieInfo.prototype.movieTicket = function() {
// //   return this.movieTitle + " " + this.movieTime + " " + this.ageGroup;
// }

var movieTicket = new MovieInfo();
var time;
var age;
var rated;
$(document).ready(function() {
  $("form#tickets").submit(function(event){
    event.preventDefault();
    var title = $('input#movieTitle').val();
   time = $('#movieTime').val();
     age = $('#ageGroup').val();
   rated = $('#rating').val();
    var movie = new MovieInfo(title, time, age, rated);
    console.log(movie);
    console.log(age)
    $('#result').text(movie.ticketPrice);
  });
});
