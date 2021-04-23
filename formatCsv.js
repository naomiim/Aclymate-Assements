//build a function (formatCsv) that can take in raw csv data of any length (rawData)
// and return it in the converted format (formattedData)
function formatCsv(rawData){
	// variable to be used to convert data
	var convData [];
	// header that describes data in the column
	const header = rawData[0];
	// changes the contents of an array by removing or replacing existing elements
	rawData.splice(0,1); // row 0 and 1
	// variable for current data to push later
	var currData = {};
	// take in raw csv data of any length
	for (var i = 0; i < rawData.length; i++){
		// nest loop for j and i index
		for (var j = 0; j < header.length; j++){
			currData[header[j]] = rawData[i][j];
		}
		// push new converted data into the raw data
		convData.push(rawData);
		}
	// return in converted format
	return formattedData;
};
	
	
	