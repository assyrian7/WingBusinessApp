module.exports = function(router){
	router.get((req, res) => {
		res.send("hello from server");
	});
}