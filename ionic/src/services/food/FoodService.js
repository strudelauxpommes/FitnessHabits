// import { SleepCollection, Sleep } from '../../entities/sleep/sleep'
import jsondata from "src/entities/food/data2.json";
import foodList from "src/entities/food/foodList.json";
import Userfood from "src/entities/food/userfood";

/**
 * Service to fetch sleep entities from the persistence
 */
const FoodService = () => {


    let foodArrayDeujeuner = jsondata.dejeuner;
    let foodArrayCollationAM = jsondata.collationAM;
    let foodArrayDiner = jsondata.diner;
    let foodArrayCollationPM = jsondata.collationPM;
    let foodArraySouper = jsondata.souper;
    let foodArrayCollationSoir = jsondata.collationSoir;

    const foodDe = new Userfood({
        "Category": "food.Category",
        "SubCategory": "food.SubCategory",
        "FoodItem": "Oeuf",
        "PortionSize": "food.PortionSize",
        "Proteines": "food.Proteines",
        "NetCarbs": "food.NetCarbs",
        "Fibers": "food.Fibers",
        "Fat": "food.Fat"
    })
    
    foodArrayDeujeuner.push(foodDe);

    const foodAM = new Userfood({
        "Category": "food.Category",
        "SubCategory": "food.SubCategory",
        "FoodItem": "Granola",
        "PortionSize": "food.PortionSize",
        "Proteines": "food.Proteines",
        "NetCarbs": "food.NetCarbs",
        "Fibers": "food.Fibers",
        "Fat": "food.Fat"
    })
    foodArrayCollationAM.push(foodAM);
    const foodDi = new Userfood({
        "Category": "food.Category",
        "SubCategory": "food.SubCategory",
        "FoodItem": "RIZ",
        "PortionSize": "food.PortionSize",
        "Proteines": "food.Proteines",
        "NetCarbs": "food.NetCarbs",
        "Fibers": "food.Fibers",
        "Fat": "food.Fat"
    })
    foodArrayDiner.push(foodDi);

    const foodPM = new Userfood({
        "Category": "food.Category",
        "SubCategory": "food.SubCategory",
        "FoodItem": "CEREALe",
        "PortionSize": "food.PortionSize",
        "Proteines": "food.Proteines",
        "NetCarbs": "food.NetCarbs",
        "Fibers": "food.Fibers",
        "Fat": "food.Fat"
    })
    foodArrayCollationPM.push(foodPM);
    const foodSou = new Userfood({
        "Category": "food.Category",
        "SubCategory": "food.SubCategory",
        "FoodItem": "PIZZA",
        "PortionSize": "food.PortionSize",
        "Proteines": "food.Proteines",
        "NetCarbs": "food.NetCarbs",
        "Fibers": "food.Fibers",
        "Fat": "food.Fat"
    })
    foodArraySouper.push(foodSou);
    const foodSoire = new Userfood({
        "Category": "food.Category",
        "SubCategory": "food.SubCategory",
        "FoodItem": "Poulet",
        "PortionSize": "food.PortionSize",
        "Proteines": "food.Proteines",
        "NetCarbs": "food.NetCarbs",
        "Fibers": "food.Fibers",
        "Fat": "food.Fat"
    })
    foodArrayCollationSoir.push(foodSoire);
    var dbFood = foodList;

    /**
     * Fetch the list of sleeps from the persistance layer
     */
    // const foodArray = () => {
    //     return foodArray;
    // }

    /**
     * Fetch the list of sleeps from the persistance layer
     */
    // const dbFood = () => {
    //     return dbFood;
    // }

    /**
     * Save a new sleep to the persistance layer
     */
    const save = (period, food) => {

        const newUserFood = new Userfood({
            "Category": food.Category,
            "SubCategory": food.SubCategory,
            "FoodItem": food.FoodItem,
            "PortionSize": food.PortionSize,
            "Proteines": food.Proteines,
            "NetCarbs": food.NetCarbs,
            "Fibers": food.Fibers,
            "Fat": food.Fat
        });

        //TODO: change this to talk to the persistence layer
        // foodArray[period].push(newUserFood);
    }

    /**
     * Delete a SleepItem from the foodArray
     */
    // const deleteSleep = (key) => {
    //     foodArray = foodArray.filter(
    //         (item) => {
    //             return item.id !== key
    //         }
    //     );
    // }

    /**
     * returns a key for a new SleepItem, 
     * for the moment it's simply the length and it's a potential problem.
     * we'll have to talk to pesistance to know how they id their json objects
     */
    // const getNewKey = () => {
    //     return foodArray.length;
    // }

    //delete, update

    return {
        // fetch: fetch,
        dbFood: dbFood,
        foodArrayDeujeuner: foodArrayDeujeuner,
        foodArrayCollationAM: foodArrayCollationAM,
        foodArrayDiner: foodArrayDiner,
        foodArrayCollationPM: foodArrayCollationPM,
        foodArraySouper: foodArraySouper,
        foodArrayCollationSoir: foodArrayCollationSoir,
        save: save
        // delete: deleteSleep,
    }
}

export default FoodService