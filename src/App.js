import React from 'react';
import './App.css';
import Header from './Header'
import CitiesSelect from './CitiesSelect';
import Button from '@material-ui/core/Button';
const axios = require('axios')

function handleClick (event) {

  console.log("click")
  console.log(event.target)

}

class App extends React.Component{

  
  handleChange = async (event,id) => {

    console.log("selected")
    const data = await this.apiCalls(event.target.value)
    console.log(data)
    console.log(id)
  
  }

  apiCalls = async (cityName) => {
  console.log(cityName)
  let pollutionData = await axios.get(`https://www.numbeo.com/api/city_pollution?api_key=io5uqpgu5pcbws&query=${cityName}`)
  let pollutionIndex = pollutionData.data.index_pollution !== undefined ? Number(pollutionData.data.index_pollution.toFixed(2)) : undefined
  let healthCareData = await axios.get(`https://www.numbeo.com//api/city_healthcare?api_key=io5uqpgu5pcbws&query=${cityName}`)
  let healthIndex = healthCareData.data.index_healthcare !== undefined ? Number(healthCareData.data.index_healthcare.toFixed(2)) : undefined
  let crimeData = await axios.get(`https://www.numbeo.com/api/city_crime?api_key=io5uqpgu5pcbws&query=${cityName}`)
  let crimeIndex = crimeData.data.index_crime !== undefined ? Number(crimeData.data.index_crime.toFixed(2)) : undefined
  let safetyIndex = crimeData.data.index_safety !== undefined ? Number(crimeData.data.index_safety.toFixed(2)) : undefined
  let trafficData = await axios.get(`https://www.numbeo.com/api/city_traffic?api_key=io5uqpgu5pcbws&query=${cityName}`)
  let trafficIndex = trafficData.data.index_traffic !== undefined ? Number(trafficData.data.index_traffic.toFixed(2)) : undefined
  return({healthIndex,crimeIndex,trafficIndex,pollutionIndex,safetyIndex})
  }

  state = {
    city1: {}, city2:{}
  }

  render() {
    
    return (
      
      <div className="App">
      <Header/>
      <div className='CityInput' >
        <CitiesSelect handleTextFieldChange={this.handleChange,'city'} buttonid='city1'/>
        <CitiesSelect handleTextFieldChange={this.handleChange} buttonid='city2'/>
      </div>
      <Button variant="contained" color="primary" onClick = {handleClick} type = "submit">
        Fight
      </Button>
      </div>
    );
  }
}

export default App;
