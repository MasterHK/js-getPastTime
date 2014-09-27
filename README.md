js-getPastTime
==============

get duration between now and past time

you can give parameters to the function as you wish...
like:

	var dateTime = new Date();
	dateTime.setSeconds(dateTime.getSeconds()-20);
	dateTime.setMinutes(dateTime.getMinutes()-40);
	dateTime.setMonth(dateTime.getMonth()-1);

	console.log(getPastTime(dateTime, {
		    year: true,
		    month: true,
		    day: true,
		    hour: true,
		    minute: true,
		    second: true
		  }));
		  
	console.log(getPastTime(dateTime, [
		    true,
		    true,
		    true,
		    true,
		    true,
		    true
		  ]));
		  
	console.log(getPastTime(dateTime, {
		    0: true,
		    1: true,
		    2: true,
		    3: true,
		    4: true,
		    5: true
		  }));
		  
	console.log(getPastTime(dateTime, 
		    true,
		    true,
		    true,
		    true,
		    true,
		    true
		  ));

now just have persian langauge, soon will come with ability to define new langauges...

:)
