import React from 'react'

const reducer2 = (initialData = {}, action) => {
    switch (action.type) {
        case "ADD": 
            return {
                ...initialData,
                count: action.count + action.increment
            }
        case "SUBTRA": 
            return {
                ...initialData,
                count: action.count - action.increment
            }
        case "CHECK":
            return {
                ...initialData,
                increment: !action.increment
            }
        default: 
            return initialData
    }
}

export default reducer2
