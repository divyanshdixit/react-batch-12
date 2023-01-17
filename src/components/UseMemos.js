// used when concerned for performance optimization issue.


// counter.js
// memoization
// const cachedValue = useMemo(callback, [dependecny array])

// cb => function that return value needs to be cached.
// useMemo invokes the provided function and cached the return result

import React from 'react'

function UseMemos() {
  return (
    <div>useMemo</div>
  )
}

export default useMemo