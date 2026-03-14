import mongoose from "mongoose";

export const conectDB = () => {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/Expres_typScript_Api');
        console.log('database is connected succesfully')
    } catch (error) {
        console.log("database is not conect")
    }
}