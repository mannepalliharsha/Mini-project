import {PrismaClient} from "@prisma/client"
const prisma=new PrismaClient();
interface updateOne{
      firstname : string,
      lastname  : string
}
async function updateUser(email : string ,{
    firstname,
    lastname
} : updateOne){
      
    const res= await prisma.name.update({
          where :{
               email : email
          } ,
          data :{
              firstname : firstname,
              LastName : lastname 
          },
          select : {
                firstname : true,
                LastName : true 
          }
    })
    console.log(res);
      
}
updateUser( 'harsha@gmail.com',{
   firstname : 'Natakarani',
    lastname : 'Surya'
});