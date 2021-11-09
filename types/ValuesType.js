// @flow
export type Values = {
  [name: string]: string | number,
}

export type ValueObject = {
  [key: string]: ValueObject | string | number | Function | Array,
}

export type Sort = { param: string, desc?: boolean }
