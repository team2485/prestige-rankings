/*
* Author: Brett Kim
*/

//Column arrays
var col1 = [];
var col2 = [];
var col3 = [];
var col4 = [];

$(function() {
    var sheetURL = 'https://spreadsheets.google.com/feeds/cells/1EMAV9BxUnAs-Jtvn6QsIpkik5LW6odRa8bLyxc4aMlw/1/public/full?alt=json';

    $.getJSON(sheetURL, function(data) {
        var entry = data.feed.entry;

        //Updating the table
        for(var i = 3; i < entry.length; i += 4) {
            col1.push(entry[i].content.$t);
            col2.push(entry[i+1].content.$t);
            col3.push(entry[i+2].content.$t);
            $("table").append("<tr>Yes</tr>");
            col4.push(entry[i+3].content.$t);
        }

        $("table").append("<tr>Yes</tr>");

        //Displaying the contents of the arrays
        console.log(col1);
        console.log(col2);
        console.log(col3);
        console.log(col4);
    })
});

function generateTable() {
    //var numberOfTeams = teams.length;
    //var teams = [];
    //if(numberOfTeams > 0) {}

    $("table").append("<tr>Yes</tr>");

    //Table created if teams exist
    var table = document.createElement("table");
    table.style.width = '50%';
    table.setAttribute('border', '1');
    table.setAttribute('cellspacing', '0');
    table.setAttribute('cellpadding', '5');
}