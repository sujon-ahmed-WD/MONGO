 
import './App.css'

function App() {
  const handleFrom=event=>{
    event.preventDefault();
    const From=event.target;
    const name=From.name.value;
    const email=From.email.value;
    const user={name,email}
    console.log(user);

fetch('https://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>
    {
      if(data.insertedId){
        alert('hello')
       }
    }
    )

  }

  return (
    <>
 
      <h1>Simple CRUD</h1>
      <form onSubmit={handleFrom}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <button>Submet</button>
      </form>
    </>
  )
}

export default App
