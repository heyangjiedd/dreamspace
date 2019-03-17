import React,{useState,useEffect } from 'react';
import { Button } from 'antd-mobile';
// 无状态组件
export function Fun(props) {
    return <div>heool</div>
}
export class Com extends React.Component{
    constructor(props) {
        super(props);
        // 设置 initial state
        this.state = {
            text: props.initialValue || 'placeholder'
        };
        // ES6 类中函数必须手动绑定
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div>
                Type something:
                <input onChange={this.handleChange}
                       value={this.state.text} />
            </div>
        );
    }
}
export class Pure extends React.PureComponent{
    render(){
        return <div>23</div>
    }
}
export function UseS() {
    const [count, setCount] = useState(12);
    const [count1, setCount1] = useState(0);
    useEffect(()=>{
        document.title = `You clicked ${count} times`;
    })
    return (
        <div>
            <p>You clicked {count} times</p>
            <Button  type={'primary'} onClick={() => setCount(count + 1)}>
                Click me
            </Button>
        </div>
    );
}
