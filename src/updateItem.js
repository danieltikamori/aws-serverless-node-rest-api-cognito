"use strict";

const AWS = require("aws-sdk");

const updateItem = async (event) => {
  const { itemStatus } = JSON.parse(event.body);
  const { id } = event.pathParameters;

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  try {
    await dynamodb
      .update({
        TableName: "ItemTableNew",
        Key: { id },
        UpdateExpression: "set itemStatus = :itemStatus",
        ExpressionAttributeValues: {
          ":itemStatus": itemStatus
        },
        ReturnValues: "ALL_NEW"
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: "Item updated" })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};

module.exports = {
  handler: updateItem
};
