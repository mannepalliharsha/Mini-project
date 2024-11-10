import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();
async function insertUser(email : string ,firstname : string,lastname : string, password : string){
    const res=  await prisma.name.create({
            data :{
                  email,
                  firstname,
                  LastName :lastname,
                  password 
            },
            select : {
                  id : true,
                  password : true,
                  firstname : true
            }
       })
       console.log(res);
}
insertUser("harsha123@gmail.com","mannepalli","harshavardhan","12345");
