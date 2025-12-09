import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/AppSlice';

const Header = () => {

    // 1. I will dispatch an action
    // 2. this dispatch come from useDispatch
    // 3. useDispatch is a hook that we get from react-redux library
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
        // toggle menu does not have any payload, it just needs our state information
    }

    return (
        <div className=' grid grid-flow-col p-2 m-2 shadow-lg'>
            <div className='flex items-center col-span-1'>
                <img
                    onClick={() => toggleMenuHandler()}
                    className='h-8 mx-2 cursor-pointer'
                    alt="logo"
                    src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
                />

                {/* giving it a tag bcz we do not have react router link */}
                < a href='/' >
                    <img
                        className='h-12'
                        alt="Youtube icon"
                        src='https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png'
                    />
                </a >
            </div>
            <div className=' flex justify-center items-center col-span-10 '>
                <input
                    className="rounded-l-full w-2/3 border border-gray-400"
                    type="text" />
                <button
                    className='bg-gray-200 rounded-r-full border border-gray-400'>
                    <img
                        className='h-6'
                        src='https://icon-library.com/images/search-icon-image/search-icon-image-8.jpg'
                        alt="search"
                    />
                </button>
            </div>

            <div>
                <img
                    className='h-8 col-span-1'
                    alt="user-icon"
                    src='https://www.nicepng.com/png/full/128-1280406_view-user-icon-png-user-circle-icon-png.png'
                />
            </div>
        </div >
    )
}

export default Header