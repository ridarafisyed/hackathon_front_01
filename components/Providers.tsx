'use client'

import { Provider } from 'react-redux'
import { store } from '@/store/store'

import React from 'react'

interface Props {
    children: React.ReactNode
}

const Providers = (props: Props) => {
  return (
    <Provider store={store}>{props.children}</Provider>
  )
}

export default Providers