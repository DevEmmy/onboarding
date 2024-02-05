/**
 * @swagger
 * components:
 *   schemas:
 *     Artist:
 *       type: object
 *       required:
 *         - user (userId)
 *         - artistName
 *         - cover
 *         - genres
 *         - spotify
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the Users
 *         cover:
 *           type: string
 *           description: artist's cover photo
 *         artistName:
 *           type: string
 *           description: artist's name
 *         user:
 *           type: string
 *         genres:
 *           type: array
 *           description: Array of artist's genre
 *         spotify:
 *             type: string
 *              description: Artist's Spotify link
 *         apple:
 *             type: string
 *              description: Artist's Apple Music link
 * 
 *         ig:
 *              type: string
 *              description: Link to Artist's Instagram page
 *          facebook:
 *              type: string
 *              description: Link to Artist's Facebook page
 *         twitter:
 *              type: array
 *              description: Array of Artist's Followers (UserIds)
 *          followers:
 *              type: string
 *              description: Link to Artist's Facebook page
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the Users was added
 */

/**
 * @swagger
 * tags:
 *   name: Artists
 *   description: This manages all Artist's endpoints
 * /artists/sign-up:
 *   post:
 *     summary: To Sign Users Up
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       parameters:
 *          in: body
 *          schema:
 *              properties:
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *                  username:
 *                      type: string
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: Successfull.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 * 
 * /auth/sign-in:
 *   post:
 *     summary: To Sign Users In
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       parameters:
 *          in: body
 *          schema:
 *              properties:
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: Successfull.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 *
 * /auth/forgot-password:
 *   post:
 *     summary: for users to get email to reset password
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       parameters:
 *          in: body
 *          required: true
 *       content:
 *         application/json:
 *           schema:
 *              properties:
 *                  email:
 *                    type: string
 *     responses:
 *       200:
 *         description: Successfull.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                   message:
 *                      type: string,
 *                      example: Reset Code Sent
 *       500:
 *         description: Some server error
 * 
 * /auth/reset-password:
 *   post:
 *     summary: for users to reset password
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       parameters:
 *          in: body
 *          required: true
 *       content:
 *         application/json:
 *           schema:
 *              properties:
 *                  email:
 *                    type: string
 *                  resetCode:
 *                    type: string
 *     responses:
 *       200:
 *         description: Successfull.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                   message:
 *                      type: string,
 *                      example: Reset Code Sent
 *       500:
 *         description: Some server error
 * 
 * /auth/{id}:
 *   get:
 *     summary: to get specific user
 *     tags: [Users]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 * 
 *     responses:
 *       200:
 *         description: Successfull.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 * 
 *   patch:
 *     summary: To Update user profile
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       parameters:
 *          in: body
 *          schema:
 *              $ref: '#/components/schemas/Users'
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: Successfull.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 */