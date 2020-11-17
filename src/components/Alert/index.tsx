import React from 'react'
import classNames from "classnames";



export type AlertType = "success" | 'default' | 'danger' | 'warning'
interface BaseAlertProps {
    children: React.ReactChild
    type?: AlertType
}

const Alert: React.FC<BaseAlertProps>= (props)=>{
    const {type} = props;
    const classes = classNames('alert', {
        [`alert-${type}`]:type

    })
    return <div className={classes}>
        {
            props.children
        }
    </div>
}

Alert.defaultProps ={
    children: '曾🐱测试',
    type: 'success'
}
export default Alert
