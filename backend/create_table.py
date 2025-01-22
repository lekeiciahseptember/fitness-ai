# create_table.py
from app.services.dynamo_service import DynamoDBService

def main():
    db = DynamoDBService()
    print("Creating Users table...")
    db.create_user_table()
    print("Table created successfully!")

if __name__ == "__main__":
    main()