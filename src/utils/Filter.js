import React from 'react'

function Filter({ selectedFilter, setSelectedFilter }) {
    // sets the filter of the list based on the tag that matched the value of the button clicked
    const onClick = (selectedFilter) => {
        setSelectedFilter(selectedFilter)
    }

    return (
        <div className='btn-container'>
            <button value='character' onClick={(e) => onClick(e.target.value)} className='btn btn-color'>
                Characters
            </button>
            <button value='location' onClick={(e) => onClick(e.target.value)} className='btn btn-color'>
                Locations
            </button>
            <button value='quote' onClick={(e) => onClick(e.target.value)} className='btn btn-color'>
                Quotes
            </button>
        </div>
    )
}

export default Filter