import React from "react"
import SearchTemplate from '../templates/SearchTemplate'
import SearchDisplay from '../organisms/SearchDisplay'

const Search = () => <SearchTemplate Component={SearchDisplay}/>

export default React.memo(Search)