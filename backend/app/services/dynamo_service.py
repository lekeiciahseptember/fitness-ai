from fastapi import APIRouter, HTTPException
from typing import Dict
import uuid
from ..services.dynamo_service import DynamoDBService
from passlib.context import CryptContext

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
db_service = DynamoDBService()

@router.post("/register")
async def register_user(user_data: Dict):
    user_id = str(uuid.uuid4())
    
    hashed_password = pwd_context.hash(user_data["password"])
    
    dynamo_user = {
        "user_id": user_id,
        "username": user_data["username"],
        "email": user_data["email"],
        "password_hash": hashed_password,
        "height": float(user_data["height"]) if user_data.get("height") else None,
        "weight": float(user_data["weight"]) if user_data.get("weight") else None,
        "fitness_level": user_data.get("fitness_level", "beginner"),
        "goals": user_data.get("goals", [])
    }
    
    result = db_service.add_user(dynamo_user)
    
    if not result["success"]:
        raise HTTPException(status_code=400, detail=result["message"])
    
    del dynamo_user["password_hash"]
    return {
        "message": "Registration successful",
        "user": dynamo_user
    }