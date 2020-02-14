import MySQLdb
import MySQLdb.cursors
from MyConfig import MyConfig as cfg
import pandas
import pymongo
import utils
from dateutil import parser
from datetime import datetime, date, timedelta
import dateutil.relativedelta
import datetimeutil as dtutil
import numbers
import numpy as np
import datetimeutil
import json
import math
import dataframe_utils


def getEmps():
  list_dict_data = []
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db, cursorclass=MySQLdb.cursors.DictCursor)

  cursor = dbcon.cursor()
  query = """select *  from  emp"""

  cursor.execute(query)

  results = cursor.fetchall()
  for row in results:
    list_dict_data.append(row)
  dbcon.close()
  return list_dict_data

def getEmpsById(id):
  list_dict_data = []
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db, cursorclass=MySQLdb.cursors.DictCursor)

  cursor = dbcon.cursor()
  query = """ select * from emp where id = {} """.format(id)

  cursor.execute(query)

  results = cursor.fetchall()
  for row in results:
    list_dict_data.append(row)
  dbcon.close()
  return list_dict_data

def getEmpsByName(name):
  list_dict_data = []
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db, cursorclass=MySQLdb.cursors.DictCursor)

  cursor = dbcon.cursor()
  query = """ select * from emp where name like '{}%' """.format(name)
  cursor.execute(query)

  results = cursor.fetchall()
  for row in results:
    list_dict_data.append(row)
  dbcon.close()
  return list_dict_data



def getSymbolData(list_symbols):
  list_dict_data = []
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db, cursorclass=MySQLdb.cursors.DictCursor)

  cursor = dbcon.cursor()
  formatted_symbols = map(lambda x: "'" + x + "'", list_symbols)
  symbols = ','.join(formatted_symbols)

  query = "SELECT * from list_symbol where symbol in ({})".format(symbols)

  cursor.execute(query)
  results = cursor.fetchall()
  for row in results:
    list_dict_data.append(row)
  dbcon.close()
  return list_dict_data


def deletePortfolio(portfolioId):
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db, cursorclass=MySQLdb.cursors.DictCursor)

  cursor = dbcon.cursor()
  query_update = """update model_portfolio set status = 0  where portfolioId ={}""".format(portfolioId)
  query_delete = """delete from model_portfolio where  portfolioId ={} and ismodel =0""".format(portfolioId)
  cursor.execute(query_update)
  cursor.execute(query_delete)
  dbcon.commit()
  dbcon.close()


def getRateOfReturn(portfolio_id):
  query = """SELECT sum(ps.allocation*
            (CASE when f.ten_year != 0 then f.ten_year  
            when f.five_year !=0 then f.five_year else  f.one_year END ))/sum(ps.allocation)  as rateOfReturn FROM 401k_funds f
                        join 401k_portfolio_funds ps on ps.symbol = f.symbol
                        where ps.portfolio_id = {}; 
        """.format(portfolio_id)

  rateOfReturn = getOneRow(query, "rateOfReturn")
  return rateOfReturn


def createNewPortflio(name, startingcash, userId, isModel):
  dbcon = getDbConn()

  cursor = dbcon.cursor()
  query = """insert into model_portfolio(name,startingcash,status,isModel,user_id) values ('{}',{},1,{},{})""".format(
    name, startingcash, isModel, userId)

  cursor.execute(query)
  dbcon.commit()
  dbcon.close()


def getPortfolioId(name, user_id):
  query = """SELECT portfolioid from model_portfolio where name= '{}' and user_id ={}; 
        """.format(name, user_id)

  portfolioid = getOneRow(query, "portfolioid")
  return portfolioid


def execute_query(list_sql):
  dbcon = getDbConn()
  for sql in list_sql:
    print sql
    if (sql.strip() != ""):
      cursor = dbcon.cursor()
      cursor.execute(sql)
  dbcon.commit()
  dbcon.close()


def setStartingCash(startingCash, portfolioId):
  sql = "update model_portfolio set startingCash = {} where portfolioId ={}".format(startingCash, portfolioId)
  execute_query([sql])


