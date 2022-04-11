import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorExtraInfor.scss";

class DoctorExtraInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issShowDetailInfor: false,
    };
  }

  async componentDidMount() {}

  componentDidUpdate(prevProps, preState, snapshot) {
    if (this.props.language !== prevProps.language) {
    }
  }
  showHideDetailInfor = (status) => {
    this.setState({
      issShowDetailInfor: status,
    });
  };
  render() {
    let { issShowDetailInfor } = this.state;
    return (
      <>
        <div className="doctor-extra-infor-container">
          <div className="content-up">
            <div className="text-address">ĐỊA CHỈ KHÁM</div>
            <div className="name=clinic"> Phòng khám chuyên khoa da liễu</div>
            <div className="detail-address">207 đà nẵng - điện biên phủ</div>
          </div>
          <div className="content-down">
            {issShowDetailInfor === false && (
              <div className="short-infor">
                GIÁ KHÁM: 250.000đ.
                <span onClick={() => this.showHideDetailInfor(true)}>
                  Xem chi tiết
                </span>
              </div>
            )}
            {issShowDetailInfor === true && (
              <>
                <div className="title-price">GIÁ KHÁM: .</div>
                <div className="detail-infor">
                  <div className="proce">
                    <span className="left"> Giá Khám</span>
                    <span className="right"> 250.000</span>
                  </div>
                  <div className="note">
                    Được ưu tiên khám trước khi đặt khám qua FPT BookingCare
                  </div>
                </div>
                <div className="payment">
                  Người bệnh có thể thanh toán chi phí bằng hình thức tiền mặt
                  và quẹt thẻ
                </div>
                <div className="hide-price">
                  <span onClick={() => this.showHideDetailInfor(false)}>
                    Ẩn bảng giá
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
