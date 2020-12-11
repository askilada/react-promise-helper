# @aski-utils/react-promise-helper


[![NPM](https://img.shields.io/npm/v/react-promise-helper.svg)](https://www.npmjs.com/package/react-promise-helper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @aski-utils/react-promise-helper
```

## Usage

```tsx
import React, { FC } from 'react'
import {usePromiseHelper} from '@aski-utils/react-promise-helper'


interface ComponentProps {
}

export const DemoComponent: FC<ComponentProps> = () => {
    const {state, start} = usePromiseHelper(() => Promise.resolve('Awesome'))

    return (<div onClick={() => start()}>{state}</div>)
}




```

## License

MIT © [askilada](https://github.com/askilada)