def saveTransaction(portfolioId, transactions):
  dbcon = getDbConn()

  multipleRows = []
  for transaction in transactions:
    commissionPerTrade = float(transaction['commission']) / float(transaction['qty'])
    transactionRow = "('{}',{},'{}',{},'{}',{},{})".format(transaction['symbol'], transaction['qty'],
                                                           transaction['date'], portfolioId, transaction['side'],
                                                           transaction['price'], commissionPerTrade)
    multipleRows.append(transactionRow)

  multipleRowsFormatted = ",".join(multipleRows)
  cursor = dbcon.cursor()
  query = """insert into transactions(symbol,qty,date,portfolioid,side,price,commission) 
         values {}""".format(multipleRowsFormatted
                             )
  cursor.execute(query)
  dbcon.commit()
  dbcon.close()


def deleteTransaction(transactions):
  dbcon = getDbConn()
  idsToDelete = map(lambda transaction: str(transaction['id']), transactions)
  idsToDelete = ",".join(idsToDelete)
  cursor = dbcon.cursor()
  query = """delete from transactions where id in ({})""".format(
    idsToDelete
  )

  cursor.execute(query)
  dbcon.commit()
  dbcon.close()


def getTransactions_Cash(portfolioId):
  dbcon = getDbConn()

  list_dict_data = []

  cursor = dbcon.cursor()
  query_transactions = """select portfolioid,cash,date,name from model_portfolio_cash where portfolioid  = {}""".format(
    portfolioId)

  cursor.execute(query_transactions)

  results = cursor.fetchall()
  for row in results:
    list_dict_data.append(row)
  dbcon.close()
  return list_dict_data


def get_alert_text(value):
  data_map = {0: "Neutral", 1: "Very Bearish", 2: "Bearish", 3: "Bullish", 4: "Very Bullish"}
  if value in data_map:
    return data_map[value]
  else:
    return ""


def getSymbolTechnicalData(symbols):
  formattedSymbols = map(lambda x: "'" + x + "'", symbols.split(","))
  formattedSymbols = ','.join(formattedSymbols)
  sql = """select ls.symbol,ls.companyname,ls.exchange,ls.source,ls.assetid as asset_id,ls.sectorid as sector_id,
            ls.industryid as industry_id,ls.isactive, stats.*,
            l.last as price,l.price_change as priceChange ,
            l.change_pct as priceChangePct,ls.companyname as companyName,
            ls.alternate_name as alternate_name,
            t.rating   ,t.mom,t.macd, t.macdhist, 
            round(100*(l.last-t.price_Monthly)/t.price_Monthly ,2)as mtd,
            round(100*(l.last-t.price_Monthly)/t.price_Monthly,2)as priceChangeMonthly,
            
            round(100*(l.last-t.price_Weekly)/t.price_Weekly ,2)as wtd,

            round(100*(l.last-t.price_Yearly)/t.price_Yearly ,2)as ytd,
            round(100*(l.last-t.price_Yearly)/t.price_Yearly ,2)as priceChangeYearly,
            round(100*(l.last-t.price_2year)/t.price_2year ,2)as priceChange2Year,
            round(100*(l.last-t.price_3year)/t.price_3year ,2)as priceChange3Year,

            round(100*(l.last-t.price_oneMonth)/t.price_oneMonth ,2)as change_oneMonth_pct,
            round(l.last-t.price_oneMonth,2)as change_oneMonth,
                        
            round(l.last-t.price_oneyearbeforedate ,2)as change_oneyearbeforedate,
            round(100*(l.last-t.price_oneyearbeforedate)/t.price_oneyearbeforedate ,2)as change_oneyearbeforedate_pct,
            
            round(100*(l.last-t.price_Quaterly)/t.price_Quaterly ,2)as qtd, 
            
            rsi,sma50,sma20,sma100,sma200,sma150,t.inter_trend,t.long_trend,
            t.short_trend,t.macd_trend ,l.52weekhigh as high52, l.52weeklow as low52
			      from list_symbol ls
            left join live_symbol l on l.symbol =ls.symbol
            left join technicals_symbol t on ls.symbol= t.symbol
            left join stats_latest as stats on ls.symbol = stats.symbol
            where ls.symbol in ({}) """.format(formattedSymbols)
  data = getDataTable(sql)

  return data


