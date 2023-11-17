const { PrismaClient } = require('@prisma/client');
const ResponseTemplate = require('../helper/response.helper');
const prisma = new PrismaClient();
const hashPassword = require('../utils/hashPassword');

async function Insert(req, res) {
  const { name, email, password, profilePicture, address, memberId } = req.body;

  try {
    const hashedPassword = await hashPassword(password);
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        profilePicture: profilePicture
          ? profilePicture
          : `https://ui-avatars.com/api/?name=${name}&background=random`,
        address: address,
        memberId: memberId,
      },
    });

    if (!newUser) {
      return res
        .status(400)
        .json(ResponseTemplate(null, 'failed to register new user', null, 400));
    }

    return res
      .status(201)
      .json(ResponseTemplate(newUser, 'created', null, 201));
  } catch (error) {
    return res
      .status(500)
      .json(ResponseTemplate(null, 'internal server error', error, 500));
  }
}

module.exports = { Insert };
