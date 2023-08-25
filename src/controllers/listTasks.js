const list = require("../dataBase/list");

const listTasks = (req, res) => {
    return res.status(200).json(list);
}

module.exports = {
    listTasks
}