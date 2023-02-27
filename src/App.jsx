import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  var [post, setpost] = useState([''])
  var [comment, setcomment] = useState([''])
  var [album, setalbum] = useState([""])
  var [todo, settodo] = useState([""])
  var[load,setload]=useState(false)
  var [user, setuser] = useState([""])
  var [photo, setphoto] = useState([""])
  var [number,setnumber]= useState([""])
  var [temp,settemp]=useState([""])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setpost(json))
  }, [])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => setcomment(json))
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => setalbum(json))
  }, [])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => settodo(json))
  }, [])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setuser(json))
  }, [])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setphoto(json))
      
  }, [])
  function asd(e){
    setnumber(e.target.value)
    console.log(number)
    settemp(photo.slice(0,number))
  }
 
  return (
    <div>
      <div className='mx-5'>
        <ul class="nav nav-pills  bg-dark" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">posts</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">comments</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">albums</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-photo" type="button" role="tab" aria-controls="pills-photo" aria-selected="false">photos</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-todo" type="button" role="tab" aria-controls="pills-todo" aria-selected="false">todos</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-user" type="button" role="tab" aria-controls="pills-user" aria-selected="false">users</button>
          </li>
        </ul>
        <div class="tab-content  " id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <h1 className='px-5'>POSTS</h1>
            <div className='d-flex flex-wrap'>

            
            {
              post.map((p, i) => {
                return <div className=' p-3'>
                  <h5 >ID: {p?.id}</h5>
                  <h3> Title: {p?.title}</h3>
                  <h5> Body: {p?.body}</h5>
                </div>
              })
            }
            </div>
          </div>
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <h1 className='px-5'>COMMENTS</h1>
            {
              comment.map((k, l) => {
                return <div className='p-3'>
                  <h5>ID: {k?.id}</h5>
                  <h3> Name: {k?.name}</h3>
                  <h5> Email: {k?.email}</h5>
                </div>
              })
            }
          </div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <h1 className='px-5'>Albums</h1>
            {
              album.map((g, h) => {
                return <div className='p-3'>
                  <h5>ID: {g?.id}</h5>
                  <h3> Title: {g?.title}</h3>

                </div>
              })
            }
          </div>
          <div class="tab-pane fade" id="pills-photo" role="tabpanel" aria-labelledby="pills-photo-tab">
          <h1 className='px-5'>photo</h1>
          {
            load?<div class="d-flex justify-content-center">
            <div class="spinner-border text-dark" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>:""}
          <input type="range" max="5000" min="1" onChange={(e)=>{asd(e)}}/>
            {
             temp && temp.map((p, t) => {
                return <div className='card p-3'>
                  <h5 className='text-dark'>ID: {p?.id}</h5>
                  <h3 className='text-dark'> Title: {p?.title}</h3>
                  <img src={p?.url} alt="" height="200px" width="200px" />
                  <a href={p?.thumbnailUrl}>{p?.thumbnailUrl}</a>
                
                </div>
              })
            }
          </div>
          <div class="tab-pane fade" id="pills-todo" role="tabpanel" aria-labelledby="pills-todo-tab">
            <h1 className='px-5'>Todos</h1>
            {
              todo.map((h, j) => {
                return <div  className={h.completed?"bg-success":"bg-danger"}>
                  <h5>ID: {h?.id}</h5>
                  <h3> Title: {h?.title}</h3>
                  

                </div>
              })
            }
          </div>
          <div class="tab-pane fade" id="pills-user" role="tabpanel" aria-labelledby="pills-user-tab">
            <h1 className='px-5'>Todos</h1>
            <div className=''>
            {
              user.map((d, f) => {
                return <div className='card p-2'>
                  <h5>ID: {d?.id}</h5>
                  <h3> Name: {d?.name}</h3>
                  <h5>User name:{d?.username}</h5>
                  <h5>City: {d?.address?.city}</h5>
                  <h5>Zipcode: {d?.address?.zipcode}</h5>

                </div>
              })
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
