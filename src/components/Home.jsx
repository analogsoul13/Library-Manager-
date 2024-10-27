import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <section>
                {/* Hero Section */}
                <div className='relative overflow-hidden mx-3 mt-4 sm:mt-0 rounded-lg'>
                    <video className='absolute w-full h-full object-cover' src="/assets/bg-video.mp4"
                        autoPlay loop muted playsInline></video>
                    <div className='relative rounded-lg mx-3'>
                        <div className='flex h-[600px] flex-col items-center justify-center col-span-1 sm:ml-16 mt-6 sm:mt-0 p-6'>
                            <h1 className='text-5xl font-bold text-white shadow '>Manage Your Book Collection</h1>
                            <Link to={'/collections'}>
                                <button className='btn  w-44 mt-6 shadow-lg\'>See Collections</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='grid items-center mt-3 '>
                    <div className='flex justify-center'>
                        <h1 className='text-3xl text-slate-700 p-3 font-bold'>What you can do</h1>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6 pt-6 mx-3">
                        <div className='flex flex-col items-center justify-center bg-secondary-content rounded-md min-h-[250px] shadow-lg'>
                            <img className='w-40 h-40' src="https://images.vexels.com/media/users/3/136492/isolated/preview/9405e34df4de152cba0e31c040f5675e-open-book-round-icon-by-vexels.png" alt="" />
                            <h1 className='text-xl'>Add your favorite books</h1>
                        </div>

                        <div className='flex flex-col items-center justify-center bg-primary-content rounded-md min-h-[250px] shadow-lg'>
                            <img className='w-40 h-40' src="https://cdn.pixabay.com/photo/2015/12/22/04/00/edit-1103599_1280.png" alt="" />
                            <h1 className='text-xl'>Edit Details </h1>
                        </div>

                        <div className='flex flex-col items-center justify-center bg-secondary-content rounded-md min-h-[250px] shadow-lg'>
                            <img className='w-40 h-40' src="https://gifdb.com/images/high/delete-375-x-498-gif-jprn0ix3p6djwxd7.gif" alt="" />
                            <h1 className='text-xl'>Delete books</h1>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-4 mx-3">
                    <div className='grid grid-cols-1 items-center'>
                        <div className='flex justify-center'>
                            <h1 className='text-3xl text-slate-700 font-bold items-center'>Let me tell you about this</h1>
                        </div>

                        <p className='mt-4 mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, ut ducimus. Voluptates dolore blanditiis minima, suscipit, corrupti assumenda nihil earum vel eum qui libero ducimus sunt! Culpa atque incidunt iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat accusantium mollitia facere! Mollitia quidem in fuga dicta, perferendis iste dolorem error optio eum quam voluptas itaque aut quos. Officia maxime, blanditiis harum modi optio dignissimos accusantium possimus ipsa nostrum qui. Perferendis ut minima vero mollitia molestiae quis neque distinctio!</p>
                    </div>
                </div>

            </section>






        </>
    )
}

export default Home