import React,{ useState } from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react'
import { WiHumidity } from 'react-icons/wi'
import { RiCloudWindyLine } from 'react-icons/ri'
import { BsThermometerHalf } from 'react-icons/bs'
// import weat from "./images/weat.jpg"
function Wheather() {
    const [inputValue,setInputValue] = useState("")
    const [WheatherInfo,setWheatherInfo] = useState("")
    const [error, setError] = useState(false);
    const [callApi, setCallApi] = useState(false);

    
    useEffect(()=>{
        
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue ? inputValue : "karachi" }&appid=77e48f26ea7bf5f3590ff253f04319a0&units=metric`)
        .then((res)=>{
            setWheatherInfo(res.data)
            // setName(res.data)
            setError(false)
            // console.log(res.data.main.feels_like);
            // console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
            setError(true)
        },[callApi])
    })
    
        const handleForm = (e)=>{
            // console.log(inputValue);
            e.preventDefault()
            if(!inputValue){
                return alert("field is empty")
                
            }
            setCallApi(!callApi)
        }
    // console.log("whater Info ",WheatherInfo);

    const clear= ()=>{
        setInputValue("")
    }
  return (
        <div className='bg-dark main-dabba'>
            <div className='container-fluid searc text-center'>
                <h1 className='text-center text-white p-2'>Weather Search</h1>
            </div>
            <div className="container">

      <form onSubmit={handleForm} >
                <input
                className='inputFiled '
                value={inputValue}
                type="text"
                onChange={(e) => {
                    setInputValue(e.target.value)
                }
            }
            placeholder="Search Username..."
            />
            </form>
            <button className="btn btn-primary clearBtn" 
            onClick={clear}>
                Clear Search
            </button>
            </div>
            {error === false ? (
                <div className="container mt-4 dabba ">
                    <h2 className='text-center text-white mb-0 '>{WheatherInfo ? WheatherInfo.name : "State Name"}</h2>
                <div className='container  ravi p-4'>
                    <div className="row raaw align-items-center justify-content-between">
                            <div className="col-lg-6 col-md-6  tempera text-center gra"><h2>{WheatherInfo ? WheatherInfo.main.temp.toFixed(0) : "state temperature"}℃</h2></div>
                            <div className='col-lg-6 col-md-6 text-center'>
                            <ul>
                            <li className=" " ><WiHumidity color='black' size={40}/> Humidity: {WheatherInfo ? WheatherInfo.main.humidity : "state humidity"}</li>
                            <li className=""><BsThermometerHalf color='red' size={40}/> pressure: {WheatherInfo ? WheatherInfo.main.pressure : "state pressure"}</li>
                            <li className=""><RiCloudWindyLine color='brown' size={40}/> Wind: {WheatherInfo ? WheatherInfo.wind.speed : "User Public Repos"}</li>
                            </ul>

                            </div>
                        {/* <>Humidity: {WheatherInfo ? WheatherInfo.main.humidity : "state humidity"}</>
                        <li>pressure: {WheatherInfo ? WheatherInfo.main.pressure : "state pressure"}</li>
                        <li>temp: {WheatherInfo ? WheatherInfo.main.temp : "state temperature"}</li>
                        <li>Wind: {WheatherInfo ? WheatherInfo.wind.speed : "User Public Repos"}</li> */}
                    </div>
                    </div>
                    </div>
                ):(
                    <h1>ERROR</h1>
                )}
    </div>
  )
}

export default Wheather
// b07c09fe617214b0d916c5df88d407eb