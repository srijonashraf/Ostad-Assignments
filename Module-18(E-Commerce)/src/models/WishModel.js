const mongoose=require('mongoose');
const WishSchema=mongoose.Schema({
        productID:{type:mongoose.Schema.Types.ObjectId,required:true},
        userID:{type:mongoose.Schema.Types.ObjectId,required:true},
    },
    {timestamps:true,versionKey:false}
)
const WishModel=mongoose.model('wishes',WishSchema)
module.exports=WishModel