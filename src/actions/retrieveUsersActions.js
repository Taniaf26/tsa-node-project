const { readFile } = require("../helpers/helpers");

let retrieveUsers = (req, res) => {
    readFile("db/users.json")
    .then(data => {
      let users = JSON.parse(data);
      let name = req.params.name;
      let result = users.filter(e => e.lastName == name);
      if (result[0]){
      res.status(200);
      res.json(result);
      }
      else{
        res.status(404);
        res.json({
          serverErrorMessage: "User not found"
        })
      }
    })
    .catch(error => {
        res.status(500);
        res.json({
          serverErrorMessage:
            "the error was logged and we’ll be checking it shortly"
        });
      });
};

module.exports = { retrieveUsers };