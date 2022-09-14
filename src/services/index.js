

export class BookService  {
  #data = [
    {
        id: 1,
        title: "Production-Ready Microservices",
        author: "Susan J. Fowler",
        price: 32,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"
    },
    {
        id: 2,
        title: "Harry Potter and the philosopher's stone",
        author: "J. K. Rowling",
        price: 45,
        coverImage: "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_.jpg"
    },
    {
        id: 3,
        title: "All good people are here: A Novel",
        author: "Elchin Safarli",
        price: 22,
        coverImage: "https://crimejunkiepodcast.com/wp-content/uploads/2022/08/All-Good-People-Here-Book.jpg"

    }
  ]

  getBooks = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(Math.random() > 0.75){
            reject(new Error("Something gone wrong") )
          }
          else{
            resolve(this.#data);
          }
        }, 1500);
    });
  }

  getBook = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.#data.find((el) => el.id === id))
      }, 2000)
    })
  }
}

export default BookService;