
const arg = process.argv.slice(2);

let draw = {
    drawLine: function (lineLength) {
        let result = '';
        let line = '━';
        for (let element = 0; element < lineLength; element += 1) {
            result += line;
        }
        return result;
    },

    drawSpaces: function (spaceLength) {
        let result = '';
        let line = ' ';
        for (let element = 0; element < spaceLength; element += 1) {
            result += line;
        }
        return result;
    },

    drawTopBorder: function (lineLength) {
        //debugger;
        let justLine = this.drawLine(lineLength);
        let topBorder = `┏${justLine}┓\n`;
        // console.log(topBorder);
        return topBorder;
    },

    drawMiddleBorder: function (lineLength) {
        let justLine = this.drawLine(lineLength);
        let drawMiddleBorder = `┣${justLine}┫\n`;
        //  console.log(drawMiddleBorder);
        return drawMiddleBorder;
    },

    drawLowBorder: function (lineLength) {
        let justLine = this.drawLine(lineLength);
        let lowBorder = `┗${justLine}┛\n`;
        // console.log(lowBorder);
        return lowBorder;
    },

    drawBarsAround: function (string, spacing) {
        let result = '';
        if (string.length !== spacing) {
debugger;
            
            let resultPadding = this.drawSpaces(spacing)
            result += `┃${string}${resultPadding}┃\n`;
        };
        //  console.log(result);
        return result;
    },


    calculateLongest: function (array) { /// finding the longest array
        let longest = array.concat().sort(function (a, b) { return b.length - a.length; })[0];
        return longest.length;
    },


    boxItFull: function (arrayOfStrings) {
        let result = "";
        let lineToAddToBarsAround = 0;
        let lengthNumber = this.calculateLongest(arrayOfStrings);   //counting number of lines to draw ━     
        for (let element = 0; element < arrayOfStrings.length; element += 1) {
            //debugger;
            elementOfArray = arrayOfStrings[element].length;
            lineToAddToBarsAround = lengthNumber - elementOfArray;
            if (arrayOfStrings.length===1) {
                result = this.drawTopBorder(lengthNumber) + this.drawBarsAround(arrayOfStrings[element]) + this.drawLowBorder(lengthNumber);
            } else if ([element] == 0) {
                result = this.drawTopBorder(lengthNumber) + this.drawBarsAround(arrayOfStrings[element], lineToAddToBarsAround);
            } else if (element !== (parseInt(arrayOfStrings.length) - 1)) {
                result += this.drawMiddleBorder(lengthNumber) + this.drawBarsAround(arrayOfStrings[element], lineToAddToBarsAround);
            } else {
                result += this.drawMiddleBorder(lengthNumber) + this.drawBarsAround(arrayOfStrings[element], lineToAddToBarsAround) + this.drawLowBorder(lengthNumber);
            }
        }

        return result;
    },
}


console.log(draw.boxItFull(arg));
