import React, { useEffect } from 'react'
import Add from '../components/Add'
import { useDispatch, useSelector } from 'react-redux'
import { showBooks } from '../redux/slices/booksDetailSlice'

function Collections() {

    const dispatch = useDispatch()

    const { books, loading } = useSelector((state) => state.books)

    useEffect(() => {
        dispatch(showBooks())
        console.log("Data in books : ", books)
    }, [])

    if (loading) {
        return (<h2>Loading</h2>)
    }

    return (
        <>
            <div className='p-6'>
                {/* Modal for adding book */}
                <Add />
                {/* Books display card */}
                {books.length == 0 ? (
                    <div className='flex justify-center p-6'>
                        <p>No books found !!</p>
                    </div>
                ) : (
                    <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-4 rounded-lg bg-slate-200 p-6'>
                        {books.map((item) => (
                                                <div className="card card-side w-auto bg-base-100 shadow-xl">
                            <figure>
                                <img className='h-[300px] w-[250px]'
                                    src={item.bimage}
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                            <div className="badge badge-accent">NEW</div>
                                <h1>Name : {item.bname}</h1>
                                <h1>Author : {item.author}</h1>
                                <h1>Price : $199</h1>
                                <div className="flex justify-between card-actions mt-4">
                                    <button onClick={() => document.getElementById('my_modal_2').showModal()} className="btn btn-outline">Edit</button>
                                    <button className="btn btn-error">Delete</button>
                                </div>
                                {/* Modal for Editing */}
                                <dialog id="my_modal_2" className="modal">

                                    <div className="modal-box space-y-2">
                                        <h1 className='text-slate-700 text-lg p-2'>Edit the Details of the book</h1>
                                        {/* name */}
                                        <label className="input input-bordered flex items-center gap-2">
                                            <i className="fa-solid fa-book" style={{ color: "#808080", }} />
                                            <input type="text" className="grow" placeholder="Enter Name of book" />
                                        </label>
                                        {/* Author */}
                                        <label className="input input-bordered flex items-center gap-2">
                                            <i className="fa-solid fa-user fa-xs" style={{ color: "#808080", }} />
                                            <input type="text" className="grow" placeholder="Author" />
                                        </label>
                                        {/* Image URl */}
                                        <label className="input input-bordered flex items-center gap-2">
                                            <i className="fa-regular fa-image fa-xs" style={{ color: "#808080", }} />
                                            <input type="text" className="grow" placeholder="Image Url" />
                                        </label>
                                        <div className="modal-action">
                                            <button className='btn btn-outline'>Update</button>
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-outline btn-error">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>

                            </div>
                        </div>    
                        ))}

                    </div>
                )}

            </div>

        </>
    )
}

export default Collections