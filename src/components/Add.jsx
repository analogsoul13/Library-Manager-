import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBookData } from '../redux/slices/booksDetailSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Add() {

    const [books, setBooks] = useState({})

    const dispatch = useDispatch()

    const getBookData = (e) => {
        setBooks({...books, [e.target.name] : e.target.value}) 
        //console.log(books);
        
    }

    const nav = useNavigate()

    const handleAdd = (e) => {
        e.preventDefault();
        console.log("books",books);       
        dispatch(createBookData(books))
        nav('/')
        toast.success("Book Added Succecfully!!")
    }  

    return (
        <>
            {/* Modal for adding new book */}
            <button onClick={() => document.getElementById('my_modal_1').showModal()} className='btn hidden sm:flex btn-accent text-slate-700 shadow-lg'>Add New Book</button>
            <dialog id="my_modal_1" className="modal">

                <div className="modal-box space-y-2">
                    <h1 className='text-slate-700 text-lg p-2'>Enter the Details of the book</h1>
                    {/* name */}
                    <label className="input input-bordered flex items-center gap-2">
                        <i className="fa-solid fa-book" style={{ color: "#808080", }} />
                        <input name='bname' onChange={getBookData} type="text" className="grow" placeholder="Enter Name of book" />
                    </label>
                    {/* Author */}
                    <label className="input input-bordered flex items-center gap-2">
                        <i className="fa-solid fa-user fa-xs" style={{ color: "#808080", }} />
                        <input name='author' onChange={getBookData} type="text" className="grow" placeholder="Author" />
                    </label>
                    {/* Image URl */}
                    <label className="input input-bordered flex items-center gap-2">
                        <i className="fa-regular fa-image fa-xs" style={{ color: "#808080", }} />
                        <input name='bimage' onChange={getBookData} type="text" className="grow" placeholder="Image Url" />
                    </label>
                    <div className="modal-action pt-2">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={handleAdd} className='btn btn-outline me-2'>Add</button>
                            <button className="btn btn-outline btn-error">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default Add