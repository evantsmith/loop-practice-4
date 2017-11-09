var months = [{
    name: 'January',
    days: 31
},{
    name: 'February',
    days: 28
},{
    name: 'March',
    days: 31
},{
    name: 'April',
    days: 30
},{
    name: 'May',
    days: 31
},{
    name: 'June',
    days: 30
},{
    name: 'July',
    days: 31
},{
    name: 'August',
    days: 31
},{
    name: 'September',
    days: 30
},{
    name: 'October',
    days: 31
},{
    name: 'November',
    days: 30
},{
    name: 'December',
    days: 31
}];
/*
  1. Write a set of loops that will print out each day of each month in the following format:

  <pre>
  January 1
  January 2
  ...
  January 30
  January 31
  February 1
  February 2
  ...
  February 27
  February 28
  March 1
  March 2
  ...
  Dec 30
  Dec 31
  </pre>

  There should be 365 print statements, one for each day in a year.
*/

// i corresponds to the index of the month, e.g. i=0 is January
for( var i = 0; i < months.length; i++){


    for ( var day = 1; day < months[i].days + 1; day++){

        console.log(months[i].name + ' ' + day);

    }
}

/*

  2. Write a set of loops that will print out each second of each hour in a day (in 24 hour clock format).

  For example, your output should look like the following:

  <pre>
  0:0:0
  0:0:1
  ...
  0:0:58
  0:0:59
  0:1:0
  0:1:1
  ...
  0:1:58
  0:1:59
  ...
  23:0:0
  23:0:1
  ...
  23:59:58
  23:59:59
  </pre>

  There should be 24 * 60 * 60 = 82,800 print statements.

*/

// Hour
for( var i= 0; i < 24; i++){

    //Minute
    for( var j = 0; j < 60; j++){

        //Second
        for( var k = 0; k < 60; k++){
            //console.log(`${i}:${j}:${k}`);
        }
    }
}









/*

  3. Write a set of loops that will print out each second of each hour in a day (in 12 hour clock format).

  For example, your output should look like the following:

  <pre>
  1:0:0 AM
  ...
  1:59:59 AM
  2:0:0 AM
  ...
  2:59:59 AM
  ...
  11:59:59 AM
  12:00:00 PM
  ...
  12:59:59 PM
  1:0:0 PM
  ...
  1:59:59 PM
  2:0:0 PM
  ...
  11:59:59 PM
  12:0:0 AM
  ...
  12:59:59 AM
  </pre>

*/

