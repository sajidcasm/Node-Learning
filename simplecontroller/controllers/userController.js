
import userList from "../models/userModel.js"
export default function handleUsers(req,resp){

    const userdata= userList();

    resp.render('user', {users : userdata});
} 