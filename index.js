const ytdl = require('ytdl-core');
const fs   = require('fs');
let bar;

// For downloading youtube video in high quality and showing downloading progress bar

let ref="https://youtu.be/IyyktiwxkVA"
ytdl(ref,{filter:"videoandaudio",quality:'highest'} )
.on('response', function(res){

// For ProgressBar:- Start

  let ProgressBar = require('progress');

  bar = new ProgressBar('downloading [:bar] :percent :etas', { 

    complete : String.fromCharCode(0x2588), 
    total    : parseInt(res.headers['content-length'], 10) 

  });

})
.on('data',function(data){ 
  bar.tick(data.length); 

})
// ProgressBar:- End

.on('finish',function(){
   console.log('Download finished...')})
.pipe( fs.createWriteStream('downloads/Blender Eevee.mp4'));