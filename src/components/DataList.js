import React from 'react';

function DataList({ items, selectedFilter }) {

    return (
        <div>
            {(selectedFilter === '') ? (
                // if no button has been clicked (no filter has been set) display prompting text
                <div className='empty'>
                    Make a selection
                </div>
            ) : (
                    // display the items that satisfy the condition of the selected filter (if the item includes the appropriate tag)
                    <div className='list'>
                        {items.filter(item => item.tag === selectedFilter).map(filteredContent => (
                            <p className='list-item'>
                                {filteredContent.content}
                            </p>
                        ))}
                    </div>
                )}
        </div>
    )
}

export default DataList