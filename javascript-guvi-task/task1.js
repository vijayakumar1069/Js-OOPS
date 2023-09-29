class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  
  function getPG(movieArray) {
    return movieArray.filter(movie => movie.rating === "PG");
  }
  
  // Example usage:
  
  // Create an instance of Movie
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  // Create an array of Movie instances
  const movieArray = [
    new Movie("Movie 1", "Studio A", "PG"),
    new Movie("Movie 2", "Studio B", "PG-13"),
    new Movie("Movie 3", "Studio C", "R"),
    new Movie("Movie 3", "Studio C", "PG"),
    casinoRoyale,
  ];
  
  // Get an array of movies with a rating of "PG"
  const pgMovies = getPG(movieArray);
  
  console.log(pgMovies); // This will print an array with movies having a rating of "PG"
  