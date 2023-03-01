## Installation
```
npm install https://github.com/VaclavDanek/js-utils.git

or

yarn add https://github.com/VaclavDanek/js-utils.git
```

## Examples
### Functions
```javascript
import { functions } from 'js-utils'
```
function | specification
---|---
sortArrayOfObjects | (array: Array<{[key: string]: any}>, sorts: Array<{param: string, desc?: boolean}>, locale?: string, localeOptions?: [options](https://www.jsman.net/manual/Standard-Global-Objects/String/localeCompare)) => Array<{[key: string]: any}>
isFullScreen | (doc?: Document = window.document) => boolean
toggleFullScreen | (elem?: HTMLElement = document.documentElement) => boolean
getCookie | (key: string) => string
setCookie | (key: string, value: any, minutes?: number/null = 5256000, samesite?: string, secure?: boolean) => void
getNestedValue | (data: {[key: string]: any}/Array<any>, path: string/Array<string/number>) => any

### Validations
```javascript
import { validations } from 'js-utils'
```
function | specification
---|---
matches | (value: any, regex: string) => boolean
isNumber | (value: any) => boolean
hasMinNumber | (value: number, minNumber: number) => boolean
hasMaxNumber | (value: number, maxNumber: number) => boolean
isAlphabetic | (value: string/number) => boolean
isAlphanumeric | (value: string/number) => boolean
hasMinLength | (value: string, minLength: number) => boolean
hasMaxLength | (value: string, maxLength: number) => boolean
isEmail | (value: string) => boolean
isPhone | (value: string, withPrefix?: boolean = false) => boolean
isPSC | (value: string/number) => boolean
isRC | (value: string/number) => boolean
isICO | (value: string/number) => boolean
isDIC | (value: string) => boolean

### ServiceWorker
```javascript
import { serviceWorker } from 'js-utils'

componentDidMount = () => {
  if (process.env.NODE_ENV === 'production') {
    serviceWorker.register({
      onUpdate: () => {
        // here you can reload page and perhaps also show some alert to user
      },
      swUrl: '', // url of the service worker script
    })
  }
}
```
