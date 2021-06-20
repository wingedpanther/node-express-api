import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req,res) => { //get ALL users
    res.send(users);
}

export const createUser = (req,res)=>{
    const user = req.body; //saving reqeust to a variable
    const userID = uuidv4();
    const userWithId = { ...user, id: userID} //adding into the existing array using spread operator
   
    users.push(userWithId); //adding user to the array
  
    res.send(`${userWithId.firstname} is added successfully!`);
}

export const getUser = (req,res) =>{
    const { id } = req.params;
    const foundUser = users.find(user => user.id == id);
    res.send(foundUser)
}

export const deleteUser = (req,res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);
    res.send(`${id} deleted `);
}

export const updateUser = (req,res) =>{
    const { id } = req.params;
    const {firstname, lastname, age} = req.body; //data to update/patch
    const foundUser = users.find(user => user.id == id);
 

    if(firstname) foundUser.firstname = firstname;
    if(lastname) foundUser.lastname = lastname;
    if(age) foundUser.age = age;

    res.send(`User ${firstname} has been updated`)


}
