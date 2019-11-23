export default class Userfood {
    Category = "";
    SubCategory = "";
    FoodItem = "";
    PortionSize = "";
    Proteines = "";
    NetCarbs = "";
    Fibers = "";
    Fat = "";

    constructor(food) {
        this.Category = food["Category"]
        this.SubCategory = food["SubCategory"]
        this.FoodItem = food["FoodItem"]
        this.PortionSize = food["PortionSize"]
        this.Proteines = food["Proteines"]
        this.NetCarbs = food["NetCarbs"]
        this.Fibers = food["Fibers"]
        this.Fat = food["Fat"]
    }

}

