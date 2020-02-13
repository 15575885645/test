import React from 'react'
import { Link } from 'react-router-dom'
class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                path: "/tips",
                title: "Tips"
            }, { path: "/News", title: "News" }]
        }
    }
    componentDidMount() {

    }
    render() {
        return <div>头部</div>
    }
}
export default Head