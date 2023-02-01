function isHealthPartner(req, res, next) {
	console.log(req.auth.partner);
	if (!req.auth.partner)
		return res.status(401).send("Unauthorized");

	next();
}


module.exports=isHealthPartner;