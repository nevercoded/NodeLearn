// Wrapper module to do console logging

exports.trace = function(message){
	console.log(message);
}

exports.trace = function(method,message){
	console.log(method+":"+message);
}