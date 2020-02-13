import React from 'react'
import Head from '../component/Head'
import Context from '../component/Context'
export default class extends React.Component {
    render() {
        return <>
            <Head></Head>
            <Context></Context>
            <div>我是Footer</div>
        </>
    }
}
