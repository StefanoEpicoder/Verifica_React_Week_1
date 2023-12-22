import { Component } from "react";

import { Spinner } from "react-bootstrap";

class Movies extends Component {
  state = {
    Search: [],
    isLoading: true,
  };
  fetchFilm = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=4c350795&s=" + this.props.film);
      if (response.ok) {
        const data = await response.json();
        this.setState({
          Search: data.Search,
          isLoading: false,
        });
      }
    } catch (error) {
      console.log("error");
    }
  };
  componentDidMount() {
    this.fetchFilm();
  }
  render() {
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center mt-5 mx-4">
        {this.state.isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="success" />
          </div>
        )}
        {this.state.Search.filter((film) => film.Type === "movie").map((film) => (
          <div className="col mb-2 px-1">
            <img className="img-fluid" src={film.Poster} alt={film.Title} />
          </div>
        ))}
      </div>
    );
  }
}
export default Movies;
