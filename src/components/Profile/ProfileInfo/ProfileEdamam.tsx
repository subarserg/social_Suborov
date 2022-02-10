import React, {FC, MouseEventHandler, useCallback, useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFoodParserThunk, getFoodSearchAutocompleteThunk} from "../../../redux/profile_reduser";
import {AutoComplete, Image, Table} from "antd";
import {
    getDataFoodParserSelector,
    getDataFoodParserTableSelector,
    getDataSearchFoodSelector
} from "../../../redux/Selectors/profile_selector";
import objectPath from 'object-path'

const {Option} = AutoComplete;
const {Column, ColumnGroup} = Table;


const Edamam: FC = () => {

    const dataSearchFood = useSelector(getDataSearchFoodSelector)
    const dataFoodParserTable = useSelector(getDataFoodParserTableSelector)

    const columns = [
        {
            key: 'category',
            title: "Category",
            dataIndex: 'category'
        },
        {
            key: 'categoryLabel',
            title: "Category Label",
            dataIndex: 'categoryLabel'
        },
        {
            key: 'image',
            title: "Image",
            dataIndex: 'image',
            render: (text: string) => (<Image src={text} alt="noPhoto"/>),
        },
        {
            key: 'ENERC_KCAL',
            title: "KCAL",
            dataIndex: 'ENERC_KCAL'
        },
        {
            key: 'PROCNT',
            title: "PROCNT",
            dataIndex: 'PROCNT'
        },
        {
            key: 'FAT',
            title: "FAT",
            dataIndex: 'FAT'
        },
        {
            key: 'CHOCDF',
            title: "CHOCDF",
            dataIndex: 'CHOCDF'
        },
        {
            key: 'FIBTG',
            title: "FIBTG",
            dataIndex: 'FIBTG'
        },

    ];

    const dispatch = useDispatch()

    const handleSearchFood = useCallback((value: string) => {
        dispatch(getFoodSearchAutocompleteThunk(value))
    }, [dispatch])

    const handleClickFoodParse = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        //@ts-ignore
        dispatch(getFoodParserThunk(event.target.innerText))
    }, [dispatch])

    const dataSearchFoodMap = useMemo(
        () => dataSearchFood?.map((food) => (
            <Option key={food} value={food}>
                <div onClick={handleClickFoodParse}>{food}</div>
            </Option>
        )), [dataSearchFood]
    )

    return (
        <div>
            <AutoComplete style={{width: 200}} onSearch={handleSearchFood} placeholder="search food">
                {dataSearchFoodMap}
            </AutoComplete>
            {dataFoodParserTable && <Table columns={columns} dataSource={dataFoodParserTable}/>}
        </div>


    )
}

export default Edamam



