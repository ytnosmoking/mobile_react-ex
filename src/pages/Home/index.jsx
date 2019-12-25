import React, { Component } from "react";
import { Carousel, Grid } from "antd-mobile";
import { Link } from "react-router-dom";
import "./index.less";
const gridData = Array.from(new Array(8)).map((_val, i) => ({
  icon: "https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
  text: `name${i}`
}));

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["1", "2", "3"],
      imgHeight: 176
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: [
          "AiyWuByWklrrUDlFignR",
          "TekJlZRVCjLFexlOCuWn",
          "IJOtIlfsYdTyaDTRVrLI"
        ]
      });
    }, 100);
  }
  render() {
    return (
      <div>
        {/* banner */}
        <Carousel autoplay infinite autoplayInterval={4000}>
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: "inline-block",
                width: "100%",
                height: this.state.imgHeight
              }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: "100%", height: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  // fire window resize event to change height
                  // window.dispatchEvent(new Event("resize"));
                  // this.setState({ imgHeight: "auto" });
                }}
              />
            </a>
          ))}
        </Carousel>
        {/* ad */}
        <Link to="/home/check-in" className="ad">
          <img src={require("./img/check-in.png")} alt="" />
        </Link>
        {/* Grid */}
        <Grid data={gridData} hasLine={false} className="grid" />
      </div>
    );
  }
}

export default Home;