def getFirstTransaction(portfolioId):
  first_transaction_date = ""
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db, cursorclass=MySQLdb.cursors.DictCursor)

  cursor = dbcon.cursor()
  query_transactions = """select min(date) as date
            from model_portfolio m 
              join transactions t on m.portfolioid= t.portfolioid 
              where m.portfolioid  = {}  """.format(
    portfolioId)

  cursor.execute(query_transactions)

  results = cursor.fetchall()
  for row in results:
    first_transaction_date = row["date"]
  dbcon.close()
  return first_transaction_date


def getTransactions(portfolioId):
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db, cursorclass=MySQLdb.cursors.DictCursor)

  list_dict_data = []

  cursor = dbcon.cursor()
  query_transactions = """select t.id,t.symbol,t.price,t.date,qty,side,commission
            from model_portfolio m 
              join transactions t on m.portfolioid= t.portfolioid 
              where m.portfolioid  = {}  
              order by t.symbol , t.date , t.id """.format(
    portfolioId)

  cursor.execute(query_transactions)

  results = cursor.fetchall()
  for row in results:
    list_dict_data.append(row)
  dbcon.close()
  return list_dict_data


def get_cash_transactions(portfolioId):
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db, cursorclass=MySQLdb.cursors.DictCursor)

  list_dict_data = []

  cursor = dbcon.cursor()
  query_transactions = """select portfolio_id,qty,amount,pay_date,ex_dividend_date,symbol,next_payout from dividend_paid where portfolio_id= {} """.format(
    portfolioId)

  cursor.execute(query_transactions)

  results = cursor.fetchall()
  for row in results:
    list_dict_data.append(row)
  dbcon.close()
  return list_dict_data


def getAllSymbols():
  list_data = []
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db, cursorclass=MySQLdb.cursors.DictCursor)

  cursor = dbcon.cursor()
  query = """select ticker from intrinio_securities"""

  cursor.execute(query)
  results = cursor.fetchall()
  for row in results:
    list_data.append(row['ticker'])
  dbcon.close()
  return list_data


def getModelPortfolios(userId, isModel):
  list_dict_data = []

  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db, cursorclass=MySQLdb.cursors.DictCursor)
  cursor = dbcon.cursor()

  query = """select m.name,m.portfolioid as id,m.startingcash as startingCash 
                    from model_portfolio  as m 
                    where m.status =1 and m.isModel={}
                    and (user_id = {} or user_id is null)
                    """.format(isModel, userId)

  cursor.execute(query)
  results = cursor.fetchall()
  for row in results:
    list_dict_data.append(row)

  dbcon.close()
  return list_dict_data


def getModelPortfolioDetails(portfolioId):
  list_dict_data = []
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db, cursorclass=MySQLdb.cursors.DictCursor)

  cursor = dbcon.cursor()
  query = "select portfolioid,name,startingcash as startingCash from model_portfolio where portfolioid={}".format(
    portfolioId)

  cursor.execute(query)

  row = cursor.fetchone()

  dbcon.close()
  return row


def getZackDetails(listSymbols):
  if len(listSymbols) == 0:
    return []
  list_dict_data = []
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db, cursorclass=MySQLdb.cursors.DictCursor)

  cursor = dbcon.cursor()
  formattedSymbols = map(lambda x: "'" + x + "'", listSymbols)
  symbols = ','.join(formattedSymbols)
  query = """select *  from  zach_rating where symbol in ({})""".format(symbols)

  cursor.execute(query)

  results = cursor.fetchall()
  for row in results:
    list_dict_data.append(row)
  dbcon.close()
  return list_dict_data


def getBasicDetails(listSymbols):
  if len(listSymbols) == 0:
    return {}
  list_dict_data = {}
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db, cursorclass=MySQLdb.cursors.DictCursor)

  cursor = dbcon.cursor()
  formattedSymbols = map(lambda x: "'" + x + "'", listSymbols)
  symbols = ','.join(formattedSymbols)
  query = """select l.symbol,e.companyName as name,
        COALESCE( s.name  ,"N/A") as sector, 
        COALESCE(i.industryname ,'N/A') as  industry,
        last as currentPrice,change_pct as changePct ,price_Change as priceChange , 
        COALESCE(a.asset_name ,'N/A' ) as asset_name
         from 
               live_symbol l 
              join list_symbol e on e.symbol = l.symbol
              left join sectors s on e.sectorid = s.id
              left join industries i on e.industryid = i.industryid
              left join assets a on e.assetid= a.asset_id
              left join etf_asset es on e.etf_asset_id = es.id
              where l.symbol in   ({})""".format(symbols)

  cursor.execute(query)

  results = cursor.fetchall()
  for row in results:
    list_dict_data.update({row["symbol"]: row})
  dbcon.close()
  return list_dict_data


