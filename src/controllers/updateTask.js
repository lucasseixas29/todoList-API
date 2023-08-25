const list = require("../dataBase/list");

const updateTask = (req, res) => {
    const { id } = req.params;
    let { task, done } = req.body;

    if (!task) {
        return res.status(400).json({ "mensagem": "Precisa inserir uma tarefa." })
    }

    if (!task.trim()) {
        return res.status(400).json({ "mensagem": "A tarefa não pode ser vazia." })
    }

    let taskToUpdate = list.find((task) => task.id === Number(id));

    if (!taskToUpdate) {
        return res.status(404).json({ "mensagem": "ID não encontrado." })
    }

    if (!done) {
        done = false;
    }

    if (done === true || done === false) {
        id
        taskToUpdate.task = task;
        taskToUpdate.done = done;
    }

    return res.status(200).json();

}

module.exports = {
    updateTask
}