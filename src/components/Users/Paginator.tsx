import React, {FC} from "react";
import {Pagination} from "antd";



const Paginations : FC<PropsType> = ({totalCount, pageSize, carentPage, setCarentPage, setPageSize}) => {

    let onChangePage = (page: number, pageSize: number) => {
        setCarentPage(page, pageSize)
    }

    const onChangePageSize = (current: number, size: number) => {
        setPageSize(size)
    }

    return <Pagination current={carentPage}
                    defaultCurrent={1}
                    total={totalCount}
                    defaultPageSize={10}
                    pageSize={pageSize}
                    showSizeChanger={true}
                    onChange={onChangePage}
                    onShowSizeChange={onChangePageSize}
                    />

}

export default Paginations

type PropsType = {
    totalCount: number
    pageSize: number
    carentPage: number
    setCarentPage: (carentPage : number, pageSize: number) => void
    setPageSize: (size: number) => void
}






