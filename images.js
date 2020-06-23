const {createCanvas, loadImage, Image, registerFont} = require('canvas');
const fs = require('fs');
const db = require('./database.js');

module.exports = {
    join_scroll : function(username){
        return new Promise(async (resolve, reject) => {
            var now = new Date();
            const out = fs.createWriteStream(__dirname + `/resources/temp/${filetimeFromDate(now)}.png`);
            //in------
            const letter = new Image();
            letter.src = './resources/pictures/acceptanceletter3.png';

            //register the harry potter font
            registerFont('./resources/fonts/harrypotter.TTF', {family: 'harrypotter'});

            //create the canvas with the correct dimensions
            const canvas = createCanvas(letter.width, letter.height);
            const ctx = canvas.getContext('2d');

            ctx.drawImage(letter, 0, 0);

            //draw the text
            let text = `${username},`;
            ctx.font = '32px "harrypotter"';
            ctx.fillStyle = "black";
            //only write the name of the user onto the image
            ctx.fillText(text, 100, 250);

            

            //out------
            const stream = canvas.createPNGStream();
            stream.pipe(out);
            out.on('finish', () => resolve(out.path));
        });
    }
}

function filetimeFromDate(date) {  
    return date.getTime() * 1e4 + 116444736e9;
}