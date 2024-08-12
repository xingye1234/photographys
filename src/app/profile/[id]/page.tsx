import React from 'react'

export default function Id({params:{id}}: { params: { id: string } }) {
  return (
    <div>{id}</div>
  )
}
