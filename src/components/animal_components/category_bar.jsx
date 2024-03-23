import React from 'react';

const CategoryButton = (props) => {

    return (
        <div className={props.style}>
            {props.category}
        </div>
    )
}

export default CategoryButton;