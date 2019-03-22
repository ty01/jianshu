import {Input ,Button , List ,Icon ,Row, Col } from 'antd';
import React, { Component } from 'react';
import store from '../../store';
import {change_input_value,addList,deleteList} from '../../store/actionTypes'
class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = store.getState();
        store.subscribe(this.storeChange)
    }
    render(){
        return (
            <div style={{margin:'100px'}}>
                <div>
                    <Input onChange={this.inputChange} value={this.state.inputValue} style={{width:'300px'}} placeholder="todo info"></Input>
                    <Button onClick={this.btnClick} type="primary" style={{marginLeft:'10px'}}>添加</Button>
                </div>
                <List
                    style={{width:'300px',marginTop:"10px"}}
                    size="small"
                    bordered
                    dataSource={this.state.list}
                    renderItem={
                        (item,index) => (
                            <List.Item>
                                <Row style={{width:"100%"}} >
                                    <Col span={20}>{item} </Col>
                                    <Col style={{textAlign:"right"}} span={4}><Icon onClick={this.listDelete.bind(this,index)} style={{color:"red"}}  type="close" /></Col>
                                </Row>
                            </List.Item>
                        )
                    }
                />
            </div>
        )
    }
    inputChange=(e)=>{
        const action={
            type:change_input_value,
            value:e.target.value
        }
        store.dispatch(action)
    }
    btnClick=()=>{
        const action={
            type:addList,
        }
        store.dispatch(action)
    }
    listDelete=(index,e)=>{
        const action={
            type:deleteList,
            index:index
        }
        store.dispatch(action)
    }
    storeChange=()=>{
        this.setState(store.getState());
    }
}

export default TodoList;