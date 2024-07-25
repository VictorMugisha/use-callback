import { memo } from 'react'

const Search = ({ onChange }) => {
    return (
        <input type="text"
            placeholder="Search users..."
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default memo(Search)