import { useState } from "react";

interface ArrayOpts<T> {
  value: T[];
  clear(): void;
  removeIndex(index: number): void;
  add(value: T): void;
}

export default function <T = {}>(value: T[]) {
  const [list, setList] = useState<Array<T>>(value);
  const clear = function (): void {
    setList([]);
  };
  const removeIndex = function (index: number): void {
    const n = list.splice(index, 1);
    setList(n);
  };
  const add = function (value: T): void {
    setList([...list, value]);
  }
  const opts = {
    list, clear, removeIndex, add
  }
  return list;
}