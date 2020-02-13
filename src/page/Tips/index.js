import React from 'react'
import Paga from "../../component/Paganiation"
import "./index.css"
import UserImg from '../../assets/user.png'
import Message from '../../assets/message.png'
import Axios from 'axios'
import zan from '../../assets/zan.png';
import data from '../../assets/data.json'
class Tips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            SourceData: []
        }
    }
    clickPagniation = (i, limit) => {
        const { data, SourceData } = this.state;
        if (i === Math.ceil(SourceData.length / limit)) {
            this.setState({
                data: SourceData.slice((i - 1) * limit, SourceData.length)
            })
        }
        else {
            this.setState({
                data: [...SourceData.slice((i - 1) * limit, (i) * limit)]
            }, () => {

            })
        }
    }
    componentDidMount() {
        Axios.get("/data.json").then(({ data }) => {
            let source = data.data
            this.setState({
                data: source.slice(0, 10),
                SourceData: source
            }, () => {

            })
        })
    }
    render() {
        const { data, SourceData } = this.state;
        return <div className="Tips">
            <div className="Tips_main">
                <div className="title">
                    Top
                </div>
                {data.map((item, index) =>
                    <div className="data_li" key={index}>
                        <div className="li_left">
                            <div className="li_cricle">
                                <img src={zan}></img>
                            </div>
                            <p className="li_number">826</p>
                        </div>
                        <div className="li_center">
                            <div className="li_title">
                                <div className="li_title_1">
                                    {item.title}
                                </div>
                                <div className="li_date">2020:01:23</div>
                                <div className="li_date2">18:52:57</div>
                            </div>
                            <div className="li_url"> {item.url}}</div>
                            <div className="li_info">
                                <div className="li_user"><img src={UserImg}></img><p>{item.name}</p></div>
                                <div className="li_message"><img src={Message}></img><p style={{ paddingTop: "1px" }}>{item.message}</p></div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="Page">
                <Paga count={SourceData.length + 180} hanldeClickChange={this.clickPagniation} limit={10}></Paga>
            </div>
        </div >
    }
}
export default Tips;