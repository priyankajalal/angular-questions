from flask import Flask
from MyConfig import MyConfig as cfg
import json
from flask import request, make_response, jsonify
import dbutil

app = Flask(__name__)


@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response


@app.route("/emp", methods=['GET'])
def getEmpData():
  return jsonify(dbutil.getEmps())


@app.route("/emp/<id>", methods=['GET'])
def getEmpById(id):
  return jsonify(dbutil.getEmpsById(id))

@app.route("/empName/<name>", methods=['GET'])
def getEmpByName(name):
  return jsonify(dbutil.getEmpsByName(name))


@app.route("/emp/<id>", methods=['DELETE'])
def deleteEmp(id):
  return jsonify(dbutil.getEmpsById(id))


if __name__ == "__main__":
  app.run()