def save_dataframe(df, table_name):
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db, cursorclass=MySQLdb.cursors.DictCursor)

  df.to_sql(con=dbcon, name=table_name, if_exists='append', flavor='mysql')
  dbcon.close()


def get_data_by_collection(coll, query):
  list_news = []
  con_mongo = pymongo.MongoClient(cfg.mongodb_host, port=cfg.mongodb_port)
  db_chartlab = con_mongo.chartlab
  data = db_chartlab[coll].find_one(query)
  if data is not None:
    del data['_id']
  con_mongo.close()
  return data


def getNews(symbol_list, limit):
  list_news = []
  con_mongo = pymongo.MongoClient(cfg.mongodb_host, port=cfg.mongodb_port)
  db_chartlab = con_mongo.chartlab
  news_data = db_chartlab.news.find({"symbol": {"$in": symbol_list}})
  for item in news_data:

    item["news"].sort(key=lambda x: parser.parse(x["pubDate"]), reverse=True)
    sortedTopNewsItems = item["news"][0:limit]
    for newsItem in sortedTopNewsItems:
      title = newsItem["title"].replace('&quot;', '')
      list_news.append(
        {"symbol": item["symbol"], "title": title, "link": newsItem["link"],
         "time": utils.getFormattedStr(parser.parse(newsItem["pubDate"]))})

  con_mongo.close()
  return list_news


def getStartDateFromPeriod(period):
  end_date = datetime.today()
  if (period == "ytd"):
    start_date = end_date.replace(month=1, day=1)
  elif (period == "20Day"):
    start_date = end_date + dateutil.relativedelta.relativedelta(days=-20)
  elif (period == "1month"):
    start_date = end_date + dateutil.relativedelta.relativedelta(months=-1)
  elif (period == "3month"):
    start_date = end_date + dateutil.relativedelta.relativedelta(months=-3)
  elif (period == "6month"):
    start_date = end_date + dateutil.relativedelta.relativedelta(months=-6)
  elif (period == "1year"):
    start_date = end_date + dateutil.relativedelta.relativedelta(years=-1)
  elif (period == "3year"):
    start_date = end_date + dateutil.relativedelta.relativedelta(years=-3)
  day_adjust = 1
  if start_date.weekday() == 5:  # saturday
    day_adjust = 1
  if start_date.weekday() == 6:  # sunday
    day_adjust = 2
  start_date = start_date - dateutil.relativedelta.relativedelta(days=day_adjust)

  return start_date


def getSymbolHistorical(symbol_list, period):
  try:
    listResult = []
    end_date = datetime.today()
    start_date = getStartDateFromPeriod(period)
    con_mongo = pymongo.MongoClient(cfg.mongodb_host, port=cfg.mongodb_port)
    db_chartlab = con_mongo.chartlab
    result = db_chartlab.symbolshistorical.find(
      {"symbol": {"$in": symbol_list}, "date": {'$lt': end_date, '$gte': start_date}}).sort("date", 1)
    symbol_data = {}
    first_price = {}
    for item in result:
      symbol = item["symbol"]
      if symbol in symbol_data:
        price_data = symbol_data[symbol]
      else:
        price_data = []
        symbol_data.update({symbol: price_data})
        first_price.update({symbol: item["close"]})
      start_price = first_price[symbol]
      close = item['close']
      diff = round(100 * (close - start_price) / start_price, 2)
      price_data.append({"date": item["date"], symbol: diff})
    df_result = None
    for symbol, data in symbol_data.iteritems():
      df = pandas.DataFrame.from_dict(data)
      df.set_index("date", inplace=True)
      if '^GSPC' in df.columns:
        df = df.rename(columns={"^GSPC": "S&P500"})
      if df_result is None:
        df_result = df
      else:
        df_result = df_result.join(df, lsuffix='_caller', rsuffix='_other')

    df_result["date"] = df_result.index
    df_result["date"] = df_result["date"].apply(lambda x: x.strftime("%b %d, %Y"))

    return df_result.to_json(orient='records')
  except  Exception as ex:
    print ex
  finally:
    con_mongo.close()


