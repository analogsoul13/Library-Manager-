import React from 'react'

function Collections() {
    return (
        <>
            <div className='p-6'>
                <button onClick={()=>document.getElementById('my_modal_1').showModal()}  className='btn btn-accent text-slate-700 shadow-lg'>Add New Book</button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 bg-slate-200 p-6'>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure>
                            <img className='h-[300px] w-[250px]'
                                src="https://carlsagan.com/wp-content/uploads/2020/09/COSMOS-updated-cover.jpg"
                                alt="Movie" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">New Book is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
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