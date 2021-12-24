function generateBar(i) {
    document.getElementById('degree').innerHTML = '...' + i + '%'
    let timeId = setTimeout(generateBar, 12, ++i);
    if (i == 99) {
       document.getElementById('loading').style.display = "none";
       document.getElementById('container').style.display = "block";
       clearTimeout(timeId);
       scrollOnPage();
    }
 }
 
 document.getElementById('container').style.display = "none";
 setTimeout(generateBar, 12, 1);