// import React, {Component} from "react";
import React from "react";
import {Button, Input, List} from "antd";

const AppUI = (props) => {
    return (
        <div style={{marginLeft: '10px', marginTop: '10px'}}>
            <div>
                <Input placeholder="todo info" style={{width: '300px', marginRight: '10px'}}
                       value={props.inputValue} onChange={props.handleInputChange}/>
                <Button type="primary" onClick={props.handleBtnClick}>Submit</Button>
            </div>
            <List
                bordered
                style={{marginTop: '10px', width: '387px'}}
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => {
                        props.handleItemClick(index)
                    }}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
};

// class AppUI extends Component{
//     render() {
//         return (
//             <div style={{marginLeft: '10px', marginTop: '10px'}}>
//                 <div>
//                     <Input placeholder="todo info" style={{width: '300px', marginRight: '10px'}}
//                            value={this.props.inputValue} onChange={this.props.handleInputChange}/>
//                     <Button type="primary" onClick={this.props.handleBtnClick}>Submit</Button>
//                 </div>
//                 <List
//                     bordered
//                     style={{marginTop: '10px', width: '387px'}}
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (
//                         <List.Item onClick={(index) => {this.props.handleItemClick(index)}}>
//                             {item}
//                         </List.Item>
//                     )}
//                 />
//             </div>
//         )
//     }
// }

export default AppUI;