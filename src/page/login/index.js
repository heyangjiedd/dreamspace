import React, {useState} from 'react';
import {Flex, WingBlank,Button, WhiteSpace, InputItem, Toast} from 'antd-mobile';
import styles from './index.less'

const InputPhone = () => {
    return <div></div>
}
export default  () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const onChange = (data) => {
        setValue(data);
        setError(!!(data.replace(/\s/g, '').length < 11));
    };
    const onError = () => {
        if (error) {
            Toast.info('Please enter 11 digits');
        }
    };
    const [valuePass, setValuePass] = useState('');
    const [errorPass, setErrorPass] = useState('');
    const onChangePass = (data) => {
        setValuePass(data);
        setErrorPass(!!(data.replace(/\s/g, '').length !== 6));
    };
    const onErrorPass = () => {
        if (errorPass) {
            Toast.info('Please enter 6 digits');
        }
    };
    return <div className={'login'}>
        <Flex direction={'column'}>
            <WhiteSpace></WhiteSpace>
            <Flex.Item  style={{width:'90%'}}>
                <InputItem
                    type="phone"
                    placeholder="输入电话号码"
                    error={error}
                    onErrorClick={onError}
                    onChange={onChange}
                    value={value}>手机号码</InputItem>
            </Flex.Item>
            <WhiteSpace></WhiteSpace>
            <Flex.Item  style={{width:'90%'}}>
                <InputItem
                    type="password"
                    placeholder="请输入密码"
                    error={errorPass}
                    onErrorClick={onErrorPass}
                    onChange={onChangePass}
                    value={valuePass}>密码</InputItem>
            </Flex.Item>
            <WhiteSpace />
            <Flex.Item style={{width:'90%'}}>
                <Button type={'primary'}>登录</Button>
            </Flex.Item>
            <div className={styles.placeholder}></div>
        </Flex>
    </div>
}