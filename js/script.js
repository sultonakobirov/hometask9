let bozor = [
    { 
        brand: "Ferrari F430 Spider",
        year: 2004,
        price: 470000
    },{
        brand: "Bentley Bentayga",
        year: 2017,
        price: 200000
    
    },{
        brand: "Ferrari F244",
        year: 2000,
        price: 240000
    },{
        brand: "Ferrari F100",
        year: 1990,
        price: 250000
    },{
        brand: "Gentra",
        year: 2020,
        price: 15000 
    },{
        brand: "Nexia",
        year: 2009,
        price: 5000
    },{
        brand:"BMW 5 SERIES",
        year: 2018, 
        price: 51000
    },{
        brand: "GAZ",
        year: 1981,
        price: 2500
    }]
    
    console.log(bozor);
    
    let newArrayCars = [], noGArray
    for(let item of bozor){
        if (item.year > 2010) {
        item.age = "new"
        item.guarantee = "1 year"
        }else{
            item.age = "old"
            item.guarantee = "no guarantee"
        }
        if(item.price > 100000){
            item.class = "luxury"
        }else if(item.price > 50000){
            item.class = "business"
        }else{
            item.class = "econom"
        }
        if(item.brand[0] == "B"){
            newArrayCars = newArrayCars.concat(item)   
        }  
        if(item.brand[0] == ("G")){
            noGArray = bozor.indexOf(item)
            noGArray = delete bozor[noGArray]
            
        }
    }
    console.log(newArrayCars);
    console.log(bozor);


    // if(item.brand[0] == ("G")){
    //     noGArray = bozor.indexOf(item)
    //     noGArray = delete bozor[noGArray]
    // }
    // if(item.brand[0] == ("G")){
    //     noGArray = bozor.indexOf(item)
    //     noGArray = bozor.splice(noGArray, 1)
    // }
    