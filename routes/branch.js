const apiRouter = require("express");
const branchRouter = apiRouter.Router();
const { getReportsByBranch, getAllBranches } = require("../db");

branchRouter.get("/:id", async (req, res, next) => {
  try {
    console.log("running router", req.params.id);
    const branch = req.params.id;
    console.log("params", branch);
    const branches = await getReportsByBranch(branch);
    console.log(branches);
    // res.send({
    //   message: "Users is under construction!",
    // });
    res.send({ branches });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

branchRouter.get("/", async (req, res, next) => {
  try {
    const branch = req.params.id;
    const branches = await getAllBranches();
    console.log(branches);
    // res.send({
    //   message: "Users is under construction!",
    // });
    res.send({ branches });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = branchRouter;
