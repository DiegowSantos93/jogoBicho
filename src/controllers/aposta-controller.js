import Aposta from "../models/aposta-model.js";

async function store(req, res) {
    try {
        await Aposta.create(req.body)
        res.json()
    } catch (error) {
        res.status(400).json(error)
    }
}

async function index(req, res) {
    try {
        const content = await Aposta.find(req.query).exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error)
    }
}

async function show(req, res) {
    try {
        const content = await Aposta.findById(req.params.id).exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error)
    }
}

async function update(req, res) {
    try {
        const content = await Aposta.findByIdAndUpdate(req.params.id, req.body).exec()
        res.json()
    } catch (error) {
        res.status(400).json(error)
    }
}


export default {store, show, update, index}