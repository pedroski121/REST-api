# HNG Task 2 SIMPLE REST API
<p>This API was developed to perform the basic CREATE, READ, UPDATE, DELETE operations on a database<p/>
<p>The UML file can be found at https://github.com/pedroski121/REST-api/blob/main/UML.png </p>

<p>The live server is temporarily running at https://hng-task2-vmzm.onrender.com</p>

<h2>To test locally</h2>
<ol>
  <li>Download or clone the repository</li>
  <li>create a .env file in your root directory</li>
  <li>create a database on mongodb.com and get the mongo uri. if not sure of your ip address when creating the database, set the ip to 0.0.0.0 to access from anywhere</li>
  <li>add your mongo url in the form <i>MONGO_URI='your mongo uri goes here'</i></li>
  <li>make sure node is installed </li>
  <li>using your terminal in the folder root directory, run <i>npm run dev</i>for development purposes or <i>npm run start</i> for none development purposes</li>
</ol>

<h1>To use from a client</h1>
<h2> To CREATE(post request)</h2>
<ol>
  <li>create your data object with a "name" as a field and it value ie {name:"value"}. The name should be a string</li>
  <li>with this data object, make a post request to /api</li>
  <li>if successful, you should expect the response in the form<br/> {
    "success": boolean,
    "person": {
        "name": string,
        "id": string
    }
}</li> 
<li>If not successful it will be in the form  <br/>{success:boolean, message:string}</li>
</ol>

<h2>TO READ(get request)</h2>
<ol>
  <li>make a get request to /api/:user_id</li>
  <li>if successful, the response will be in form <br/>{name:string, id:string}</li>
  <li>If not successful it will be in the form  <br/>{success:boolean, message:string}</li>
</ol>

<h2>TO UPDATE(patch request)</h2>
<ol>
  <li>create the data object with the new "name" ie {name:"value"}. The name should be a string</li>
  <li>make a patch request to /api/:user_id</li>
  <li>if successful, the response will be in form <br/>{name:string, id:string}</li>
  <li>If not successful it will be in the form  <br/>{success:boolean, message:string}</li>

</ol>

<h2>TO DELETE(delete request)</h2>
<ol>
    <li>make a get request to /api/:user_id</li>
  <li>If successful or not successful it will be in the form  <br/>{success:boolean, message:string}</li>
</ol>
