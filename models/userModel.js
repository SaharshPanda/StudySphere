import mongoose from "mongoose"

const userDataSchema = mongoose.Schema({
    fullname : {
        type : String,
        required : [true, "Please add fullname"]
    },
    email : {
        type: String,
        required : [true, "Please add email"],
        unique : [true, "Email address already taken"]
    },
    password : {
        type :String,
        required : [true, "Please add password"]
    },
    enabled : {
        type :String,
    },
    role : {
        type :String,
        required : [true, "Please select role"]
    },
},

{
    timestamps : true
});

export default mongoose.model("userData", userDataSchema)