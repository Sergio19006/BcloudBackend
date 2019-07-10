import { DbMongo } from "../databases/DbMongo";
const dataBase = new DbMongo("mongo");

export class UserController {
  constructor() {}

  async addUser(body) {
    const email = body.email;
    const passw = body.passw;
    const exist = await dataBase.existUser(email);
    if (exist) return({ message: "Ya existe este user" });
    else {
      dataBase.addUser(email,passw);
      return ({ message: "Ingresado con exito" });
    }
  }

  async loginUser(body){
    const email = body.email;
    const passw = body.passw;
    const token = await dataBase.findUser(email,passw);
    console.log(token);
    if(token != null)
      return({ token: token })
    else 
      return({message:"Error en el login. Email o contraseña no valida"})
  }

}
