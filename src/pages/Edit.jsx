import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { updateBook } from '../redux/slices/booksDetailSlice'
import { toast } from 'react-toastify'

function Edit() {

    //getting id from url
    const { id } = useParams()

    const dispatch = useDispatch()
    const nav = useNavigate()

    const [updateData, setUpdateData] = useState()

    const { books, loading } = useSelector((state) => state.books)


    useEffect(() => {
        if (id) {
            const singleBook = books.filter((item) => item.id === id);
            setUpdateData(singleBook[0])

        }

    }, []);

    const newData = (e) => {
        setUpdateData({...updateData, [e.target.name] : e.target.value})
    }

    console.log("Updated Data :",updateData)

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateBook(updateData))
        nav('/collections')
        toast.success("Details Updated !!")

    }

    return (
        <>
            <div className="grid grid-cols-1 mb-36 mt-10 mx-10 lg:mx-60">

                <div className=" space-y-2">
                    <h1 className='text-slate-700 text-xl mb-6 mt-6'>Update the Details</h1>
                    {/* name */}
                    <label className="input input-bordered flex items-center gap-2">
                        <i className="fa-solid fa-book" style={{ color: "#808080", }} />
                        <input onChange={newData} name='bname' value={updateData && updateData.bname} type="text" className="grow" placeholder="Enter Name of book" />
                    </label>
                    {/* Author */}
                    <label className="input input-bordered flex items-center gap-2">
                        <i className="fa-solid fa-user fa-xs" style={{ color: "#808080", }} />
                        <input onChange={newData} name='author' value={updateData && updateData.author} type="text" className="grow" placeholder="Author" />
                    </label>
                    {/* Image URl */}
                    <label className="input input-bordered flex items-center gap-2">
                        <i className="fa-regular fa-image fa-xs" style={{ color: "#808080", }} />
                        <input onChange={newData} name='bimage' value={updateData && updateData.bimage} type="text" className="grow" placeholder="Image Url" />
                    </label>
                    <div className=" pt-2">
                        <div method="">
                            <button onClick={handleUpdate} className='btn btn-outline me-2'>Update</button>
                            <Link to={'/collections'} >
                                <button className="btn btn-outline btn-error">Close</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Edit