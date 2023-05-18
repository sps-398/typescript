"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res, next) => {
    return res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newToDo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newToDo);
    return res.status(201).json({ success: true });
});
router.put('/todo/:todoId', (req, res, next) => {
    const todoIndex = todos.findIndex(todo => todo.id === req.params.todoId);
    if (todoIndex < 0)
        return res.status(404).json({ success: false, message: "Id not found!" });
    todos[todoIndex].text = req.body.text;
    return res.status(200).json({ success: true, todos: todos });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    todos = todos.filter(todo => todo.id !== tid);
    return res.status(200).json({ success: true, todos: todos });
});
exports.default = router;
