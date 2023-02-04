import axios from "axios";
import { IMovie } from "../models";

export async function getMovies() {
    try {
      return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a53249c1f434a6defe03d88903ea45ac&language=en-US&page=1').then( response => response.data);
   
    } catch (err) {
     console.error(err);
    }
   }