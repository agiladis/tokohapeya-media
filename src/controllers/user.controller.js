const { PrismaClient } = require('@prisma/client');
const ResponseTemplate = require('../helper/response.helper');
const prisma = new PrismaClient();

async function Insert(req, res) {
  res.status(201).json(ResponseTemplate(null, 'created', null, 201));
}

module.exports = { Insert };
