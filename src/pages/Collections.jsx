import React from 'react'

function Collections() {
    return (
        <>
            <div className='p-6'>
                {/* Modal for adding new book */}
                <button onClick={() => document.getElementById('my_modal_1').showModal()} className='btn btn-accent text-slate-700 shadow-lg'>Add New Book</button>
                <dialog id="my_modal_1" className="modal">
                    
                    <div className="modal-box space-y-2">
                        <h1 className='text-slate-700 text-lg p-2'>Enter the Details of the book</h1>
                        {/* name */}
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Enter Name of book" />
                        </label>
                        {/* Author */}
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Author" />
                        </label>
                        <div className="modal-action">
                            <button className='btn btn-outline'>Add</button>
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-outline btn-error">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>

                {/* Books display card */}
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 rounded-lg bg-slate-200 p-6'>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure>
                            <img className='h-[300px] w-[250px]'
                                src="https://carlsagan.com/wp-content/uploads/2020/09/COSMOS-updated-cover.jpg"
                                alt="Movie" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">New Book is released!</h2>
                            <h1>Name : Cosmos</h1>
                            <h1>Author : Carl Sagan</h1>
                            <h1>Price : $199</h1>
                            <div className="flex justify-between card-actions mt-4 justify-end">
                                <button className="btn btn-outline">Edit</button>
                                <button className="btn btn-error">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Collections