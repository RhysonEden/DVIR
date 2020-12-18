const bcrypt = require("bcrypt");
const SALT_COUNT = 10;
const {
  client,
  getReportsByBranch,
  getReportsByDate,
  getReportsByBranchDate,
} = require("./index");

// async function createTables() {
//   try {
//     await client.query(`
//         CREATE TABLE reports (
//           id SERIAL PRIMARY KEY,
//           Submission varchar,
//           Branch varchar,
//           Technician varchar,
//           Date date,
//           Type varchar,
//           Number varchar,
//           Defects varchar,
//           trailer varchar,
//           Brakes varchar,
//           Coupling varchar,
//           Remarks varchar,
//           Options varchar,
//           Dsignature varchar,
//           Msignature varchar,
//           DrSignature varchar
//         );
//       `);
//   } catch (error) {
//     throw error;
//   }
// }

// async function dropTables() {
//   try {
//     console.log("Starting to drop tables...");
//     await client.query(`
//     DROP TABLE if EXISTS reports;
//       `);

//     console.log("Finished dropping tables!");
//   } catch (error) {
//     console.error("Error dropping tables!");
//     throw error;
//   }
// }

async function rebuildDB() {
  try {
    client.connect();
    console.log;
  } catch (error) {
    throw error;
  }
}

async function testDB() {
  try {
    // await dropTables();
    // await createTables();
    const alls = await getReportsByBranchDate(
      "2020-11-25",
      "2020-11-25",
      "ATLANTA"
    );
    // const ranges = await getReportsByDate("2020-11-02", "2020-12-02");
    // const branch = await getReportsByBranch("ATLANTA");
    console.log(alls);
    // console.log(ranges);
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
