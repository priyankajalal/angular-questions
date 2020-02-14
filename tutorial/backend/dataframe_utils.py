import calendar
from datetime import datetime, date, timedelta
import pandas
def getQuarterYear(row):
    formattedQuarter = "{}-Q{}".format(int(row["year"]), int(row["quarter"]))
    return formattedQuarter


def getMonthYear(row):
    formattedQuarter = "{}-{}".format(int(row["year"]), row["month"])
    return formattedQuarter


def getPerfForDataFrame(df, columnName):
    first_row = df.iloc[0]
    last_year_date = datetime(first_row["date"].year - 1, 12, 31)
    df = df.append(pandas.Series([last_year_date, first_row["mv"]], index=df.columns),
                   ignore_index=True)
    df.set_index("date", inplace=True)
    df.sort_index(axis=0, inplace=True)

    df['year'] = pandas.DatetimeIndex(df.index).year
    df['month'] = pandas.DatetimeIndex(df.index).strftime('%b')
    df['quarter'] = pandas.DatetimeIndex(df.index).quarter
    df['quarter'] = df.apply(lambda row: getQuarterYear(row), axis=1)
    df['month'] = df.apply(lambda row: getMonthYear(row), axis=1)
    df_month_change = df.resample('BM').last()
    df_quarter_change = df.resample('Q').last()
    df_year_change = df.resample('A').last()

    df_month_change['change'] = df_month_change.mv.pct_change() * 100
    df_month_change["change"] = df_month_change["change"].apply(lambda x: round(x,2))
    df_quarter_change['change'] = df_quarter_change.mv.pct_change() * 100
    df_quarter_change["change"] = df_quarter_change["change"].apply(lambda x: round(x,2))
    df_year_change['change'] = df_year_change.mv.pct_change() * 100
    df_year_change["change"] = df_year_change["change"].apply(lambda x: round(x,2))

    df_month_change.dropna(inplace=True)
    df_month_change[columnName] = df_month_change["change"]
    df_month_change = df_month_change[[columnName, "month"]]

    df_quarter_change.dropna(inplace=True)
    df_quarter_change[columnName] = df_quarter_change["change"]
    df_quarter_change = df_quarter_change[[columnName, "quarter"]]

    df_year_change.dropna(inplace=True)
    df_year_change[columnName] = df_year_change["change"]
    df_year_change = df_year_change[[columnName, "year"]]

    performance = {"monthly": df_month_change,
                   "yearly": df_year_change,
                   "quarterly": df_quarter_change
                   }
    return performance


def mergePortfolioPerf(df, key, performance):
    if key in performance:
        df_merged = performance[key]
        df_merged = df_merged.join(df, lsuffix='_portfolio')
        performance.update({key: df_merged})
    else:
        performance.update({key: df})
