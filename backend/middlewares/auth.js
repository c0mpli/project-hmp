const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("../config");
const Partner=require("../models/Partner");

async function authMiddleware(req, res, next) {
	const token = req.headers.token;
	if (!token) {
		req.auth = { user: false };
		req.auth={partner:false};
		return next();
	}

	try {
		const verified = jwt.verify(token, config.jwtSecret);
		if (!verified) {
			req.auth = { user: false };
			req.auth={partner:false};
			return next();
		}

		req.auth = { user: await User.findById(verified.id) };
		
		if(!req.auth.user)
		{
		
			req.auth={partner: await Partner.findById(verified.id)};
			
			req.auth.partner.admin=false;
			req.auth.partner.superadmin=false;
		}


		return next();
	} catch {
		req.auth = { user: false };
		req.auth = { partner: false };
		return next();
	}
}


module.exports=authMiddleware;

