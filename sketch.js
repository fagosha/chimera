class Chimera {
  // special function that takes incoming parameters
  constructor(species="Chimera", name="Chimmy", language="YE OLD ENGLISH") {
    //personal properties
    this.favouriteSnack = fleshyburger;
    this.emotion = angry;
    this.language = "eagerly, is thou ready to be eaten?";
  }

  // personal function
  askFor() {
    print(this.favouriteSnack);
  }
  
  show() {
    print(this.emotion);
  }

  expressYourself() {
    // String concotenation example
    print("Greetings, I am the " + this.breed + " , I say " + this.language);
  }
}