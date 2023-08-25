const list = require("../dataBase/list");
const { format } = require("date-fns")

let id;

if (list.length > 0) {
    id = list[list.length - 1].id;
} else {
    id = 0;
}

const createNewTask = (req, res) => {
    let { task, done } = req.body;

    if (!task) {
        return res.status(400).json({ "mensagem": "Precisa inserir uma tarefa." })
    }

    if (!task.trim()) {
        return res.status(400).json({ "mensagem": "A tarefa não pode ser vazia." })
    }

    if (!done) {
        done = false;
    }

    if (done === true || done === false) {
        id++


        const newTask = {
            id,
            task,
            done,
            data: format(new Date(), "yyyy-MM-dd HH:mm:ss")
        }

        list.push(newTask);
        return res.status(201).json()
    }

    return res.status(400).json({ "mensagem": "Done inválido." })

}


module.exports = {
    createNewTask
}