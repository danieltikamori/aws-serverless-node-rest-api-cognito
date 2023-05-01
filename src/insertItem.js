"use strict";

const AWS = require("aws-sdk");
const { v4 } = require("uuid");

const insertItem = async (event) => {
  const { item } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4();

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const newItem = {
    id,
    item,
    createdAt,
    itemStatus: false
  };

  try {
    await dynamodb
      .put({
        TableName: "ItemTableNew",
        Item: newItem
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify(newItem)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};

module.exports = {
  handler: insertItem
};
