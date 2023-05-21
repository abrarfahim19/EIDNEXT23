---
title: 'What is Pure function? Why Redux needs reducers to be it?'
date: '2023-05-21'
---

## What is pure function?
Any function that takes x input and always output y for it. Is called pure function.

And the function doesn’t alter input data and doesn’t depend on external state (like a database, DOM, or global variable)

## Why Redux Needs The Reducers To Be Pure Function?

### What we do in Redux Reducer?
Follow the code bellow:
```js
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
```

More specifically focus on this part:
```js
case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
```

What we did in here is didn't mutate the original object. Instead we created a new state(object) from the old state and return it.

Or if nothing is changed we just return the old state.

### Why we do it this way?

There is something like this in the underlying code of redux:

```js
// pass the OLD state to the Reducer and get NEW State
var newStateForKey = reducer(previousStateForKey, action)
...
...
hasChanged = hasChanged || newStateForKey !== previousStateForKey
...
...
return hasChanged ? nextState : state
```

So when we use pure function we can know whether, the object is changed from `newStateForKey !== previousStateForKey` and it doesn't deep compare the objects.

But if we just mutated the original object we would have to deep compare the object. And that would be computationally expensive.

That is why we use pure function for Redux Reducers