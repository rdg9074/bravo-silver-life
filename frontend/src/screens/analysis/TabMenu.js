import React, { useState } from 'react'
import axios from 'axios'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import FindPlace from './FindPlace'
import BookMarkPlace from './BookMarkPlace'
import './TabMenu.css'

const TabMenu = ({ userId, optionDataList, dataList, emptyStore, setEmptyStore }) => {
  const [userBookMark, setUserBookMark] = useState([])

  const getUserBookMarkList = async () => {
    if (userId !== '' && userId !== null) {
      const getBookMarkURL = `https://k7c208.p.ssafy.io/api/v1/estate/bookmarks?id=${userId}`
      const response = await axios.get(getBookMarkURL)

      setUserBookMark(response.data)
    } else;
  }

  return (
    <Tabs
      defaultActiveKey="search_page"
      id="fill-tab-example"
      className="tabs_wrap"
      fill
      onSelect={getUserBookMarkList}
    >
      <Tab eventKey="search_page" title="매물 검색" className='findplace_tab_page'>
        <FindPlace dataList={dataList}
          emptyStore={emptyStore} setEmptyStore={setEmptyStore}
          optionDataList={optionDataList}
          userId={userId} />
      </Tab>
      <Tab eventKey="bookmark_page" title="북마크" className='bookmark_tab_page'>
        <BookMarkPlace userId={userId} userBookMark={userBookMark}
          optionDataList={optionDataList} />
      </Tab>
    </Tabs>
  )
}

export default TabMenu