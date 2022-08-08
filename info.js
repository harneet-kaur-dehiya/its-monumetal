window.onload=loadTable;
function loadTable(){
    document.writeln('<!DOCTYPE html><html><head><script src="jscript.js"></script></head><body><div style="position:relative;top:-10px;"><p style="text-align: center; font-size:25px;" id="temp">List of Monuments</p></div><table><tr><th>Monument</th><th>State</th></tr>"');
    for (var key in dict){
        console.log( key, dict[key] );
    }
    
    /*<tr><td><img src="" id="state"></td></tr>
    <tr><td><img src="" id="monumnet"></td></tr>
    
      </body>
      </html>*/
}
