import dbConnect from "../../../utils/db";
import { Article, validate } from "../../../models/Article";
import errors from "../../../middleware/errors";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const article = await Article.findById(req.query.id);
        if (!article)
          return res
            .status(404)
            .json({ success: false, message: "article not found!!" });
        res.status(200).json({ success: true, article });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const { error } = validate(req.body);
        if (error)
          return res
            .status(400)
            .json({ success: false, message: error.details[0].message });

        const article = await Article.findByIdAndUpdate(
          req.query.id,
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );
        if (!article)
          return res
            .status(404)
            .json({ success: false, message: "article not found!!" });

        res.status(200).json({ success: true, article });
      } catch (error) {
        const message = errors(err);
        res.status(400).json({
          success: false,
          message,
        });
      }
      break;

    case "DELETE":
      try {
        const article = await Article.findByIdAndDelete(req.query.id);
        if (!article)
          return res
            .status(404)
            .json({ success: false, message: "Already deleted!!" });

        res.status(200).json({ success: true, article });
      } catch (error) {
        res.status(400).json({ success: false });
      }

    default:
      res.status(400).json({ success: false });
      break;
  }
};
