import React from 'react';
import {Route, Routes} from 'react-router-dom';
import priceConverterApi from "../../utils/PriceConverterApi";

export const App = () => {

  const handleGetProducts = () => {
    priceConverterApi
      .getProducts()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
  };

  const handleClickPost = () => {
    console.log('pop')
    const data = {
      "products": [
        {
          "id": 19,
          "title": "Motorola",
          "description": "Hello Moto!!!",
          "price": 52,
          "price_rub": 47656,
          "discountPercentage": 50,
          "rating": 8,
          "stock": 194,
          "brand": "Motorola",
          "category": "smartphones",
          "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
          "images": [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
          ]
        }]
    };
    priceConverterApi
      .postProducts(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
  }

  return (

      <div className='page'>
        <Routes>
          <Route exact path='/' element={
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              height: '40px',
              width: '100px',
              margin: '50px 50px'
            }}>
              <button onClick={handleGetProducts}>Get</button>
              <button onClick={handleClickPost}>POST</button>
            </div>

          }>
          </Route>
          </Routes>
      </div>

  );
}

//export default App;
