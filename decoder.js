var fs = require('fs');
var SHA = require('jssha');

function parse(){
  fs.readFile('hex.txt', function(err, data){
    var rows = data.toString().split('\n');
    var shobj;
    var hash;
    for (var i=1; i<rows.length; i++){
      shobj = new SHA( rows[i-1] + rows[i+1], "TEXT");
      hash = shobj.getHash("SHA-224", "HEX");
      if ( hash == rows[i] ){
        console.log(i);
      }
    }
  });
}

function buffMerge(buf1, buf2){
  if (buf1.length == buf2.length){
    var buf3 = new Buffer(buf1.length);
    for (var i=0; i<buf1.length; i++){
      buf3.writeUInt8(buf1[i]+buf2[1], i);
    }
    return buf3;
  }
}

parse();
