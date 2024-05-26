import mongoose from "mongoose"

const studentActivitySchema = mongoose.Schema({
    fullname : {
        type : String
    },
    email : {
        type: String,
        required : [true, "Please add email"],
        unique : [true, "Email address already taken"]
    },
    role : {
        type :String,
        required : [true, "Please select role"]
    },
    course : {
        type :Array,
    },
    notes : {
        type :Array,
    },
    mentor : {
        type :Array,
    },
    achievements : {
        type :Array,
    },
    coach : {
        type :Array,
    },
    organisation : {
        type :Array,
    }
},

{
    timestamps : true
});

export default mongoose.model("studentactivities", studentActivitySchema)