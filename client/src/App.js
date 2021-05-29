import React, { Component } from 'react';
import './App.css';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet'
import posts from './geodata.json'
import Pop from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import MarkerClusterGroup from 'react-leaflet-markercluster';




var customIcon = L.icon({
  
    iconUrl: 'https://lh3.googleusercontent.com/proxy/a1bxA6zEZOGdtmx5HeheImgZSU_2ixwX7AwXoubVD0ddstJvpzWvBoONuRHBLGRTqPzaBpJcW6JKepkNOJj0ts-wFTSh3H83avDi9QydmeX_EMA',
    iconSize:     [40, 43], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  

  
class App extends Component {
   
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
   this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    if(this.state.value === ''){
      this.setState({value: event.target.value});
    }
    else{
      alert('Reset Filter')
      
    }

  }

  handleClick(event){
    window.location.reload(false);
  }



  

  render() {

  // Required for Database Connection (Header Required)

 /* const[posts,setPosts] = useState([{
    nr: '',
    number:'',
    city_number:'',
    location_number:'',
    name: '',
    address: '',
    lat: '',
    lng: '',
    category:''
  }])

  
  useEffect(() => {
     fetch('http://localhost:8000/geo').then(res => {
        if(res.ok){
          return res.json()
        }
     }).then(jsonRes => setPosts(jsonRes))
  })

   */
  


  const filteredCountry = posts.filter(post => post.category === this.state.value)

  if(this.state.value === 'country'){
    customIcon.options.iconUrl = 'https://img.icons8.com/officel/2x/marker.png';
  }
  else if(this.state.value === 'city'){
    customIcon.options.iconUrl = 'https://www.coastaldiscos.co.uk/wp-content/uploads/2017/03/pin-purple.png';
  }
  else if(this.state.value === 'Dumpsites'){
    customIcon.options.iconUrl = 'https://img.icons8.com/officel/2x/marker.png';
  }
  else if(this.state.value === 'Sanitary Landfills'){
    customIcon.options.iconUrl = 'https://i0.wp.com/taekwondoamerica.org/wp-content/uploads/2018/04/Location-Marker-Icon.png';
  }
  else if(this.state.value === 'MBT'){
    customIcon.options.iconUrl = 'https://img.icons8.com/plasticine/2x/marker.png';
  }
  else if(this.state.value === 'WtE'){
    customIcon.options.iconUrl = 'http://rajasthaneventmanagement.com/wp-content/uploads/2019/07/Best-wedding-planner-jaipur-corporate-event-Organizer-balloon-decoration-rajasthan-event-management-office-address.png';
  }
  else if(this.state.value === 'Biological Treatment'){
    customIcon.options.iconUrl = 'https://img.icons8.com/plasticine/2x/marker.png';
  }
 



    return(
       
        <div>
        
        <Pop trigger={<img alt='filter_icon'  className="filter-icon" src='https://image.flaticon.com/icons/png/512/4305/4305510.png' />} position="left top">
            <div className="filter-box">

                <div >
                  <input value='country' onChange={this.handleChange} type="radio" name="wastedata"   />
                  <label className='label-name'>Countries</label>
                </div>
            
                <div >
                  <input value='city' onChange={this.handleChange} type="radio" name="wastedata" />
                  <label className='label-name'>City</label>
                </div>

                <div >
                  <input value='Dumpsites' onChange={this.handleChange}  type="radio" name="wastedata"  />
                  <label className='label-name'>Dumpsites</label>
                  </div>
                  
                  <div >
                  <input type="radio" onChange={this.handleChange}  name="wastedata" value="Sanitary Landfills" />
                  <label className='label-name'>Sanitary Landfills</label>
                  </div>

                  <div >
                  <input onChange={this.handleChange}  type="radio" name="wastedata" value="MBT" />
                  <label className='label-name'>MBT</label>
                  </div>

                  <div >
                  <input onChange={this.handleChange} type="radio" name="wastedata" value="WtE"  />
                  <label className='label-name'>Incinetor Plants</label>
                  </div>
                  
                  <div >
                  <input value='Biological Treatment' onChange={this.handleChange} type="radio" name="wastedata" />
                  <label className='label-name'>Biological Treatment</label>
                  </div>

                  <div >
                    <div >
                        <img alt='reset'   className='reset' src='https://icon-library.com/images/reboot-icon/reboot-icon-22.jpg' />
                        <button className='reset-button' onClick={this.handleClick}  value=''>Reset</button>
                    </div>
                </div>
            </div>
        </Pop>

        <MapContainer className="markercluster-map" 
          center={[51.0, 19.0]}
          zoom={4}
          maxZoom={18}>
         <TileLayer
           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
 <MarkerClusterGroup>
          {filteredCountry.map(post => {
              return(
               
            <Marker icon={customIcon}  position={[post.lat , post.lng]}>
                      <Popup>
                        <h2 Style="text-align:center"> 
                          {post.name}
                          
                      </h2>
                         <div dangerouslySetInnerHTML={{__html: post.address}} />
                      
                      </Popup>
                    </Marker> 
                    
              )
            }
           )}

</MarkerClusterGroup>        
       </MapContainer>
       </div>
       
      )
  }
}

export default App;