import React from 'react'
import { useParams } from 'react-router-dom'
import FeaturedProducts from './FeaturedProducts';
import NewProducts from './NewProducts';

const RenderProdCategory = () => {
    const {prodCategory} = useParams();
    console.log(prodCategory)
    if(prodCategory === 'new'){
        return <NewProducts/>;
    }else if(prodCategory === 'featured'){
        return <FeaturedProducts/>
    }
}

export default RenderProdCategory