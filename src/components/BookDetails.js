import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const BookDetails = () => {

 const [books, setBooks] = useState([])
 const [newBook, setNewBook] = useState({"title": "", "author":""})
 const [show, setshow] = useState(false)
 const [editedBook, setEditedBook] = useState(null)


  useEffect(()=>{
    bookInfo()
  }, [])


function addBook(){
    axios.post("http://localhost:8000/posts", newBook).then(()=>{
        bookInfo()
    })
}



function deleteBook(id){
    axios.delete(`http://localhost:8000/posts/${id}`).then(()=>{
        bookInfo()
    })
}

function editBook(book){
   setEditedBook({...book})
   setshow(true)
}


function updatedBook(){
    axios.put(`http://localhost:8000/posts/${editedBook.id}`, editedBook).then((res)=>{
        bookInfo(res)
    })
}

function bookInfo(){
    axios.get("http://localhost:8000/posts").then((res)=>{
        setBooks(res.data)
    
    })
}


  return (
     <>
     <div>BookDetails</div>

      {
        !show && (<div>
            <input type="text" placeholder='enter the title' onChange={(e)=>{setNewBook({...newBook, title:e.target.value})}} />
            <input type="text" placeholder='enter the author' onChange={(e)=>{setNewBook({...newBook, author:e.target.value})}} />
            <button onClick={()=>{addBook()}}> Add book </button>
       </div>)
      }
      {
        show && (
            <div>
           <input type="text" placeholder='enter the title'  value={editedBook.title} onChange={(e)=>{setEditedBook({...editedBook, title:e.target.value})}} />
           <input type="text" placeholder='enter the author'  value={editedBook.author}  onChange={(e)=>{setEditedBook({...editedBook, author:e.target.value})}} />
           <button onClick={()=>{updatedBook()}}> updated book </button>
              </div>
        )
      }
      
    





     {
        books.length>0 && books.map((book)=>{
           return <li>
                   <p> Title : {book.title}</p>
                   <p> Author :{book.author}</p>
                   <button onClick={()=>{deleteBook(book.id)}}> delete </button>
                   <button onClick={()=>{editBook(book)}}> edit </button>


                </li>
        })
     }
     
     
     </>
  )
}
