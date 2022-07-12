import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [fakeAPI, setFakeAPI] = useState([]);
  console.log(fakeAPI);

  useEffect(() => {
    omStore();
  }, [])


  const omStore = async () => {
    const omResponse = await fetch('https://fakestoreapi.com/products')
    console.log(omResponse);
    const jsonData = await omResponse.json();
    console.log(jsonData);
    setFakeAPI(jsonData);
  }
  // omStore();

  return (
    <>


      {/* https://fakestoreapi.com/products/1 */}
      <section className="fake_section">
        <div className="container">
          <h1>Fake API Store</h1>
          <div className="box">
            {fakeAPI.map((values) => {
              return (
                <>
                  <div className="content">
                    <h4>{values.title}</h4>
                    <p>{values.description}</p>
                    <img src={values.image} alt="" />
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
