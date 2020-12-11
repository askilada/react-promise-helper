import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
  onClick: () => void
}

export const ExampleComponent = ({ text, onClick }: Props) => {
  return <div onClick={() => onClick()} className={styles.test}>Example Component: {text}</div>
}


export * from './usePromiseHelper'