def getPortfolioMktValue(portfolio_id):
  dict_portfolio = {}
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db)

  sql = """ select sum(round(t1.quantity*t2.last,2)) as portfolio_value 
                        ,round(sum(t2.change_pct*t1.quantity)/sum(t1.quantity),2) as portfolio_change
                        , sum(round(t1.quantity*t1.price,2)) as start_value
                         from portfolio_symbols t1
                        join live_symbol t2 
                        on t1.symbol=t2.symbol
                        
                        where portfolio_id=%d """ % (portfolio_id)
  cursor = dbcon.cursor()
  cursor.execute(sql)
  results = cursor.fetchone()

  dbcon.close()
  return results


def getPortfolioComposition(portfolio_id):
  dict_portfolio = {}
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db)

  sql = """ select name,round(100*sum(mktvalue)/total,2)  as percentage from
                        (select 
                        case when (asset_name ='US Equities') then 
                        concat(asset_detail)
                        else 
                        'ETF' end as name,
                        (quantity*last) as mktvalue from portfolio_symbols  t1
                        join list_symbol t2 on t1.symbol=t2.symbol
                        join assets t3 on t2.assetid=t3.asset_id
                        join live_symbol t4 on t1.symbol=t4.symbol
                        where portfolio_id=%d) t
                        cross join
                        (select sum((quantity*t2.last)) as total from portfolio_symbols
                        t1 join live_symbol t2 on t1.symbol=t2.symbol where portfolio_id=%d
                        ) t2
                         group by name""" % (portfolio_id, portfolio_id)
  cursor = dbcon.cursor()
  cursor.execute(sql)
  results = cursor.fetchall()
  for row in results:
    dict_portfolio.update({row[0]: (row[1])})
  dbcon.close()
  return dict_portfolio


def insert_portfolio_details(dict_portfolio_details):
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db)
  cols = dict_portfolio_details.keys()
  vals = dict_portfolio_details.values()
  for index, item in enumerate(vals):
    if isinstance(item, numbers.Number) and np.isnan(item):
      vals[index] = 0

  sql_delete = "delete from portfolio_overview where portfolio_id=%d" % dict_portfolio_details["portfolio_id"]
  sql = "INSERT INTO portfolio_overview (%s) VALUES %s " % (
    ",".join(cols), tuple(vals)
  )

  cursor = dbcon.cursor()
  cursor.execute(sql_delete)
  cursor.execute(sql)
  dbcon.commit()
  dbcon.close()


def get_portfolio_startdate(portfolio_id):
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db)

  sql = "SELECT create_date FROM portfolio WHERE portfolio_id={}".format(portfolio_id)
  cursor = dbcon.cursor()
  cursor.execute(sql)
  results = cursor.fetchone()
  start_date = results[0]
  dbcon.close()
  return start_date


def get_portfoliodetails(portfolio_id):
  dict_portfolio = {}
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db)

  sql = "SELECT upper(symbol) as symbol,quantity,price AS price FROM portfolio_symbols where portfolio_id= {}".format(
    portfolio_id)
  cursor = dbcon.cursor()
  cursor.execute(sql)
  results = cursor.fetchall()
  for row in results:
    dict_portfolio.update({row[0]: (row[1], row[2])})
  dbcon.close()
  return dict_portfolio


def get_symbol_adjclose(symbol, startdate, enddate):
  con = pymongo.MongoClient(cfg.mongodb_host, port=cfg.mongodb_port)
  db = con.chartlab
  df_symbol = pandas.DataFrame()
  prices_symbol = db.symbolshistorical.find({"$and": [{'symbol': symbol},
                                                      {"date": {"$gt": startdate}},
                                                      {"date": {"$lt": enddate}}]}).sort("date", 1)
  if ((prices_symbol.count()) > 0):
    df_symbol = pandas.DataFrame(list(prices_symbol), columns=['close', 'date'])

    df_symbol['date'] = df_symbol.apply(lambda x: dtutil.getdatewithzero(x['date']), axis=1)
    df_symbol = df_symbol.set_index('date')
    df_symbol.columns = [symbol]

    df_symbol = df_symbol.reset_index().drop_duplicates(subset='date', keep='last').set_index('date')
  con.close()
  return df_symbol


