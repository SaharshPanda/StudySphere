import mongoose from "mongoose"

const roleAuthorizationSchema = mongoose.Schema({
    role : {
        type : String,
        required : [true, "Please add role"]
    },
    module : {
        type: Array,
        required : [true, "Please add modules"],
    },
},

{
    timestamps : true
});

export default mongoose.model("roleauthorizations", roleAuthorizationSchema)