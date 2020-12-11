import {useState} from 'react'
import {PromiseState} from './PromiseState';


export interface UsePromiseHelperReturn<StartArgs extends any[], PValue> {
  state: PromiseState
  start: (...args: StartArgs) => void
  data: PValue|null
  error: any|null
}

export function usePromiseHelper<PValue, FuncArgs extends any[]>(promiseFunc: (...args: FuncArgs) => Promise<PValue>): UsePromiseHelperReturn<FuncArgs, PValue> {
  const [promiseState, setPromiseState] = useState<PromiseState>(PromiseState.Waiting)
  const [data, setData] = useState<PValue|null>(null)
  const [error, setError] = useState<any|null>(null)


  const start = (...args: FuncArgs) => {
    setPromiseState(PromiseState.Loading)
    promiseFunc(...args)
      .then(data => {
        setData(data)
        setError(null)
        setPromiseState(PromiseState.Success)
      })
      .catch(error => {
        setData(null)
        setError(error)
        setPromiseState(PromiseState.Failure)
      })
  }

  return {
    state: promiseState,
    start,
    data,
    error
  }
}
