const list = require("../dataBase/list");

const updateDone = (req, res) => {
    const { id } = req.params;
    let { done } = req.body;

    let taskToUpdate = list.find((task) => task.id === Number(id));

    if (!taskToUpdate) {
        return res.status(404).json({ "mensagem": "ID não encontrado." })
    }

    if (done === true || done === false) {
        id
        taskToUpdate.done = done;
        return res.status(200).json();
    }
    res.status(400).json({ "mensagem": "Done inválido." })
}

module.exports = {
    updateDone
}