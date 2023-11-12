import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import * as exercises from './exercises-model.mjs';
import { body, validationResult } from 'express-validator';
import validator from 'validator';

const PORT = 5555;
const app = express();

app.use(cors())
app.use(express.json());

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(
    path.resolve(__dirname, '/dist'),
    {
        maxAge: '1y', etag: false
    },
))


// CREATE controller
app.post('/exercises/:uid',

    //Input Validations
    body('name').isLength({ min: 1 }).withMessage("Invalid name."),
    body('reps').isInt({ min: 1 }).withMessage("Invalid reps."),
    body('weight').isInt({ min: 1 }).withMessage("Invalid weight."),

    body('date').custom(value => {
        if (!validator.isDate(value)) {
            const newDate = new Date(value)
            if (!validator.isDate(newDate)) {
                throw new Error("Invalid date.");
            }
        }
        // Indicates the success of this synchronous custom validator
        return true;
    }),

    body('unit').custom(value => {
        if (value !== "kgs" && value !== "lbs" && value !== "kms" && value !== "miles") {
            throw new Error("Invalid units.");
        }
        // Indicates the success of this synchronous custom validator
        return true;
    }),

    (req, res) => {
        //If list of errors is NOT empty, return error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        exercises.createExercise(
            req.body.name,
            req.body.reps,
            req.body.weight,
            req.body.unit,
            req.body.date,
            req.params.uid
        )
            .then(exercise => {
                res.status(201).json(exercise);
            })
            .catch(error => {
                console.log(error);
                res.status(400).json({ error: "Invalid request" });
            });
    });


// RETRIEVE controller
// GET exercise by ID
app.get('/exercises/:_id', (req, res) => {
    const exerciseId = req.params._id;
    exercises.findExerciseById(exerciseId)
        .then(exercise => {
            if (exercise !== null) {
                res.status(200).json(exercise);
            } else {
                res.status(404).json({ error: "Exercise not found" });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: "Request to retrieve exercise failed" });
        });

});

// GET list of all exercises
app.get('/allExercises/:uid', (req, res) => {
    exercises.getExercises(req.params.uid)
        .then(exercises => {
            res.status(200).json(exercises)
        })
});

// DELETE Controller
app.delete('/exercises/:uid/:_id', (req, res) => {
    exercises.deleteById(req.params._id, req.params.uid)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: "Exercise not found" });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ error: "Request to delete an exercise failed" });
        });
});

// UPDATE controller
app.put('/editExercises/:uid/:_id',

    //Input Validations
    body('name').isLength({ min: 1 }).withMessage("Invalid name."),
    body('reps').isInt({ min: 1 }).withMessage("Invalid reps."),
    body('weight').isInt({ min: 1 }).withMessage("Invalid weight."),

    body('date').custom(value => {
        if (!validator.isDate(value)) {
            const newDate = new Date(value)
            if (!validator.isDate(newDate)) {
                throw new Error("Invalid date.");
            }
        }
        // Indicates the success of this synchronous custom validator
        return true;
    }),

    body('unit').custom(value => {
        if (value !== "kgs" && value !== "lbs" && value !== "kms" && value !== "miles") {
            throw new Error("Invalid units.");
        }
        // Indicates the success of this synchronous custom validator
        return true;
    }),

    (req, res) => {
        //If list of errors is NOT empty, return error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        exercises.replaceExercise(
            req.params._id,
            req.body.name,
            req.body.reps,
            req.body.weight,
            req.body.unit,
            req.body.date,
            req.params.uid
        )
            .then(numUpdated => {
                if (numUpdated === 1) {

                    res.status(200).json({
                        _id: req.params._id,
                        name: req.body.name,
                        reps: req.body.reps,
                        weight: req.body.weight,
                        unit: req.body.unit,
                        date: req.body.date,

                    })
                } else {
                    res.status(404).json({ error: "Exercise not found" });
                }
            })
            .catch(error => {
                console.error(error);
                res.status(400).json({ error: "Request to update an exercise failed" });
            });
    });

/*
app.get("*", (req,res) => {

})

*/


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});