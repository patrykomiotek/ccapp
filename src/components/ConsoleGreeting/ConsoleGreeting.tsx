import { useState, useCallback, useMemo, useEffect } from "react";

type Props = {
  readonly name: string;
}

const sum = (a: number, b: number) => {
  console.log('a: ', a, 'b: ', b);
  return a + b
};

const Sum = ({ a, b }: { a: number, b: number }) => {
  const result = useMemo(() => sum(a, b), [a, b]); // function result
  // const result = useCallback(() => sum(a, b), [a, b]); // function

  // const callback = useCallback(() => {

  // }, [param]);

  // useEffect(() => {

  // }, [callback]);

  return <div>{result}</div>;
}

export const ConsoleGreeting = ({ name }: Props) => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  // hello1, hello2, hello3, hello1
  // const result1 = useMemo(() => sum(2, 2), [name]);

  const greet = useCallback(() => console.log(`Greeting ${name}`), [name]);

  useEffect(() => {
    greet();
  }, [greet]);

  return (
    <>
      <div>check the console</div>
      <Sum a={a} b={b} />
      {/* <Sum a={1} b={3} />
      <Sum a={1} b={4} />
      <Sum a={1} b={2} />
      <Sum a={1} b={4} /> */}

      <input name="a" value={a} onChange={(event) => setA(Number(event.target.value))} />
      <input name="b" value={b} onChange={(event) => setB(Number(event.target.value))}/>
    </>
  );
}