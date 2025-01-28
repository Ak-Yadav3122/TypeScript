class Bottelmaker {
  constructor(public name: string, public price: number) {
    console.log("Bottel name is: " + name + " and price is: " + price);
  }
}

let b1 = new Bottelmaker("milton", 300);
