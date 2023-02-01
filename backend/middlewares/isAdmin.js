function isAdmin(req, res, next) {
	if (!req.auth.user.admin&&!req.auth.user.superadmin)
		return res.status(401).send("Unauthorized");

	next();
}


module.exports=isAdmin;