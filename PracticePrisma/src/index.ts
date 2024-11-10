import {PrismaClient} from "@prisma/client"
const prisma=new PrismaClient();
interface typechecking{
     name : string,
     date : string,
     Author : string
}
async function Books({
     name,
     date,
     Author,
} : typechecking){
     const insertdata=await prisma.books.create({
          data :{
               name ,
               date,
               Author
          }
     })
     console.log(insertdata);
      
}
Books({name :"maths",date : "18-10-0=2003",Author : "srinivasramunjan"})
async function search(id : number){
     const data=await prisma.books.findFirst({
          where : {
              id : id
          }
     })
     console.log(data);
}
async function update(id : number,Author :string){
      const updatedone=await prisma.books.update({
            where : {
                  id  : id
            },
            data : {
                  Author : Author
            }
      })
      console.log(updatedone);
}
// search(1);
async function Delete(id : number){
      const data=await prisma.books.delete({
           where : {
                id : id 
           }
      })
      console.log(data);
}
// update(1,"harsha");
// Delete(1);