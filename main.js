/*
* Author: Brett Kim
*/

var header = document.getElementById("match");
header.innerHTML = "Match #1 of #50"

$(function() {
    var sheetURL = 'https://spreadsheets.google.com/feeds/cells/1EMAV9BxUnAs-Jtvn6QsIpkik5LW6odRa8bLyxc4aMlw/1/public/full?alt=json';

    $.getJSON(sheetURL, function(data) {
        var entry = data.feed.entry;
        var col1 = [];
        var col2 = [];
        var col3 = [];
        var col4 = [];

    for(var i = 3; i < entry.length; i += 4) {
        col1.push(entry[i].content.$t);
        col2.push(entry[i+1].content.$t);
        col3.push(entry[i+2].content.$t);
        col4.push(entry[i+2].content.$t);
    }

    console.log(col1);
    console.log(col2);
    console.log(col3);
    console.log(col4);
})
});