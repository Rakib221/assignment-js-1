

// kilometer converter start

function kilometerToMeter(distance){
    if(distance<0){
        return 'Distance can not be a negative value!Please enter positive value'; //distance and length can not be negative
    }
    else if(distance == 0){
        return "Distance Zero(0)"; // It means alongside
    }

    else{
        convertedDistance = distance * 1000; // 1 kilometer = 1000 meter
        return convertedDistance.toFixed(3); // for take 3 digits after decimal
    }
}

// kilometer converter end

// budgetcalculator start

function budgetCalculator(numberC,numberP,numberLap){
   var numberClock = Math.abs(numberC); // for converting the negative to positive
   var numberPhone = Math.abs(numberP);
   var numberLaptop = Math.abs(numberLap);
   // price of each instrument:
   // clock 50 dollars;phone 100 dollars;laptop 500 dollars;
   totalBudget = numberClock*50+numberPhone*100+numberLaptop*500;
   return totalBudget;
}

// budget calculator end

// hotelcost start

function hotelCost(day){
    totalCost = 0;
    if(day<=0){
        return 'Error!Please import positive value.';
    }
    // for first 10 days hotel bill 100 taka for each day.for second 10 days hotel bill 80 taka.
    // and for other day hotel bill 50 taka
    else if(day<=10){
      totalCost = day*100;
    }

    else if(day<=20){
        var firstPartCost = 10*100;
        var remainingday = day-10;
        var secondPartCost = remainingday*80;
        totalCost = firstPartCost + secondPartCost;
    }
    else{
        firstPartCost = 10*100;
        secondPartCost = 10*80;
        var remainingOtherday = day-20;
        var thirdPartCost = remainingOtherday*50;
        totalCost = firstPartCost + secondPartCost+thirdPartCost; 
    }
    return totalCost;
        
}

// hotel cost end

// megafriend start

function megaFriend(nameList){
    var largestName = nameList[0];
    if(nameList==0){ //we count it as a length
        return 'It is empty list';
    }
    else{
        for(i=1;i<nameList.length;i++){
            if(nameList[i].length>largestName.length){
                largestName = nameList[i];
            }
        }
    }
    return largestName;
}

// megafriend end
