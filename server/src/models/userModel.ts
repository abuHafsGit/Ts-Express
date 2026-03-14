import mongoose from "mongoose"

export const users = [
    {
        name: 'shakil',
        email: 'shakil@gmail.com',
        password: '12012'
    },
    {
        name: 'shakil',
        email: 'shakil@gmail.com',
        password: '12012'
    },
    {
        name: 'shakil',
        email: 'shakil@gmail.com',
        password: '12012'
    }
]

type userType = {
    id?: string,
    name: string,
    email: string,
    password: string
}

const userSchema = new mongoose.Schema<userType>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,


    },
    password: {
        type: String,
        required: true
    }

}, { timestamps: true })

const User = mongoose.model('Users', userSchema)

export default User