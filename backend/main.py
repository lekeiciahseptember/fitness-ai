from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth  # Add this import

app = FastAPI()

# Add CORS middleware before any routes
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the auth router
app.include_router(auth.router, prefix="/api/auth")

@app.get("/")
def read_root():
    return {"message": "Welcome to the Fitness AI Backend"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)