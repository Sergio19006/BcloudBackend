import { Db } from "../../domain/Db";
import { Book } from "../../domain/Book";
import { compareSync, hashSync } from "bcrypt";
import { sign } from "jsonwebtoken";
import UserData from "../models/UserModel";
import BookData from "../models/BookModel";
import { Helper } from "../databases/Helper";

/**
 * en este archivo se inseeta toda la lógica de la base de datos.
 */
export class DbMongoBook extends Db {
  async existBook(titulo_) {
    const libro = await BookData.findOne({ titulo: titulo_ });
    if (libro != null) return true;
    else return false;
  }
  async existTag(tag_) {
    const libro = await BookData.findOne({ tag: tag_ });
    if (libro != null) return true;
    else return false;
  }

  async addBook(body, image, epub) {
    console.log(image);
    console.log(body);
    const data = new BookData({
      titulo: body.title,
      genero: body.gener,
      autor: body.author,
      fechaPublicacion: body.publicationDate,
      descripcion: body.description,
      valoracion: body.rating,
      imageUrl: `https://bookcloud.me/images/${image}`,
      ebookUrl: `https://bookcloud.me/epub/${epub}`,
      price: body.price
    });

    data.save();
  }

  async addBookManu(body) {
    const str = Helper.tagged(body.titulo);
    console.log("ya volví");
    console.log(str);
    const data = new BookData({
      titulo: body.titulo,
      autor: body.autor,
      tag: str
    });
    data.save();
  }
  async delete(paramTag) {
    BookData.deleteOne({ tag: paramTag }, function(err) {});
  }
}
