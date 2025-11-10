const taskListModel = require("../models/taskListModel")

module.exports = {

    // GET/app

    index: (req, res) => {
        const taskLists = taskListModel.getAllTaskLists();
        res.render('app', {taskLists})
    } ,


    // GET/app/nova-lista

    create: (req, res) => {
        res.render('create.ejs')
    },


    // POST/app/nova-lista

    save: (req, res) => {
        const {title} = req.body;

        const newList = taskListModel.createList(title);
        taskListModel.saveList(newList);

        res.redirect('/app');
    }


    // GET/app/:id


    // POST/app/:id/excluir


    // POST/app/:id/nova-tarefa


    // POST/app/:id/completar/:taskId


}