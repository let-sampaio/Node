function myFunction(xml){
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("CD");
    let table ="<tr><th>Artist</th><th>Title</th></tr>";
    for(let i =0;i< x.length; i++){
        table += "<tr><td>" + x[i].getElementsByTagName("ARTIST")
        [0].childNodes[0].nodeValue + "</td></tr>";
    }
}document.getElementById("demo").innerHTML = tables;