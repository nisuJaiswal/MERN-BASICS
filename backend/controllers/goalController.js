const Goal = require('../models/GoalModel')
const User = require('../models/UserModel')

// GET Req
const getGoals = async (req, res) => {
    const goals = await Goal.find({ user: req.user.id });
    // const goals = await Goal.find();
    res.json(goals)

}

// POST Req
const postGoals = async (req, res) => {
    if (!req.body.text) {
        return res.status(400).json({ msg: "Provide text first" })
    }
    const goal = await Goal.create({ text: req.body.text, user: req.user._id });
    res.json({ goal })
}

// PUT Req for Update a Goal
const putGoal = async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);
        if (!goal) {
            return res.json({ error: 'goal not found' })
        }
        console.log(req.body)
        if (req.body.text == null) {
            return res.json({ error: "Please provide text" })
        }

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(401).json({ err: "Unauthorized User" })
        }
        if (goal.user.toString() != user.id) {
            return res.status(401).json({ err: "User Not Authorized" })
        }
        const newGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.json(newGoal);
    } catch (err) {
        console.log(err);
    }

}

// DELETE Req
const deleteGoal = async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);
        if (!goal) {
            return res.json({ error: "No Such Goal Found" });
        }
        await goal.remove();
        res.json({ id: req.params.id })

    } catch (err) {
        res.json(err);
    }
}

module.exports = { getGoals, postGoals, putGoal, deleteGoal }