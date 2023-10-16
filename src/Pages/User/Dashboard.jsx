import React from "react";
import { render } from "react-dom";
import moment from "moment";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";
import member2 from '../../assets/analysis.jpg'
import { useSelector } from "react-redux"

import {
  XYPlot,
  Hint,
  LineSeries,
  FlexibleXYPlot,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  AreaSeries
} from "react-vis";

import { Constants } from "../../keys";
import UserHead from './../../Components/User/UserHead';
import UserFoot from './../../Components/User/UserFoot';
import UserLayouts from "../../Components/User/UserLayouts";

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

  }

  state = {
    times: [],
    high: [],
    low: [],
    chartData: [],
    query: "BTC",
    leaderboard: [],
    addressData: "",
    symbol: ""
  };

  componentDidMount() {
    this.loadChartData();
  }

  loadChartData = async () => {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/blockchain/histo/day?fsym=${this.state.query}&api_key=${Constants.CRYPTO_COMPARE}&limit=30`
    );
    const data = await response.json();
    const bulkData = data.Data.Data;
    const dataArray = [];
    {
      bulkData.map((y) =>
        dataArray.push({
          x: y.time * 1000,
          y: y.transaction_count * y.average_transaction_value
        })
      );
    }
    this.setState({ chartData: dataArray });
    this.setState({ symbol: this.state.query });
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };


  render() {
    const { chartData, query, addressData, symbol } = this.state;
    // const { User } = useSelector(state => state.data)
    const team = [
      {
        icon: member2,
        title: 'BTC Balance',
        balance: 0,
      },
      {
        icon: member2,
        title: 'USD Balance',
        balance: 0,
      },
    ]
    return (
      <div>
        <UserLayouts>
          <div className="">
            <div className="py shadow-xl">
              <div className="">
                <div className="">
                  <div className="bg-gray-100 flex items-start mb- justify-start">
                    <div className="lg:flex items-center justify-center mx-10 my-6 gap-10 grid md:grid-cols-2">
                      {team.map((item, i) => (
                        <div key={i} className="bg-white rounded-xl z-30 flex text-start items-start justify-start my-5 w-[18rem] py- h-[12rem] shadow-xl ">
                          <div className="">
                            <div className=" mb-5">
                              <div className=""> <img src={item.icon} alt="" className="absolute w-[18rem] h-[12rem] object-cover rounded-xl -z-30 brightness-50" /> </div>
                              <div className="text-white">
                                <h1 className="text-xl px-5 py-3"> {item.title} </h1>
                                <p className="text-lg px-5  mb-3"> {item.balance} </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="bg-white rounded-xl z-30 flex text-start items-start justify-start my-10 w-[18rem] py- h-[12rem] shadow-xl">
                        <div className="">
                          <h1 className="text-sm font-bold">Account Info</h1>
                          {/* <div className="bg-blue-900 text-center">Welcome {User.fullname} </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] mx-auto flex items-center justify-center mt-20">
            <TradingViewEmbed
              widgetType={widgetType.TICKER_TAPE}
              widgetConfig={{
                showSymbolLogo: true,
                isTransparent: true,
                displayMode: "adaptive",
                colorTheme: "light",
                autosize: true,
                symbols: [
                  {
                    proName: "BITSTAMP:ETHUSD",
                    title: "ETH/USD"
                  },
                  {
                    proName: "BITSTAMP:BTCUSD",
                    title: "BTC/USD"
                  },
                  {
                    proName: "BINANCE:BNBUSDT",
                    title: "BNB/USDT"
                  },
                  {
                    proName: "BINANCE:ADAUSD",
                    title: "ADA/USD"
                  },
                  {
                    proName: "BINANCE:DOTUSDT",
                    title: "DOT/USDT"
                  },
                  {
                    proName: "UNISWAP:UNIUSDT",
                    title: "UNI/USDT"
                  }
                ]
              }}
            />
          </div>
          <div className="charty">
            {query.length > 2 ? (
              <TradingViewEmbed
                widgetType={widgetType.ADVANCED_CHART}
                widgetConfig={{
                  interval: "1D",
                  colorTheme: "dark",
                  width: "100%",
                  symbol: query + "USD",
                  studies: [
                    "MACD@tv-basicstudies",
                    "StochasticRSI@tv-basicstudies",
                    "TripleEMA@tv-basicstudies"
                  ]
                }}
              />
            ) : (
              "BTCUSD"
            )}

            <div className="taChart">

              <FlexibleXYPlot className="onChainChart" height={40}>

                <YAxis
                  tickFormat={(value) => value / 1}
                  width={40}
                  tickValues={chartData.y}
                  style={{
                    line: { stroke: "#ffffff", marginRight: 50 },
                    ticks: { stroke: "#fffff" },
                    text: {
                      stroke: "none",
                      fill: "#ffffff",
                      fontWeight: 3,
                      fontSize: 7,
                      position: "start"
                    },
                    title: { fill: "#ffffff" }
                  }}
                />
              </FlexibleXYPlot>
              {query.length > 2 ? (
                <TradingViewEmbed
                  widgetType={widgetType.TECHNICAL_ANALYSIS}
                  widgetConfig={{
                    interval: "1D",
                    colorTheme: "dark",
                    width: "100%",
                    symbol: query + "USD"
                  }}
                />
              ) : (
                query
              )}

              {query.length > 2 ? (
                <TradingViewEmbed
                  widgetType={widgetType.COMPANY_PROFILE}
                  widgetConfig={{
                    colorTheme: "dark",
                    width: "100%",
                    symbol: query + "USD"
                  }}
                />
              ) : (
                "BTCUSD"
              )}
            </div>
          </div>
        </UserLayouts>

      </div>
    );
  }
}

const Chart = (props) => {
  return (
    <div>
      <div className="chart">
        {/* <p className="chart-data" key={props.time}>
          {"time" + props.time}
        </p> */}
        {/* <p className="chart-data" key={props.active_addresses}>
          {"active addresses" + props.active_addresses}
        </p> */}
      </div>
    </div>
  );
};


export default Dashboard;
