let var1 = '';
let var2 = '';
let var3 = 0;
let var4 = 0;
function keisann () {
    var1 = (document.getElementById('falco')).value;
    console.log(var1);
    var3 = 0;
    while(var3 < 4){var2 = var2 + '<br>' +var1; var3 += 1; var4 = 0;while(var4 < 1000){var4 += 1; console.log(var4);}}
    $('#homo').html(var2);
}