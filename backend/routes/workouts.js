const express=require("express")
const router=express.Router()
const Workout = require('../models/WorkoutModel')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout} = require('../controllers/WorkoutControllres')

// GET ALL WORKOUTS
router.get('/',getWorkouts)
// GET Single WORKOUTS
router.get('/:id',getWorkout)
// POST A WORKOUTS
router.post('/',createWorkout)
// DELETE A WORKOUTS
router.delete('/:id',deleteWorkout)
// patch A WORKOUTS
router.patch('/:id',updateWorkout)


module.exports=router