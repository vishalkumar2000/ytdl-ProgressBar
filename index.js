const ytdl = require('ytdl-core');
const fs   = require('fs');
let bar;

let ref="https://youtu.be/qGgG6t7Re_0"
ytdl(ref,{filter:"videoandaudio",quality:'highest'} )
.on('response', function(res){

  let ProgressBar = require('progress');

  bar = new ProgressBar('downloading [:bar] :percent :etas', { 

    complete : String.fromCharCode(0x2588), 
    total    : parseInt(res.headers['content-length'], 10) 

  });

})
.on('data',function(data){ 

  bar.tick(data.length); 

})
.on('finish',function(){
   console.log('Download finished...')})
.pipe( fs.createWriteStream('downloads/f&f.mp4'));