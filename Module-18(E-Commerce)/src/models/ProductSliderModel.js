const mongoose=require('mongoose');
const ProductSliderSchema=mongoose.Schema({

        title:{type:String,required:true},
        des:{type:String,required:true},
        price:{type:String,required:true},
        img:{type:String,required:true},

        productID:{type:mongoose.Schema.Types.ObjectId,required:true},

    },
    {timestamps:true,versionKey:false}
)
const ProductSliderModel=mongoose.model('productsliders',ProductSliderSchema)
module.exports=ProductSliderModel