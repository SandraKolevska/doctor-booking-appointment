const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

const router = express.Router()

// Регистрација
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body

    // Провери дали корисник со таков емаил веќе постои
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' })
    }

    // Хеширај лозинка
    const hashedPassword = await bcrypt.hash(password, 10)

    // Креирај корисник
    const newUser = new User({ name, email, password: hashedPassword })
    await newUser.save()

    res.status(201).json({ message: 'User created successfully' })
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Логин
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' })
    }

    
    res.json({ message: 'Login successful', user: { id: user._id, name: user.name, email: user.email } })
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
})

module.exports = router
