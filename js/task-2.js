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
    const newArrya=this.#items.filter(item => item !=  value); 
    this.#items = newArrya;
    return this.#items;   
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


