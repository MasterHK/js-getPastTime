function getPastTime(dateTarikhVoroodi) {
		  var objOptions = {
		    year: true,
		    month: true,
		    day: true,
		    hour: true,
		    minute: true,
		    second: false
		  };
		  var copyOfDate = {
		    year: dateTarikhVoroodi.getFullYear(),
		    month: dateTarikhVoroodi.getMonth(),
		    day: dateTarikhVoroodi.getDay(),
		    hour: dateTarikhVoroodi.getHours(),
		    minute: dateTarikhVoroodi.getMinutes(),
		    second: dateTarikhVoroodi.getSeconds()
		  };
		  function extendObj(obj1, obj2) {
		    for (element in obj2) obj1[element] = obj2[element];
		    return obj1;
		  }
		  function isArray(inVal) {
		    try {
		      return !!('length' in inVal);
		    } catch (e) {
		      // if not obj or arr
		      return false;
		    }
		  }
		  var newOptions = null;
		  try {
		  	if (arguments.length == 2) {
		  		newOptions = arguments[1]
		  	} else{
		  		var temp_arr = [null],
		  		fromZero = 1,
		  		isTrue = false;
		  		do{
		  			isTrue = false;
		  			if(arguments.hasOwnProperty(fromZero)) temp_arr[fromZero] = arguments[fromZero], isTrue = true;
		  			fromZero++;
		  		}while(isTrue);
		  		//temp_arr.shift();
		  		newOptions = temp_arr
		  	}
		    //newOptions = ((arguments.length == 2) ? arguments[1] : (temp_arr = [],fromZero = 1; do{isTrue = false,if(arguments.hasOwnProperty(fromZero))temp_arr[fromZero] = arguments[fromZero],isTrue = true;}while(isTrue),/* temp_arr.shift(),*/ temp_arr));
		  } catch (e) {
		  }

		  function extendFromArr(){
		    extendObj(objOptions, {
		      year: ((newOptions.hasOwnProperty(0)) ? newOptions[0] : objOptions.year),
		      month: ((newOptions.hasOwnProperty(1)) ? newOptions[1] : objOptions.month),
		      day: ((newOptions.hasOwnProperty(2)) ? newOptions[2] : objOptions.day),
		      hour: ((newOptions.hasOwnProperty(3)) ? newOptions[3] : objOptions.hour),
		      minute: ((newOptions.hasOwnProperty(4)) ? newOptions[4] : objOptions.minute),
		      second: ((newOptions.hasOwnProperty(5)) ? newOptions[5] : objOptions.second)
		    });
		  }

		  if (isArray(newOptions)) extendFromArr();
		  else {
		    if (newOptions) {
		    	var fromArr = false;
		    	for (var i = 0; i < 6; i++) {
		    		if (newOptions.hasOwnProperty(i)) fromArr = true, extendFromArr();
		    	};
		    	if (!fromArr) extendObj(objOptions, newOptions);
		  	}
		  }
		  var arrKhorooji = [
		  ],
		  crtTime = new Date(),
		  crtTimeProp = {
		    year: crtTime.getFullYear(),
		    month: crtTime.getMonth(),
		    day: crtTime.getDay(),
		    hour: crtTime.getHours(),
		    minute: crtTime.getMinutes(),
		    second: crtTime.getSeconds()
		  },
		  intAdad = 0,
		  updatingDate,
		  intYear, intMonth, intDay, intHour, intMinute, intSecond
		  ;

		  function updateDate(){
			  updatingDate = {
			    year: dateTarikhVoroodi.getFullYear(),
			    month: dateTarikhVoroodi.getMonth(),
			    day: dateTarikhVoroodi.getDay(),
			    hour: dateTarikhVoroodi.getHours(),
			    minute: dateTarikhVoroodi.getMinutes(),
			    second: dateTarikhVoroodi.getSeconds()
			  };
		  }

		  updateDate();
		  intYear = (crtTimeProp.year - updatingDate.year);
		  dateTarikhVoroodi.setFullYear(crtTimeProp.year);
		  updateDate();
		  intMonth = (crtTimeProp.month - updatingDate.month);
		  if (intMonth < 0) {
		  	intMonth = 12 - (-1*intMonth);
		  	intYear--;
		  };
		  dateTarikhVoroodi.setMonth(crtTimeProp.month);
		  updateDate();
		  intDay = (crtTimeProp.day - updatingDate.day);
		  if (intDay < 0) {
		  	intDay = 30 - (-1*intDay);
		  	intMonth--;
		  };
		  //dateTarikhVoroodi.setDay(crtTimeProp.day);
		  updateDate();
		  intHour = (crtTimeProp.hour - updatingDate.hour);
		  if (intHour < 0) {
		  	intHour = 24 - (-1*intHour);
		  	intDay--;
		  };
		  dateTarikhVoroodi.setHours(crtTimeProp.hour);
		  updateDate();
		  intMinute = (crtTimeProp.minute - updatingDate.minute);
		  if (intMinute < 0) {
		  	intMinute = 60 - (-1*intMinute);
		  	intHour--;
		  };
		  dateTarikhVoroodi.setMinutes(crtTimeProp.minute);
		  updateDate();
		  intSecond = (crtTimeProp.second - updatingDate.second);
		  if (intSecond < 0) {
		  	intSecond = 60 - (-1*intSecond);
		  	intMinute--;
		  };
		  dateTarikhVoroodi.setSeconds(crtTimeProp.second);
		  updateDate();

		  if (objOptions.year && intYear) arrKhorooji.push(intYear + ' سال');
		  if (objOptions.month && intMonth) arrKhorooji.push(intMonth + ' ماه');
		  if (objOptions.day && intDay) arrKhorooji.push(intDay + ' روز');
		  if (objOptions.hour && intHour) arrKhorooji.push(intHour + ' ساعت');
		  if (objOptions.minute && intMinute) arrKhorooji.push(intMinute + ' دقیقه');
		  if (objOptions.second && intSecond) arrKhorooji.push(intSecond + ' ثانیه');

		  dateTarikhVoroodi.setFullYear(copyOfDate.year);
		  dateTarikhVoroodi.setMonth(copyOfDate.month);
		  //dateTarikhVoroodi.setDay(copyOfDate.day);
		  dateTarikhVoroodi.setHours(copyOfDate.hour);
		  dateTarikhVoroodi.setMinutes(copyOfDate.minute);
		  dateTarikhVoroodi.setSeconds(copyOfDate.second);
		  
		  return ((!arrKhorooji.length) ? 'چند لحظه پیش' : arrKhorooji.join(' و ') + ' پیش');
		}
