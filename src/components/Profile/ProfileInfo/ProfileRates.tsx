import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getRatesThunk} from "../../../redux/profile_reduser";
import {Col, Row} from "antd";
import {getRatesSelector} from "../../../redux/Selectors/profile_selector";
import {RatesType} from "../../../DAL/api";




const Rates : FC = () => {
    const dispatch = useDispatch()
    const rates = useSelector(getRatesSelector)
    useEffect(()=>{
        if (!rates) dispatch(getRatesThunk())
    },[])

    return (
        <Row>
            <Col span={12}>Base:EUR</Col>
            {
                rates && Object.keys(rates.rates).map((el)=><Col span={12}>{el} : {rates.rates[el as keyof RatesType]}</Col>)
            }
        </Row>

    )
}

export default Rates

