export default function mapValues<Obj extends object, Res extends {
    [key in keyof Obj]: any;
}>(o: Obj, func: (value: Obj[Extract<keyof Obj, string>]) => Res[Extract<keyof Obj, string>]): Res;
