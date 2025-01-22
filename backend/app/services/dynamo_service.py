# backend/app/services/dynamo_service.py
import boto3
from botocore.exceptions import ClientError
from typing import Dict

class DynamoDBService:
    def __init__(self):
        self.dynamodb = boto3.resource('dynamodb')
        
    def create_user_table(self):
        table = self.dynamodb.create_table(
            TableName='Users',
            KeySchema=[
                {
                    'AttributeName': 'user_id',
                    'KeyType': 'HASH'
                }
            ],
            AttributeDefinitions=[
                {
                    'AttributeName': 'user_id',
                    'AttributeType': 'S'
                }
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 5,
                'WriteCapacityUnits': 5
            }
        )
        return table

    def add_user(self, user_data: Dict) -> Dict:
        table = self.dynamodb.Table('Users')
        try:
            response = table.put_item(Item=user_data)
            return {"success": True, "message": "User added successfully"}
        except ClientError as e:
            return {"success": False, "message": str(e)}