from flask import Flask
from flask import request, make_response, jsonify
import MySQLdb
import dbutil
import json

print "vinod"
app = Flask(__name__)
users = [
  {"name": "Paul", "email": "paul@gmail.com", "id": 1},
  {"name": "Vinod", "email": "vinod@gmail.com", "id": 2},
  {"name": "Ringo", "email": "ringo@example.com", "id": 3},
  {"name": "John", "email": "john@example.com", "id": 4},
  {"name": "George", "email": "george@example.com", "id": 5}
]


@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response


@app.route("/test", methods=['GET'])
def getCoupouns():
  return jsonify({"a": 10})


@app.route("/email/check/<email>", methods=['GET'])
def checkIfEmailExist(email):
  users = dbutil.getAllUsers()
  filteredUsers = filter(lambda user: str(user["email"]) == email, users)
  return jsonify({"match": len(filteredUsers)})


@app.route("/users", methods=['GET'])
def getUsers():
  users = dbutil.getAllUsers()
  return jsonify(users)


@app.route("/users/<userId>", methods=['GET'])
def getUser(userId):
  # filteredUsers = filter(lambda user: str(user["id"]) == userId, users)
  sql = "select * from users where id={}".format(userId)
  users = dbutil.getOneRow(sql)
  return jsonify(users)


@app.route("/users/<userId>", methods=['DELETE'])
def deleteUser(userId):
  # Update Users
  return jsonify({"status": "User Deleted"})


@app.route("/users/<userId>", methods=['PUT'])
def updateUser(userId):
  # Update Users
  post_data = json.loads(request.data)
  print post_data

  return jsonify({"status": "User Updated"})


@app.route("/users", methods=['POST'])
def createUser():
  # Update Users
  try:
    post_data = json.loads(request.data)

    sql = "insert into users(name,email) values('{}','{}') ".format(post_data['name'], post_data['email'])
    print sql
    print post_data
    dbutil.execute_query([sql])
    return jsonify({"status": "User Created"})
  except Exception, ex:
    print ex
    return jsonify({"status": "Error in adding User"})


def filterUsers(userId, user):
  return str(user["id"]) == userId


if __name__ == "__main__":
  app.run()
