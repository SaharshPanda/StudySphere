import mongoose from "mongoose"

const coachActivitySchema = mongoose.Schema({
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
    mentorActivity : {
        type :Array,
    },
    classCreated : {
        type :Array,
    },
    organisation : {
        type :Array,
    }
},

{
    timestamps : true
});

export default mongoose.model("coachactivities", coachActivitySchema)