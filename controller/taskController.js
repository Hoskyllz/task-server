const Tasks = require('../models/task')


//get all task
const getAllTasks = async (req, res) => {
     try {
        const tasks = await Tasks.find()
        res.status(200).json({success:true, tasks})
    } catch (error) {
        res.json(error)
    }
}

//get a single task
const getTask = async (req,res) => {
       const { taskId } = req.params
    try {
        const task = await Tasks.findById({ _id: taskId })
        res.status(200).json({success: true,task})
    } catch (error) {
        res,json(error)
    }
}

//create task
const createTask = async (req, res) => {
     const { title, description } = req.body 
    if (!title || !description) {
        return res.status(400).json({success: false, message: 'All inputs are required'})
    }
   try {
       const task = await Tasks.create({ ...req.body })
       res.status(201).json({success: true,task})
   } catch (error) {
    res.json(error)
   }
}

//update task
const updateTask = async (req,res) => {
    const { taskId } = req.params
    try {
        const task = await Tasks.findByIdAndUpdate({ _id: taskId }, req.body, {
            new: true,
            runValidators: true,
        })
        res.status(200).json({success: true, task})
    } catch (error) {
        res.json (error)
    }
}

//delete
const deleteTask = async (req, res) => {
     const { taskId } = req.params
    try {
        const task = await Tasks.findByIdAndDelete({ _id: taskId })
        res.status (200).json({success:true})
    } catch (error) {
        res.json(error)
    }
}

module.exports = {getAllTasks,getTask,createTask,updateTask,deleteTask}