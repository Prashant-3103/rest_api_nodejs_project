import {v4 as uuidv4} from 'uuid'
let users =[]

 export const createUsers = (req,res)=>{
    const user = req.body;
    users.push({...user, id: uuidv4()})
    res.send(`user with the user name${user.firstName} added to the database `)
    }


    export const getUsers = (req,res)=>{
        console.log(users);
        res.send(users)
    }


    export const  getUser = (req,res)=>{
        const {id} = req.params;
        const foundUser = users.find((user) => user.id === id)
        res.send(foundUser)
    }


    export const deleteUser = (req, res) => {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
 
        const updatedUsers = users.filter((user) => user.id !== parsedId);

        if (updatedUsers.length === users.length) {

          res.status(404).send(`User with the id ${id} not found in the database.`);
        } else {
          users = updatedUsers;
          res.send(`User with the id ${id} deleted from the database.`);
        }
      }


      export const updateUsers = (req,res)=>{
        const { id } = req.params;
        const {firstName, lastName, age} = req.body;
        const user = users.find((user) => user.id ===id)

    if(firstName){
        user.firstName = firstName;
    }
    if(lastName){
        user.lastName = lastName;

    }
    if(age){
        user.age = age;
    }

    res.send(`user with the id ${id} has ben updated`)


      }
