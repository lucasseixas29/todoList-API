const list = require("../dataBase/list");

const deleteTask = (req, res) => {
    const { id } = req.params;

    const taskToDelete = list.findIndex((task) => task.id === Number(id));

    console.log(taskToDelete)

    if (taskToDelete === -1) {
        return res.status(404).json({ "mensagem": "ID não encontrado." })
    }


    list.splice(taskToDelete, 1);

    return res.status(200).json({ "mensagem": "Task deletada" });
}

module.exports = {
    deleteTask
}