from flask import Flask
from flask import request, make_response, jsonify
app = Flask(__name__)
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

@app.route("/countries/<countryName>", methods=['POST', 'GET'])
def getCountriesData(countryName):
    data ={
        "capital":"Delhi",
        "cities":["Delhi","Dehradun","Haldwani"]
    }
    return jsonify(data)

@app.route("/weather/<cityName>", methods=['POST', 'GET'])
def getWeather(cityName):
    data ={
        "name":"Delhi",
        "weather":{
            "temprature":89,
            "humidity": "dry"
    }}

    return jsonify(data)

@app.route("/population/<cityName>", methods=['POST', 'GET'])
def getPopulation(cityName):
    data ={
        "name":"Delhi",
        "population": 1000000
    }
    return jsonify(data)

if __name__ == "__main__":
    app.run()