---
title: 'Fast API Quick Guide'
date: '2023-04-27'
---

# Environment Practice
It's best to create an environment and in that environment keep all the project dependency. And to make the most of it create a requirement.txt file that would keep track of all the package and library is installed in the project.

```shell
#Create an environment

~ python -m venv .venv

#Run Environment

~ source ./.venv/bin/activate

#Run Environment with the requirement.txt

~ pip freeze > requirements.txt
```

# Requirment for FastAPI
Python 3.7+

FastAPI stands on the shoulders of giants:

- `Starlette` for the web parts.
- `Pydantic` for the data parts.

for ASGI [Asynchronous Server Gateway Interface] we also need something like `uvicorn`.

# First Example
Just look at the following code:

```python
from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
```

This above code block is pretty self explanatory. We import typing for typecasting and define two routes.

In the context of a web framework like **FastAPI**, a *route* is a function that handles requests to a specific URL path. The get method decorator is used to define a route that only responds to HTTP GET requests.

A decorator is a special type of function in Python that can be used to *modify the behavior of another function*. In this case, the `@app.get("/")` decorator is used to tell FastAPI that the read_root function should handle HTTP GET requests to the root path (“/”).

So, when you see `@app.get("/")` before a function definition, it means that the function is being decorated with the get method of the app object, and will handle HTTP GET requests to the root path (“/”).

# Interactive API
We can use `swagger UI` http://127.0.0.1:8000/docs or `Redoc` http://127.0.0.1:8000/redoc to see beutifull UI of API's and save lots of time.

# Adding Put Method
Update the codeblock to add an put method. We shall import pydanctic to create a BaseModel. Now we can receive a body from PUT request.

```python
from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}
```

With comperatively less code we managed to just put up three decent request in no time.
This is the power of `FASTAPI`.