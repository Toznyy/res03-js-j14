import { User } from './classes/User.js';
import { Book } from './classes/Book.js';

window.addEventListener("DOMContentLoaded", function() {

    let book1 = new Book("book1", "Le Book1", "Victor Bookin", 2018, 400, "C'est l'histoire de la vie de Victor Bookin", "https://www.buzzwebzine.fr/wp-content/uploads/2021/04/pieces-jeu-echecs-1024x576.jpg");
    let book2 = new Book("book2", "Le Book2", "David Bookde", 2020, 3, "C'est l'histoire de David qui joue au ping-pong", "https://media.istockphoto.com/id/502189498/fr/photo/balle-et-batte-de-tennis-de-table.jpg?s=612x612&w=0&k=20&c=ixhR2ZOZq2qX3ObflOLbkatMTNxlEzMVIWhuDC4doMY=");
    let book3 = new Book("book3", "Le Book3", "Sébastien Booktroi", 2012, 69, "C'est l'histoire de Seb qui vend des ustensiles de cuisine";"https://www.maisonae.fr/wp-content/uploads/SEB.jpg");
};