const apiRouter = require("express").Router();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

const branchRouter = require("./branch");
apiRouter.use("/branch", branchRouter);

const branchDateRouter = require("./dates");
apiRouter.use("/dates", branchDateRouter);

module.exports = apiRouter;
