import React,{Component} from 'react'

class Weather extends Component{

	state={
		data:null,
		city:""

	}
	_getWeather(){
		var baseUrl="https://api.openweathermap.org/data/2.5/weather"
		var city=this.state.city
		var apiKey="3679d13b474c5ffaa833753f960b888a"
		var url=`${baseUrl}?q=${city}&appid=${apiKey}`
		console.log(url)

		fetch(url).then(res=>{
			res.json().then(data=>{
				this.setState({data})
			})
		})
	}
render(){
	return(

		<div>
		     <input value={this.state.city} onChange={e=>
		     	                                      this.setState({city:e.target.value})}></input>
	         <button onClick={()=>this._getWeather()}>Get Weather</button>
	         {
	         	this.state.data? <div> {Math.round(this.state.data.main.temp-273.15)} °C   <br/>
                                  {this.state.data.weather[0].description}
                                  <br/>
                                  <img src={"http://openweathermap.org/img/w/"+this.state.data.weather[0].icon+".png"}/>
	         	</div>:null
	         }
	         
        </div>

	)
}

}

export default Weather