def getPortfolioHistoricalDataFrame(collection_name, portfolioIds, nameMap, period, first_transaction_date=None):
  listResult = []

  end_date = datetime.today()
  start_date = getStartDateFromPeriod(period) - timedelta(days=1)
  if first_transaction_date is not None:
    first_transaction_date = datetimeutil.getdatefromstr(first_transaction_date) - timedelta(days=3)
    if start_date < first_transaction_date:
      start_date = first_transaction_date
  con_mongo = pymongo.MongoClient(cfg.mongodb_host, port=cfg.mongodb_port)
  db_chartlab = con_mongo.chartlab
  result = db_chartlab[collection_name].find(
    {"PortfolioId": {"$in": portfolioIds}, "date": {'$lt': end_date, '$gte': start_date}}).sort("date", 1)

  con_mongo.close()
  return result


def performanceDataByPeriod(collection_name, portfolioIds, nameMap, period, first_transaction_date=None):
  listResult = []
  historical_data = getPortfolioHistoricalDataFrame(collection_name, portfolioIds, nameMap, period,
                                                    first_transaction_date)
  symbol_data = []
  for item in historical_data:
    symbol_data.append(
      {"date": item["date"], "mv": item['marketValue'], 'PortfolioId': item['PortfolioId']})
  df = pandas.DataFrame(symbol_data)
  performance = {}
  keys = ["yearly", "monthly", "quarterly"]
  for portfolioId in portfolioIds:
    df_individual = df[df["PortfolioId"] == portfolioId][["date", "mv"]]
    perf = dataframe_utils.getPerfForDataFrame(df_individual, nameMap[portfolioId])
    for key in keys:
      dataframe_utils.mergePortfolioPerf(perf[key], key, performance)
  for key in keys:
    item = performance[key].reset_index().to_dict(orient='records')
    performance.update({key: item})

  return performance


def getPortfolioHistorical(collection_name, portfolioIds, nameMap, period, first_transaction_date=None):
  listResult = []
  historical_data = getPortfolioHistoricalDataFrame(collection_name, portfolioIds, nameMap, period,
                                                    first_transaction_date)
  symbol_data = {}
  first_price = {}
  for item in historical_data:
    symbol = item["PortfolioId"]
    if symbol in symbol_data:
      price_data = symbol_data[symbol]
    else:
      price_data = []
      symbol_data.update({symbol: price_data})
      first_price.update({symbol: item["marketValue"]})
    start_price = first_price[symbol]
    close = item['marketValue']
    diff = round(100 * (close - start_price) / start_price, 2)
    price_data.append({"date": item["date"], symbol: diff})
  df_result = None
  for symbol, data in symbol_data.iteritems():
    df = pandas.DataFrame.from_dict(data)
    df.set_index("date", inplace=True)
    for nameId, portfolio_name in nameMap.iteritems():
      if nameId in df.columns:
        df = df.rename(columns={nameId: portfolio_name})
    if df_result is None:
      df_result = df
    else:
      df_result = df_result.join(df, lsuffix='_caller', rsuffix='_other')

  if df_result is None:
    return json.dumps({})
  else:
    df_result["date"] = df_result.index
    df_result["date"] = df_result["date"].apply(lambda x: x.strftime("%b %d, %Y"))

    return df_result.to_json(orient='records')


def getTechAlerts(listSymbols):
  list_dict_data = []
  upsymbols = []
  downsymbols = []
  up = 0
  down = 0
  if len(listSymbols) > 0:
    formattedSymbols = map(lambda x: "'" + x + "'", listSymbols)
    symbols = ','.join(formattedSymbols)
    query = """ select s.symbol,t.name as event , t.sign from alerts_latest s join 
        alert_types t on s.typeid = t.type_id where s.symbol in  ({}) """.format(symbols)

    dbcon = getDbConn()
    cursor = dbcon.cursor()
    cursor.execute(query)

    results = cursor.fetchall()
    for row in results:
      list_dict_data.append(row)
    dbcon.close()

  for alert in list_dict_data:
    if (alert["sign"] == 1):
      upsymbols.append(alert)
      up = up + 1
    else:
      downsymbols.append(alert)
      down = down + 1

  tech_alerts = {
    "up": up,
    "down": down,
    "upsymbols": upsymbols,
    "downsymbols": downsymbols

  }

  return tech_alerts


