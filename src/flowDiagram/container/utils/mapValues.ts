export default function mapValues<
  Obj extends object,
  Res extends { [key in keyof Obj]: any }
> (o: Obj, func: (value: Obj[keyof Obj]) => Res[keyof Obj]) {
  const res: Res = {} as any
  for (const key in o) {
    if (o.hasOwnProperty(key)) {
      res[key] = func(o[key])
    }
  }
  console.log("----res---- ", res)
  return res
}
