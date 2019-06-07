let draw = {
    drawLine: function (lineLength) {
        let result = '';
        let line = '━';
        for (let element = 0; element < lineLength; element += 1) {
            result += line;
        }
        return result;
    },

    drawTopBorder: function (lineLength) {
        //debugger;
        let justLine = this.drawLine(lineLength);
        let topBorder = `┏${justLine}┓\n`;
        console.log(topBorder);
        return topBorder;
    },

    drawMiddleBorder: function (lineLength) {
        let justLine = this.drawLine(lineLength);
        let drawMiddleBorder = `┣${justLine}┫\n`;
        console.log(drawMiddleBorder);
        return drawMiddleBorder;
    },

    drawLowBorder: function (lineLength) {
        let justLine = this.drawLine(lineLength);
        let lowBorder = `┗${justLine}┛\n`;
        console.log(lowBorder);
        return lowBorder;
    },

    drawBarsAround: function (string) {
    let result = "";
    result = `┃${string}┃\n`;
        console.log(result);
    return result;    
    },

    calculateLongest: function (array) { /// finding the longest array
    let longest = array.sort(function (a, b) { return b.length - a.length; })[0];
    return longest.length;
    },

    boxIt: function (arrayOfStrings) {
let result = "";
let lengthNumber = this.calculateLongest(arrayOfStrings);   //counting number of lines to draw ━     
arrayOfStrings.array.forEach(element, index => {
if (element[index] === 0) {
result+= this.drawTopBorder(lengthNumber) + this.drawBarsAround(element)
} else if (element[index] !== arrayOfStrings.length - 1) {
result+= this.drawMiddleBorder(lengthNumber) + this.drawBarsAround(element)
} else {
result+= this.drawMiddleBorder(lengthNumber) + this.drawBarsAround(element) + this.drawLowBorder(lentghNumber)    
}  
});
    },

boxItFull: function (arrayOfStrings) {
    let result = "";
    let lengthNumber = this.calculateLongest(arrayOfStrings);   //counting number of lines to draw ━     
    for (let element = 0; element< arrayOfStrings.length; element+=1) {
    if (arrayOfStrings[element] === 0) {
    result+= this.drawTopBorder(lengthNumber) + this.drawBarsAround(arrayOfStrings[element])
    } else if (arrayOfStrings[element] !== arrayOfStrings.length - 1) {
    result+= this.drawMiddleBorder(lengthNumber) + this.drawBarsAround(arrayOfStrings[element])
    } else {
    result+= this.drawMiddleBorder(lengthNumber) + this.drawBarsAround(arrayOfStrings[element]) + this.drawLowBorder(lentghNumber)    
    }
}  
    

// 
/*if (arrayOfStrings.length ===1) {
    result = this.drawTopBorder(lengthNumber) + this.drawBarsAround(arrayOfStrings[0]) + this.drawLowBorder(lengthNumber);
    } else {
    let lengthNumber = this.calculateLongest(arrayOfStrings);/// longest name to make boxes as long as the bisggest array element to fit them    
    for (let names = 0; names < arrayOfStrings.length; names+=1) {
    result = this.drawTopBorder(lengthNumber)    
    }    
    }
    */
//console.log(result);
return result;
    },
}

//console.log(draw.drawTopBorder(4)) ;
console.log(draw.boxItFull(['Jon Snow', 'Cersei Lannister']));
