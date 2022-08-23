import { Component } from 'react';
import logo from '../assets/logo512.png';
import 'bulma/css/bulma.min.css';

const center = ({
    margin: "auto",
    width: "50%",
    padding: "10px"
  })

const MainPage = () =>{
    return (
        <div className="container-fluid"> 
            <div style={{ width: 300, margin: 'auto' }}>
                <img alt="logo" src={logo}/> 
                <h1>Silahkan masukan keyword buku yang anda cari pada input di atas....</h1>
            </div>
        </div>
    );
}

export default MainPage;
