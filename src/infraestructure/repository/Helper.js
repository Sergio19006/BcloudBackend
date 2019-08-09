import mongoose from "mongoose";


export class Helper {

  static connectDatabase() {
    let uri = "mongodb://mongo:27017/Bookcloud";
    mongoose.connect(uri, { useNewUrlParser: true });
    mongoose.set("useFindAndModify", false);
  }

  static tagged(text) {
    text = text.toLowerCase();
    text = text.trim();
    text = text.replace(/\s/g, "-");
    return text;
  }

  static deleteDuplicatesBooks(books) {
    let booksStringify = [];
    for (const genre of books) {
      for (const book of genre) {
        if (!booksStringify.includes(JSON.stringify(book))) {
          booksStringify.push(JSON.stringify(book));
        }
      }
    }

    books = [];

    for (const i of booksStringify) {
      books.push(JSON.parse(i));
    }
    return books;
  }

  static resize(recommendedBooks) {
    let response = [];
    for (let i = 0; i < 7; i++) {
      response.push(recommendedBooks[i]);
    }
    return response;
  }
}
