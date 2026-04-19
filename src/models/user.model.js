import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowrcase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowrcase: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    refreshToken: {
      type: String,
      default: null,
    },
    forgotPasswordToken: {
      type: String,
      default: null,
    },
    forgotPasswordTokenExpiry: {
      type: Date,
      default: null,
    },
    emailValidationToken: {
      type: String,
      default: null,
    },
    emailValidationTokenExpiry: {
      type: Date,
      default: null,
    },
    avatar: {
      type: {
        url: String,
        local_path: String,
      },
      default: {
        url: "https://res.cloudinary.com/dzj8q4l6c/image/upload/v1700000000/default-avatar.png",
        local_path: "default-avatar.png",
      },
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password=await bcrypt.hash(this.password, 10)
  next();
})
export const User = mongoose.model("User", userSchema);
