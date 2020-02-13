import React from 'react'
import { withRouter } from 'react-router-dom'
import Logo from '../assets/logo.png'
import "./header.css"
class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                path: "/tips",
                title: "Tips"
            }, { path: "/News", title: "News" }],
            source: {
                "/": -1,
                "/tips": 0,
                "/News": 1
            },
            current: -1
        }
    }
    componentDidMount() {
        let pathname = this.props.location.pathname;
        const { source } = this.state;
        this.setState({
            current: source[pathname]
        })
    }
    logojump = () => {
        console.log(this);
        this.props.history.push("/");
        this.setState({
            current: -1
        })
    }
    jump(e, item, index) {
        e.preventDefault();
        this.props.history.push(item.path);
        this.setState({
            current: index
        })
    }
    render() {
        const { data, current } = this.state;
        const hightLight = {
            fontWeight: "bold",
            color: "rgba(34,34,34,1)"
        }
        const normal = {
            fontWeight: "400",
            color: "rgba(153,153,153,1)"
        }

        return <>
            <div className="header">
                <div className="header_center">
                    <div className="header_logo" onClick={this.logojump}>
                        <img src={Logo}  ></img>
                    </div>
                    <div>
                        {
                            data.map((item, index) =>
                                <a href={item.path} key={index} onClick={(e) => this.jump(e, item, index)} style={{ textDecoration: "none" }}>
                                    <span style={index === current ? hightLight : normal}>{item.title}</span>
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    }
}
export default withRouter(Head)