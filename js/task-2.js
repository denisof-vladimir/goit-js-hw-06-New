console.log("task-2");
class Storage {
    #items;
  constructor(params) {
      this.#items = params;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    return this.#items.push(newItem);
  }

  removeItem(value){

    return this.#items.filter(item => item !=  value);   
  }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


