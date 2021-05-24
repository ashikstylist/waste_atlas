import React from 'react';
//import {Map, TileLayer, Marker, Popup} from 'react-leaflet'


const map = ({posts}) => {
    return (
        
        <div>
            {posts.map((geo, key) => (
                
              
                
                <h2>{geo.name}</h2>
                  
               
                
                
            ))}
        </div>
    ) 
};

export default map;
