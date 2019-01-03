/****************************************
 * These are my commonly used utilities *
 ***************************************/

var myUtilities = {
	
	'transpose': function(arr) {//Transpose a 2d array
		var arrLen = arr.length;
		for (var i = 0; i < arrLen; i++) {
			for (var j = 0; j <i; j++) {
				//swap element[i,j] and element[j,i]
				var temp = arr[i][j];
				arr[i][j] = arr[j][i];
				arr[j][i] = temp;
			}
		}
	},
	
	'searchArray': function(arr,searchStr) { //Input an array and a string, output an array
		var out = [];
		for(var i=0;i<arr.length;i++) {
			var str=arr[i];
			if(str.indexOf(searchStr) > -1) { //Only output elements that match the search string
				out.push(str.substring(searchStr.length));
			}
		}
		return out;
	},
	
	'capitalize': function(str) {
		str = str.split(" ");
	    for (var i = 0, x = str.length; i < x; i++) {
	    	str[i] = str[i][0].toUpperCase() + str[i].substr(1);
	    }
	    return str.join(" ");
	},
	
	'formatDate': function(date,ap) { //date should be a Date object, ap should be 12 for 12 hour time
		var hours = date.getHours();
		var minutes = date.getMinutes();
		minutes = minutes < 10 ? '0'+minutes : minutes;
		if (ap === 12) {
			var ampm = hours >= 12 ? 'pm' : 'am';
			hours = hours % 12;
			hours = hours ? hours : 12; // the hour '0' should be '12'
			var strTime = hours + '.' + minutes + ' ' + ampm; //This is for 12 hour time
		}
		else var strTime = hours + '.' + minutes; //This is for 24 hour time
		var month = date.getMonth()+1;
		return date.getFullYear() + "-" + month + "-" + date.getDate() + "  " + strTime;
	},
};