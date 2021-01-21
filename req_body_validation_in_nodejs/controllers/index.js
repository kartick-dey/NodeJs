class UserController {
    getUser(req, res){
        console.log(req.body);
        res.json("Request Passed");
    }

    createUser(req, res){
        console.log(req.body);
        res.json("Boy parsed");
    }
}

module.exports = new UserController();