def getLiveData(listSymbols):
  if len(listSymbols) == 0:
    return {}
  dict_data = {}
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db, cursorclass=MySQLdb.cursors.DictCursor)

  cursor = dbcon.cursor()
  formattedSymbols = map(lambda x: "'" + x + "'", listSymbols)
  symbols = ','.join(formattedSymbols)
  query = """select li.symbol,ls.companyname,li.last as price,li.price_change as priceChange ,
    li.change_pct as priceChangePct from  live_symbol li 
    join list_symbol ls on ls.symbol=li.symbol
    where li.symbol in ({})""".format(symbols)

  cursor.execute(query)

  results = cursor.fetchall()
  for row in results:
    dict_data.update({row["symbol"]: row})
  dbcon.close()
  return dict_data


def getTechnicalCurrent(listSymbols):
  if len(listSymbols) == 0:
    return {}
  dict_data = {}
  dbcon = getDbConn()

  cursor = dbcon.cursor()
  formattedSymbols = map(lambda x: "'" + x + "'", listSymbols)
  symbols = ','.join(formattedSymbols)
  query = """select * from technicals_symbol where symbol in  ({})""".format(symbols)

  cursor.execute(query)

  results = cursor.fetchall()
  for row in results:
    dict_data.update({row["symbol"]: row})
  dbcon.close()
  return dict_data


def getTechnicalHistory(listSymbols):
  cutOffDate = date.today() - timedelta(15)
  cutOffDate = cutOffDate.strftime('%Y-%m-%d')
  if len(listSymbols) == 0:
    return {}
  dict_data = {}
  dbcon = getDbConn()

  cursor = dbcon.cursor()
  formattedSymbols = map(lambda x: "'" + x + "'", listSymbols)
  symbols = ','.join(formattedSymbols)
  query = """select * from technical_symbol_history where symbol in  ({}) and date >='{}'""".format(symbols,
                                                                                                    cutOffDate)

  cursor.execute(query)

  results = cursor.fetchall()
  symbol_data = {}
  first_price = {}
  for item in results:
    symbol = item["symbol"]

    if symbol in symbol_data:
      price_data = symbol_data[symbol]
    else:
      price_data = []
      symbol_data.update({symbol: price_data})

    price_data.append(item)

  for symbol, data in symbol_data.iteritems():
    data.sort(key=lambda x: x["date"], reverse=False)
  return symbol_data


def getKeyValuePair(query, keyColumn, valueColumn):
  dict_data = {}
  dbcon = getDbConn()

  cursor = dbcon.cursor()
  cursor.execute(query)

  results = cursor.fetchall()
  for row in results:
    dict_data.update({row[keyColumn]: row[valueColumn]})

  dbcon.close()
  return dict_data


def getDataDict(query, column="symbol"):
  dict_data = {}
  dbcon = getDbConn()

  cursor = dbcon.cursor()
  cursor.execute(query)

  results = cursor.fetchall()
  for row in results:
    dict_data.update({row[column]: row})

  dbcon.close()
  return dict_data


def getData(query):
  dict_data = {}
  dbcon = getDbConn()

  cursor = dbcon.cursor()
  cursor.execute(query)

  results = cursor.fetchall()
  for row in results:
    dict_data.update({row["symbol"]: row})

  dbcon.close()
  return dict_data


def getDataList(query, column):
  dict_data = {}
  dbcon = getDbConn()

  cursor = dbcon.cursor()
  cursor.execute(query)

  results = cursor.fetchall()
  for row in results:
    valueArray = []
    key = row[column]
    if key in dict_data:
      valueArray = dict_data[key]
    else:
      dict_data.update({key: valueArray})
    valueArray.append(row)

  dbcon.close()
  return dict_data


def getDataArray(query, column="symbol"):
  list_data = []
  dbcon = getDbConn()

  cursor = dbcon.cursor()
  cursor.execute(query)

  results = cursor.fetchall()
  for row in results:
    list_data.append(row[column])
  dbcon.close()
  return list_data


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


def getUserDetails(userName, password):
  dbcon = getDbConn()

  cursor = dbcon.cursor()
  sql = """ select userId,isPaid,isundertrial,emailaddress from users 
    where  
    (emailaddress = '{}'  and password = '{}')
    or 
    (username = '{}'  and password = '{}')
    """.format(userName, password, userName, password)
  cursor.execute(sql)
  results = cursor.fetchone()
  dbcon.close()
  return results


