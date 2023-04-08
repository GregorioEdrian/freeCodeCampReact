from fastapi import FastAPI

app = FastAPI()

@app.get("/primera-prueba")
async def root():
    return {"message": "Hello World"}