// Problem-1

function radianToDegree(radians){
    if(typeof(radians) !== "number"){
    return Enter a Number;
    }
    degree = (radians * (180 / Math.PI)).toFixed(2);
    return degree;
    }

    // const getDegree = radianToDegree(10);
    // const getDegree1 = radianToDegree(25);
    // const getDegree2 = radianToDegree(199);
    // console.log(getDegree);
    // console.log(getDegree1);
    // console.log(getDegree2);



    // problem-2

    function isJavaScriptFile(fileName){
    if(fileName !== string){
    return input valid string;
    }
    const stringCheack = fileName.endsWith('.js');
    return stringCheack;
    };

    // const getresult = isJavaScriptFile('image.jpg.js')
    // console.log(getresult);


    // Problem-3

    function oilPrice(disealQuantity, patrolQuantity, octenQuantity){
    if(typeof (octenQuantity == string)){
    return give a valid number;
    }
    disealPrice = 114;
    patrolPrice = 130;
    octenPrice = 135;
    totaldisealPrice = disealQuantity * disealPrice;
    totalPetrolPrice = patrolQuantity * patrolPrice;
    totalOctenPrice = octenQuantity * octenPrice;
    totalPriceOfAll = totaldisealPrice + totalOctenPrice + totalPetrolPrice;
    return totalPriceOfAll;
    }
    // const getPrice = oilPrice(0,2,3)
    // console.log(getPrice);


    // Problem-4

    function publicBusFare(passenger){
    if(typeof (passenger) == string){
    return Give a valid Number;
    }
    const busSit = 50;
    const microbusSit = 11;
    const publicBusTricketPrice = 250;
    busneed = Math.floor(passenger / busSit);
    carneed = Math.floor((passenger % busSit) / microbusSit);
    restPassenger = (passenger % busSit) % microbusSit;
    totalPublicBusCost = publicBusTricketPrice * restPassenger;
    // console.log('bus need : ',busneed);
    // console.log('microbus need : ',carneed);
    // console.log(restPassenger);
    // console.log('Total Public Bus cost : ',totalPublicBusCost );
    return totalPublicBusCost;
    }
    // const publicTransportCost = publicBusFare(235);
    // console.log(publicTransportCost);


    // problem-5

    const me = {name : "abul", friend: "babul"};
    const her = {name : "babul", friend: "abul"};
    function isBestFriend(friend1, friend2){
    if(typeof friend1 !== 'object' || typeof friend1 !== 'object'){
    return invalid input;
    }
    const isbestFriendCheck = me.name === her.friend &&
    me.friend === her.name;
    return isbestFriendCheck;
    }
    
    // const result = isBestFriend(person1,person2);
    // console.log(result);