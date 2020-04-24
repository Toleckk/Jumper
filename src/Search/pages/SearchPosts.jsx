import React from "react"
import SearchTemplate from '../templates/SearchTemplate'
import SearchPostsDisplay from '../organisms/SearchPostsDisplay'

const SearchPosts = () => <SearchTemplate Component={SearchPostsDisplay}/>

export default React.memo(SearchPosts)