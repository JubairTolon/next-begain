import Axios from 'axios';
import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Products.module.css';


export const getStaticProps = async () => {
    const data = await Axios.get("https://fakestoreapi.com/products");
    return {
        props: {
            productData: data.data,
        },
    };
};

const ProductList = ({ productData }) => {
    // const imagePath = "https://fakestoreapi.com/products"

    console.log(productData)
    return (
        <div>
            <h1 className={styles.products__page__title}>THIS IS PRODUCT PAGE</h1>
            {
                productData.map((product, index) => {
                    return <div key={index}>
                        <Image src={product.image} alt="product image" width='200' height='200' priority />
                        <p>price: {product.price}</p>
                    </div>
                })
            }
        </div>
    );
};

export default ProductList;