const apiRouter = require("express");
const branchDateRouter = apiRouter.Router();
const { getReportsByBranchDate } = require("../db");

branchDateRouter.post("/", async (req, res, next) => {
  try {
    console.log("testing", req.body.body.start);
    // console.log("params", params);
    // const { branch, start, end } = req.body;
    // console.log("running dates", req.body);
    const branch = req.body.body.branch;
    const start = req.body.body.start;
    const end = req.body.body.end;
    console.log("test", typeof start);
    // console.log("dates", branch, start, end);
    console.log("running func");
    const branches = await getReportsByBranchDate(start, end, branch);
    // console.log(branches);
    // res.send({
    //   message: "Users is under construction!",
    // });
    console.log("result", branches);
    res.send({ branches });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = branchDateRouter;
