import dbConnect from "../../../utils/db";
import { Article, validate } from "../../../models/Article";
import errors from "../../../middleware/errors";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const articles = await Article.find({});
        res.status(200).json({ success: true, articles });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const { error } = validate(req.body);
        if (error)
          return res
            .status(400)
            .json({ success: false, message: error.details[0].message });

        const article = new Article(req.body);
        await article.save();
        res.status(200).json({ success: true, article });
      } catch (err) {
        const message = errors(err);
        res.status(400).json({
          success: false,
          message,
        });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
