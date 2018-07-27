const express = require('express');
const router  = express.Router();
const Task    = require('../models/task');


//creates tasks, but now need a route to ADD tasks

router.get('/tasks', (req, res, next) => {
  
Task.find()
    .then((allTheTasks)=>{
    res.json(allTheTasks);
})
    .catch((err)=>{
        res.json(err);
    })

});

//add tasks route

router.post('/tasks/create', (req, res, next)=> {

    Task.create({
        title: req.body.title,
        description: req.body.description,
        finished: req.body.finished
    })
        .then((response)=>{
            res.json(response)
        })
        .catch((err)=>{
            res.json(err);
        })
})

//edit task route

// router.get('/tasks/:id/edit', (req, res, next)=>{
//     const id = req.params.id;

//     Task.findById(id)
//         .then((theTask)=>{
//             res.json(theTask)
//         })
//         .catch((err)=>{
//             res.json(err);
//         })
// })

//update task route

router.post('/tasks/:id/update', (req, res, next)=>{
    const id = req.params.id;

    Task.findByIdAndUpdate(id, {
        title: req.body.title,
        description: req.body.description,
        finished: req.body.finished
    })
        .then((theUpdatedTask)=>{
            res.json(theUpdatedTask)
        })
        .catch((err)=>{
            res.json(err);
        })
})


//delete task route

router.post('/tasks/:id/delete', (req, res, next)=>{
    const id = req.params.id;

    Task.findByIdAndRemove(id)
        .then((theTask)=>{
            res.json(theTask)
        })
        .catch((err)=>{
            res.json(err);
        })

})


//task details

router.get('/tasks/:id/details', (req, res, next)=>{
    const id = req.params.id;

    Task.findById(id)
        .then((theTask)=>{
            res.json(theTask)
        })
        .catch((err)=>{
           res.json(err);
        })
})





module.exports = router;