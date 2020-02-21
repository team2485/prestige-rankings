/*
* Author: Brett Kim
*/

//Column arrays
var col1 = [];
var col2 = [];
var col3 = [];
var col4 = [];

var entry;

var TABLE_COLUMNS = 4;

$(function() {
    var sheetURL = 'https://spreadsheets.google.com/feeds/cells/1EMAV9BxUnAs-Jtvn6QsIpkik5LW6odRa8bLyxc4aMlw/1/public/full?alt=json';

    $.getJSON(sheetURL, function(data) {
        entry = data.feed.entry;

        output = "";

        output += "<table>";

        var newTableRow = false;

        var b = 0;
        for(i = 0; i < entry.length; i++) {

            b++;

            if(b == 5) {
                b = 1;
                newTableRow = true;
                output += "<tr>";
            }

            output += "<th>";
            output += entry[i].content.$t;
            output += "</th>";

            if(newTableRow == true) {
                output += "</tr>";
                console.log("Row");
                newTableRow = false;
            }

            console.log("#: " + b + " Entry " + entry[i].content.$t);
        }
        output += "</table>";
    
        document.getElementById("team").innerHTML = output;

        console.log(entry);
    })
});