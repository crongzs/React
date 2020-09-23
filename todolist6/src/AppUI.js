import React from "react";
import {Button, Input, List} from "antd";

const AppUI = (props) => {
    return (
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
            <div>
                <Input placeholder="todo info" value={props.inputValue} onChange={props.handleInputChange}
                       style={{marginRight: '10px', width: '300px'}}/>
                <Button type="primary" onClick={props.handleBtnClick}>Submit</Button>
            </div>
            <List
                bordered
                style={{marginTop: '10px', width: '387.5px'}}
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => {
                        props.handleDeleteItem(index)
                    }}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
};

export default AppUI;