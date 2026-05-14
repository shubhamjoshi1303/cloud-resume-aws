import json
import os

import boto3
from botocore.exceptions import BotoCoreError, ClientError


COUNTER_ID = "site-views"
CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET,OPTIONS",
    "Content-Type": "application/json",
}

dynamodb = boto3.resource("dynamodb")


def _response(status_code, body):
    return {
        "statusCode": status_code,
        "headers": CORS_HEADERS,
        "body": json.dumps(body),
    }


def _http_method(event):
    return (
        event.get("requestContext", {})
        .get("http", {})
        .get("method", event.get("httpMethod", "GET"))
    )


def lambda_handler(event, context):
    method = _http_method(event)

    if method == "OPTIONS":
        return _response(204, {})

    if method != "GET":
        return _response(405, {"error": "Method not allowed"})

    table_name = os.environ.get("TABLE_NAME")
    if not table_name:
        return _response(500, {"error": "Server configuration error"})

    try:
        table = dynamodb.Table(table_name)
        result = table.update_item(
            Key={"id": COUNTER_ID},
            UpdateExpression="SET #views = if_not_exists(#views, :zero) + :inc",
            ExpressionAttributeNames={"#views": "views"},
            ExpressionAttributeValues={":zero": 0, ":inc": 1},
            ReturnValues="UPDATED_NEW",
        )
        views = int(result["Attributes"]["views"])
        return _response(200, {"views": views})
    except (BotoCoreError, ClientError, KeyError, TypeError, ValueError):
        return _response(500, {"error": "Could not update visitor counter"})