def getOneRow(query, columnName=None):
  dbcon = getDbConn()
  cursor = dbcon.cursor()

  cursor.execute(query)
  row = cursor.fetchone()
  dbcon.close()
  if columnName is None:
    return row
  elif row is None:
    return None
  else:
    return row[columnName]


def saveDataQuery(query):
  dbcon = getDbConn()
  cursor = dbcon.cursor()
  cursor.execute(query)
  dbcon.commit()
  dbcon.close()


def getScanFilters():
  name_dict = {}
  name_data = [];
  dbcon = getDbConn()
  query = "SELECT s.id,s.name,s.Description,s.group from scan_filter s;"
  cursor = dbcon.cursor()
  cursor.execute(query)
  results = cursor.fetchall()
  for row in results:
    name = row["name"]
    id = row["id"]
    desc = row["Description"]
    group = row["group"]
    name_array = []
    if name in name_dict:
      name_array = name_dict[name]
    else:
      name_dict.update({name: name_array})

    name_array.append({"id": id, "name": desc, "group": group})

  for key, value in name_dict.iteritems():
    name_data.append({"name": key, "value": value, "group": value[0]["group"], "selectedId": 0})
  dbcon.close()
  name_data.sort(key=lambda x: x['group'], reverse=True)
  return name_data


def getPeers(symbol):
  sqlSector = """SELECT ls.symbol as symbol FROM list_symbol AS ls
		JOIN spy_symbol s ON  ls.symbol=s.symbol
        join live_symbol live on ls.symbol = live.symbol
    WHERE sectorId = (SELECT sectorId FROM list_symbol WHERE symbol= '{}' LIMIT 1) 
    order by CAST(market_cap_raw AS DECIMAL(40,3)) desc limit 5""".format(symbol)
  data = getDataArray(sqlSector)
  return data


def getDbConn():
  dbcon = MySQLdb.connect(
    host=cfg.mysqldb_host, user=cfg.mysqldb_user, passwd=cfg.mysqldb_passwd,
    db=cfg.mysqldb_db, cursorclass=MySQLdb.cursors.DictCursor)

  return dbcon


def getEarnings(listSymbols):
  list_dict_data = []
  if len(listSymbols) > 0:
    formattedSymbols = map(lambda x: "'" + x + "'", listSymbols)
    symbols = ','.join(formattedSymbols)
    query = " select * from earning_history where symbol in ({}) order by date desc;".format(symbols)

    dbcon = getDbConn()
    cursor = dbcon.cursor()
    cursor.execute(query)

    results = cursor.fetchall()
    for row in results:
      list_dict_data.append(row)
    dbcon.close()

  return list_dict_data


def getDividend(listSymbols):
  list_dict_data = []
  if len(listSymbols) > 0:
    formattedSymbols = map(lambda x: "'" + x + "'", listSymbols)
    symbols = ','.join(formattedSymbols)
    query = "select * from dividend_history where symbol in ({}) order by ex_dividend_date desc;".format(symbols)

    dbcon = getDbConn()
    cursor = dbcon.cursor()
    cursor.execute(query)

    results = cursor.fetchall()
    for row in results:
      list_dict_data.append(row)
    dbcon.close()

  return list_dict_data


def getGlobalIndicesTechnicalData(symbols):
  formattedSymbols = map(lambda x: "'" + x + "'", symbols.split(","))
  formattedSymbols = ','.join(formattedSymbols)

  sql = """select gi.symbol,gi.country,ls.companyname,ts.macd,ts.rsi,l.priceChange,
            round(100*(l.last-ts.price_Monthly)/ts.price_Monthly ,2)as mtd,
            round(100*(l.last-ts.price_Weekly)/ts.price_Weekly ,2)as wtd,
            round(100*(l.last-ts.price_Yearly)/ts.price_Yearly ,2)as ytd
             from technicals_symbol  ts
            left join global_indices gi on gi.symbol=ts.symbol
            left join list_symbol ls on ls.symbol=gi.symbol
            left join live_symbol l on l.symbol =ls.symbol
            where gi.symbol in ({}) """.format(formattedSymbols)

  data = getDataTable(sql)

  return data
