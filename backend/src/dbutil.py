import MySQLdb
import MySQLdb.cursors
from MyConfig import MyConfig as cfg

import json
import math


def getOneRow(query):
  dbcon = getDbConn()

  cursor = dbcon.cursor()
  cursor.execute(query)

  result = cursor.fetchone()
  return result


def getDataTable(query):
  list_data = []
  dbcon = getDbConn()

  cursor = dbcon.cursor()
  cursor.execute(query)

  results = cursor.fetchall()
  for row in results:
    list_data.append(row)
  dbcon.close()
  return list_data


def execute_query(list_sql):
  dbcon = getDbConn()
  for sql in list_sql:
    print sql
    if (sql.strip() != ""):
      cursor = dbcon.cursor()
      cursor.execute(sql)
  dbcon.commit()
  dbcon.close()


def getDbConn():
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db, cursorclass=MySQLdb.cursors.DictCursor)

  return dbcon


def getAllUsers():
  sql = " select * from users"
  users = getDataTable(sql)
  return users
