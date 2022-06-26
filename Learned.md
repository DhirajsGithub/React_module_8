# What are Custom Hooks ?

## Outsource stateful logic into re-usable funcitons Unklike regular functions, custom hooks can use other react hooks and react state A hook (a custom hook in general) should be generic - it's not limited to one specific input

 
## useEffect and dependency as function :
1. functions are objects in JavaScript.
2. And every time a function is recreate even if it contains the same logic, it's a brand new object in memory
3. and therefore useEffect would treat it as a new value, 
4. even if it's technically the same function and it would re execute it. 
5. So to avoid this, we should go to useHttp and wrap sendRequest with use callback which we can do also when we use a single weight in there

# useCallback() hook :
1. The React useCallback Hook returns a memoized callback function.
2. The useCallback Hook only runs when one of its dependencies update.

```
const memoizedCallback = useCallback(
 () => {
   doSomething(a, b);
 },
 [a, b],
);
```
here a, b are dependecies i.e. when to recreate the memoizedCallback function again if a, b changes !

