from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from multiprocessing import Process, freeze_support

import uvicorn

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the Fitness AI Backend"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    mutiprocessing.freeze_support()
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:3000"], 
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True, workers=1)