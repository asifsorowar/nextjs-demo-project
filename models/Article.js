import mongoose from "mongoose";
import Joi from "joi";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 5,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      minlength: 5,
    },
  },
  { timestamp: true }
);

export const Article =
  mongoose.models.Article || mongoose.model("Article", articleSchema);

export const validate = (article) => {
  const schema = Joi.object({
    title: Joi.string().min(5).trim().required(),
    body: Joi.string().min(5).required(),
  });
  return schema.validate(article);
};
