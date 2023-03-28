// types
import type { IDocument, IHTMLElement, ISort, ObjectType } from '../types'

export const sortArrayOfObjects = (
  array: ObjectType[],
  sorts: ISort[],
  locale: string = navigator.language,
  localeOptions: Intl.CollatorOptions = { numeric: true }
): ObjectType[] => {
  const compare = (a: ObjectType, b: ObjectType, index: number = 0): number | typeof compare => {
    const { param, desc = false }: ISort = sorts[index]
 
    let result = 0
    const valueA: string = a[param].toString()
    const valueB: string = b[param].toString()
    if (desc)
      result = valueB.localeCompare(valueA, locale, localeOptions)
    else
      result = valueA.localeCompare(valueB, locale, localeOptions)

    index++
    if (result === 0 && sorts.length > index)
      return compare(a, b, index)

    return result
  }
  return array.sort((a, b) => compare(a, b))
}

export const isFullScreen = (doc: IDocument = window.document as IDocument): boolean => {
  return !!(doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement)
}

export const toggleFullScreen = (elem?: IHTMLElement): Promise<boolean> => {
  let promise: Promise<void> | undefined
  const doc: IDocument = window.document as IDocument
  if (!elem) {
    elem = doc.documentElement as IHTMLElement
  }
  if (!isFullScreen(doc)) {
    if (elem.requestFullscreen) {
      promise = elem.requestFullscreen()
    } else if (elem.mozRequestFullScreen) {
      promise = elem.mozRequestFullScreen()
    } else if (elem.msRequestFullscreen) {
      promise = elem.msRequestFullscreen()
    } else if (elem.webkitRequestFullscreen) {
      promise = elem.webkitRequestFullscreen()
    }
  }
  else {
    if (doc.exitFullscreen) {
      promise = doc.exitFullscreen()
    } else if (doc.msExitFullscreen) {
      promise = doc.msExitFullscreen()
    } else if (doc.mozCancelFullScreen) {
      promise = doc.mozCancelFullScreen()
    } else if (doc.webkitExitFullscreen) {
      promise = doc.webkitExitFullscreen()
    }
  }
  return promise?.then(() => isFullScreen(doc)) ?? Promise.resolve(isFullScreen(doc))
}

export const getCookie = (key: string): string | null => {
  const nameEQ = `${key}=`
  const decodedCookie = decodeURIComponent(window.document.cookie)
  const cookies = decodedCookie.split(';')
  for (let cookie of cookies) {
    cookie = cookie.trim()
    if (cookie.startsWith(nameEQ)) {
      return cookie.substring(nameEQ.length, cookie.length)
    }
  }
  return null
}

// param minutes with zero or null value, creates a session cookie
export const setCookie = (key: string, value: any, minutes: null | number = (10 * 365 * 24 * 60), samesite?: string, secure?: boolean): void => {
  const params = ['path=/']
  if (samesite === 'strict' || samesite === 'lax') {
    params.push(`samesite=${samesite}`)
  }
  if (secure) {
    if (samesite === 'none') {
      params.push('samesite=none')
    }
    params.push('secure')
  }
  if (minutes) {
    const date = new Date()
    date.setTime(date.getTime() + (minutes * 60 * 1000))
    params.push(`expires=${date.toUTCString()}`)
  }
  window.document.cookie = `${key}=${value};${params.join(';')}`
}

export const getNestedValue = (data: ObjectType | any[], path: string | (string|number)[]): any => {
  if (path) {
    if (typeof path === 'string') {
  		path = path.split('.')
    }
    for (let i = 0; i < path.length; i++) {
    	data = data[path[i]]
    }
  }
  return data
}

export const checkType = (variable: any, expected: string): void => {
  const type = typeof variable
  if (type !== expected) {
    throw `TypeError: a variable's type is a ${type}, but the expected is a ${expected}`
  }
}

export const round = (value: number): number => (Math.round(value * 100) / 100)

export const isTouchDevice = (): boolean => (('ontouchstart' in window) || (navigator.maxTouchPoints > 0))

export default {
  sortArrayOfObjects,
  isFullScreen,
  toggleFullScreen,
  getCookie,
  setCookie,
  getNestedValue,
  checkType,
  round,
  isTouchDevice,
}
