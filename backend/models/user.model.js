import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    }, 

    userName:{
        type : String,
        required : true,
        unique : true
    },


    email:{
        type : String,
        required : true,
        unique : true
    },


    password :{
        type : String,
        required : true,
    },

    phone :{
        type : Number
    },


    bio:{
        type: String
    },

    followers:[

    ],

    followings:[

    ],

    posts:[


    ],

    stories:[


    ],

    reels:[

    ],

    profileImage:{
        type : String //url
    }



})


const User = mongoose.model('User', userSchema)


export default User