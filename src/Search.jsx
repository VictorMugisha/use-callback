import { memo } from 'react'

const Search = ({ onChange }) => {
    console.log("Search Component rendered")
    return (
        <input type="text"
            placeholder="Search users..."
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default memo(Search)