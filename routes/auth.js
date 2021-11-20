const router = require('express').Router()
const User = require('../model/User')
const bcrypt = require('bcryptjs')

router.post('/register', async (req, res) => {
  //checking if the user is already registered
  User.findOne({ name: req.body.name }, (err, user) => {
    if (err) return res.status(400).send(err)
    if (user) return res.status(400).send('User already exists')
  })

  //hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  //create a new user
  const user = new User({
    name: req.body.name,
    mobile: req.body.mobile,
    password: hashedPassword
  })
  try {
    const savedUser = await user.save()
    res.send({ user: savedUser._id })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

router.post('/login', async (req, res) => {
  //checking the user
  const user = await User.findOne({ name: req.body.name })
  if (!user) return res.status(400).send('invalid email')

  //checking the user password
  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword) return res.status(400).send('invalid password')

  res.send('Success!')
})
module.exports = router
