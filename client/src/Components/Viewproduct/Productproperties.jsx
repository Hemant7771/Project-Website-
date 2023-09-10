import React from 'react'

const Productproperties = (props) => {
    const properties = props.properties;
    if (!properties) {
        return <></>; 
    }
    return (
        Object.keys(properties).map((key) => {
        return properties[key]!=="nil"? (
            <div class="properties">
            <div class="properties-key">{key}</div>
            <div class="properties-value">{properties[key]}</div>
        </div>
        ):<></>
      })  
    )
}

export default Productproperties