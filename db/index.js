const { Client } = require("pg");
const bcrypt = require("bcrypt");
const DB_NAME = "dvir";

const client = new Client(
  process.env.DATABASE_URL ||
    `postgressql://postgres:james@localhost:5432/${DB_NAME}`
);

async function getReportsByBranch(branch) {
  try {
    console.log("Firing User by Username", branch);
    const { rows } = await client.query(
      `
      SELECT *
      FROM reports
      WHERE Branch = $1;
    `,
      [branch]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getReportsByDate(one, two) {
  try {
    console.log("Firing report by range", one, two);
    const { rows } = await client.query(
      `
      SELECT *
      FROM reports
      WHERE date BETWEEN $1 AND $2
    `,
      [one, two]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getReportsByBranchDate(one, two, three) {
  try {
    console.log("Firing report by range", one, two, three);
    const { rows } = await client.query(
      `
      SELECT *
      FROM reports
      WHERE date BETWEEN $1 AND $2
      AND branch = $3
    `,
      [one, two, three]
    );
    console.log("report", rows);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getAllBranches() {
  try {
    console.log("All Branches");
    const { rows } = await client.query(
      `
      SELECT *
      FROM reports
    `
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  client,
  getReportsByBranch,
  getAllBranches,
  getReportsByDate,
  getReportsByBranchDate,
};
