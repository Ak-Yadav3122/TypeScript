var Bottelmaker = /** @class */ (function () {
    function Bottelmaker(name, price) {
        this.name = name;
        this.price = price;
        console.log('Bottel name is: ' + name + ' and price is: ' + price);
    }
    return Bottelmaker;
}());
var b1 = new Bottelmaker('milton', 300);
