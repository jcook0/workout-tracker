import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if (err) {
        res.status(500).json({ error: '500: Connection to the server failed.' });
    } else {
        console.log('Successfully connected to MongoDB Exercise collection using Mongoose.');
    }
});

// Define the collection's schema.
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: Date, required: true },
    userId: {type: String, required: true}
});

// Compile the model from the schema.
const Exercise = mongoose.model("Exercise", exerciseSchema);


// create model
const createExercise = async (name, reps, weight, unit, date, userId) => {
    const exercise = new Exercise({
        name: name,
        reps: reps,
        weight: weight,
        unit: unit,
        date: date,
        userId: userId
    });
    return exercise.save();
}


// Retrieve all exercises and return a promise.
const getExercises = async (uid) => {
    const query = Exercise.find({userId : uid });
    return query.exec();
};

// Retrieve based on the ID and return a promise.
const findExerciseById = async (_id) => {
    const query = Exercise.findById(_id);
    return query.exec();
}


// delete model based on ID
const deleteById = async (_id, uid) => {
    const result = await Exercise.deleteOne({ _id: _id, userId: uid });
    return result.deletedCount;
};


// REPLACE model
const replaceExercise = async (_id, name, reps, weight, unit, date, uid) => {
    const result = await Exercise.replaceOne({ _id: _id }, {
        name: name,
        reps: reps,
        weight: weight,
        unit: unit,
        date: date,
        userId: uid
    });
    return result.modifiedCount;
}

// Export our variables for use in the controller file.
export { createExercise, getExercises, findExerciseById, replaceExercise, deleteById }