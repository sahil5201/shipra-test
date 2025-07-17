import React from 'react'

const TrendIconDown = () => (
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.75 13.333L2.33156e-07 13.333L4.66226e-07 10.667L3.75 10.667L3.75 -5.46392e-07L6.25 -3.27835e-07L6.25 10.667L10 10.667L10 13.333L6.25 13.333L6.25 16L3.75 16L3.75 13.333Z" fill="#FF4E64" />
    </svg>
)

const TrendIconUp = () => (
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.25 2.66699H10V5.33301H6.25V16H3.75V5.33301H0V2.66699H3.75V0H6.25V2.66699Z" fill="#FFB319" />
    </svg>
)

function TrendIndicator() {
    return (
        <div className='flex justify-end items-center gap-x-1.5 mr-3'>
            <div className='size-6 bg-white rounded-full shadow flex justify-center items-center'>
                <TrendIconDown />
            </div>
            <div className='size-6 bg-white rounded-full shadow flex justify-center items-center'>
                <TrendIconDown />
            </div>
            <div className='size-6 bg-white rounded-full shadow flex justify-center items-center'>
                <TrendIconUp />
            </div>
            <div className='size-6 bg-white rounded-full shadow flex justify-center items-center'>
                <TrendIconDown />
            </div>
            <div className='size-6 bg-white rounded-full shadow flex justify-center items-center'>
                <TrendIconUp />
            </div>
        </div>
    )
}

export default TrendIndicator