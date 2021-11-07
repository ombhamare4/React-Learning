import {useParams} from 'react-router-dom'
const ProductDetails = () => {

    const param = useParams();
    console.log(param.productId);

    return(
        <div>
            <h1>Product Details</h1>
            <p>{param.productId}</p>
        </div>
    )
};

export default ProductDetails;