function schemaChecker(body, schema){
	// for loop to iterate in schema
	for (const [key, value] of Object.entries(schema)) {
		// if loop for value requried
		if (schema[key] == "type" || body[key] == "required"){
			continue;
		}
		// check for recursion
		if (schema[key].type == "object") {
			if (body[key] == undefined)
				if (schema[key].required == true){
					return false;
			}
			// recursive call
			else{
				if (!schemaChecker(body[key], newSchema)){
					return false;
				}
			}
		}
		// check for body of schema information
		if (schema[key].required === true && body[key] == undefined){
			return false;
		}
		if (!(typeof body[key] == schema[key].type)){
			return false;
		}
	}

return true;

}