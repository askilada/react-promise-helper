import React from 'react'

import { ExampleComponent } from '@aski-utils/react-promise-helper'
import '@aski-utils/react-promise-helper/dist/index.css'
import {usePromiseHelper} from "@aski-utils/react-promise-helper";

const timeOutPromise = (timer: number) => new Promise((resolve) => {
  setTimeout(() => {
    resolve()
  }, timer)
})



const App = () => {
  const timeOuts = usePromiseHelper(() => timeOutPromise(2000))


  return <ExampleComponent onClick={() => timeOuts.start()} text={`Create React Library Example 😄: ${timeOuts.state}`} />
}

export default App
