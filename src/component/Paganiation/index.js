import React from 'react'
import "./index.css"
export default class extends React.Component {
    constructor(props) {
        super(props);
        const { count, limit } = props;

        this.state = {
            limit: props.limit | 10,
            current: 1,
            currentIndex: 0,
            count: this.initCount(count, limit | 10)
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.count != nextProps.count) {
            this.setState({
                count: this.initCount(nextProps.count, this.props.limit | 10)
            })
        }
    }
    initCount(count, limit) {
        let length = Math.ceil(count / limit);
        console.log(count);
        if (count <= limit) {
            return []
        }
        if (length >= limit) {
            let arr = Array.from({ length }, (v, i) => { return i + 1 })
            arr.pop();
            arr.shift();
            return arr;
        }
        if (length < limit) {
            let arr = Array.from({ length }, (v, i) => i + 1)
            arr.shift();
            return arr;
        }
    }

    ClickPaganition(e, i, index) {
        const { hanldeClickChange } = this.props;
        const { limit } = this.state;
        console.log(i);
        hanldeClickChange(i, limit);
        this.setState({
            current: i,
        })
    }
    ValiedArray(arr) {
        let { current, count, limit } = this.state;
        if (count.length > limit) {
            if (current + 4 >= count.length) {
                return arr.slice(count.length - 8, count.length)
            }
            if (current < limit - 2) {
                arr = arr.slice(0, limit - 1);
                return arr;
            }
            else {
                current -= 1;
                return arr.slice(current - 5, current + 4)
            }
        }
        else if (count.length < limit) {
            return arr.slice(0, limit - 1);
        }


    }
    prev() {
        const { current, limit, count } = this.state;
        if (current - limit <= 1) {
            this.setState({
                current: 1
            }, () => {
                this.props.hanldeClickChange(this.state.current, limit);
            })
            return
        }
        this.setState({
            current: current - (limit - 1)
        }, () => {
            this.props.hanldeClickChange(this.state.current, limit);
        })
    }
    next() {
        const { current, limit, count } = this.state;
        if (current + limit >= count.length + 2) {
            this.setState({
                current: count.length + 2
            }, () => {
                this.props.hanldeClickChange(this.state.current, limit);
            })
            return
        }
        this.setState({
            current: current + (limit - 1)
        }, () => {
            this.props.hanldeClickChange(this.state.current, limit);
        })
    }
    arrow_prev() {
        const { current, limit } = this.state;
        if (current == 1) {
            return
        }
        else {
            this.setState({
                current: current - 1
            }, () => {
                this.props.hanldeClickChange(this.state.current, limit);
            })
        }
    }
    arrow_next() {
        const { current, count, limit } = this.state;
        if (current == count.length + 1) {
            return
        }

        else {
            this.setState({
                current: current + 1
            }, () => {
                this.props.hanldeClickChange(this.state.current, limit);
            })
        }
    }
    render() {
        const { limit, current, currentIndex, count } = this.state;
        return <>{
            count ?
                <div className="paganition">
                    <div className={current === 1 ? "paganition_outline_not" : "paganition_outline"} onClick={() => this.arrow_prev()}>
                        <div className="arrow_left"></div>
                    </div>
                    <div className={current != 1 ? "paganition_outline" : "paganition_outline_none"} onClick={(e) => this.ClickPaganition(e, 1)}>
                        <span className={current != 1 ? "paganition_font" : "paganition_font_none"}>1</span>
                    </div>
                    {current > 7 && count.length > limit ?
                        <div className="ellipsis" onClick={() => this.prev()}>
                            ...
                </div> : <></>
                    }
                    {
                        this.ValiedArray(count).map((item, index) => {
                            return <div className={current != item ? "paganition_outline" : "paganition_outline_none"} key={index + "s"} onClick={(e) => this.ClickPaganition(e, item)}>
                                <span className={current != item ? "paganition_font" : "paganition_font_none"}>{item}</span>
                            </div>
                        })
                    }
                    {count.length > limit && current + (limit - 4) < count.length + 2 ? <div className="ellipsis" onClick={() => this.next()}>...</div> : <></>}
                    {count.length < limit || count.length === 2 ? <></> : <div className={current != count.length + 2 ? "paganition_outline" : "paganition_outline_none"}>
                        <span className={current != count.length + 2 ? "paganition_font" : "paganition_font_none"} onClick={(e) => this.ClickPaganition(e, count.length + 2)}>{count.length + 2}</span>
                    </div>}
                    <div className={current === count.length + 1 ? "paganition_outline_not" : "paganition_outline"} onClick={() => this.arrow_next()}>
                        <div className="arrow_right"></div>
                    </div>
                </div> : <div></div>
        }

        </>
    }
}