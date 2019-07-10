import Dbfake from "../src/infraestructure/Dbfake";
import Recommender from '../src/application/BasicRecommender';
import Book from '../src/domain/Book';

let book = new Book();

describe("Testing our data bases", () => {
  it("Adding a new user", () => {
    const db = new Dbfake();
    expect(db.addUser("sergio@gmail.com","sergiopassword")).toContainEqual({email:"sergio@gmail.com",passw:"sergiopassword",gustos:{}});
  });
});

describe("Testing our Recommender", () => {
  it("Updating likes from user", () => {
    let recommender = new Recommender();
    const likes = [{like:'Thiller',pond: 1.0},{like:'Aventura',pond:1.0},{like:'Terror',pond:1.0}];
    const newLike = ['Thiller'];
    expect(recommender.updateLikes(likes,book,newlike)).toContainEqual([{like:'Thiller',pond: 3.0},{like:'Terror',pond:1.5},{like:'Aventura',pond:1.0}]);
  });
});
