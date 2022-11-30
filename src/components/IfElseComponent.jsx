import React from 'react'
import Category from './Category';

function IfElseComponent() {
    const category = 'vegs';

    if(category == 'veg'){
        return <Category name="Veg"/>
    }else{
        return <Category name="non-veg"/>
    }
}

export default IfElseComponent