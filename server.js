const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors('*'))

const mysql = require('mysql2');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     :  'nidhi',
    password :  'nidhi',
    database :  'punedac'
   });

   app.get('/', (request, response) => {
    const statement = `select * from employee`
    connection.query(statement, (error, data) => {
      if (error) {
        response.send('error')
      } else {
        response.send(data)
      }
    })
  })

  app.post('/', (request, response) => {
    var statement = 
    `insert into employee values(${request.body.id}, '${request.body.e_name}','${request.body.email}','${request.body.password}',${request.body.emp_id},'${request.body.dname}','${request.body.doj}')`;
    console.log(query);
  
    connection.query(statement, (error, result)=>{
            //     var data = JSON.stringify(result) 
            //     response.setHeader("Content-Type","application/json");
            //     response.write(data);
            //     console.log(response.write(data))
            // response.end();
            if(error==null){
              if(error==null){
                  var data=JSON.stringify(result);
                  response.setHeader("Content-Type","application/json")
                  response.write(data); 
                  //response.end(); 
              }
              else{
                  response.setHeader("Content-Type","application/json")
                  response.write(error)
                  //response.end();
              }
              response.end();
  
          }
  
    })
  })

app.delete('/:id', (request, response) => {
  var statement=`delete from Employee where id='${request.body.id}'`
  response.send('inside container')
  connection.query(statement, (error, result)=>{
                        
                  //             var data = JSON.stringify(result) 
                  //             response.setHeader("Content-Type","application/json");
                  //             response.write("deleted sucessfully");
                  //             response.end();   
                  // })
                  if(error==null){
                    if(error==null){
                        var data=JSON.stringify(result);
                        response.setHeader("Content-Type","application/json")
                        response.write(data); 
                        //response.end(); 
                    }
                    else{
                        response.setHeader("Content-Type","application/json")
                        response.write(error)
                        //response.end();
                    }
                    response.end();
        
                } 
              })
})


app.listen(4006, '0.0.0.0', () => {
  console.log('server started on port 4006')
})

