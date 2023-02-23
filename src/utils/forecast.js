const request = require('postman-request')

const forecast = (lat,long,callback)=>{
    // Set a new API
    const url = 'http://api.weatherstack.com/current?access_key=979caf590fb10554e9657716adf021bb&query='+ lat +','+ long
    request ({url,json:true},(error,{body}={})=>{
        if(error){
            callback("Please check your connection",undefined)

        }else if(body.error){
            callback("Can't find location, Try another one",undefined)
        }else{
            const temp = body.current.temperature
            const feelslike =body.current.feelslike
           const weather_descriptions= body.current.weather_descriptions
        //    const localtime= body.location.localtime
            callback(undefined,`${weather_descriptions}. The temperatuer is ${temp}°. Feels like ${feelslike}°  `)
        }
    })

}


module.exports=forecast