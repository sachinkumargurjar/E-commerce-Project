import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    select: false, // Don't return the password by default
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!',
    },
  },
});

// Middleware to hash passwords before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salts = 12;
  this.password = await bcrypt.hash(this.password, salts);
  this.confirmPassword = undefined; // Remove passwordConfirm from the document
  next();
});

userSchema.methods.correctPassword = async function(candidatepassword,userpassword) {
  return await bcrypt.compare(candidatepassword,userpassword);
}

const User = mongoose.model('User', userSchema);

export default User;
