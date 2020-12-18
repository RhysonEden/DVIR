import axios from "axios";

export async function getBranch(branch) {
  try {
    console.log("api/index", branch);
    const { data } = await axios.get(`/api/branch/${branch}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getSomething() {
  try {
    const { data } = await axios.get(`/api/branch/`);
    return data;
  } catch (error) {
    throw error;
  }
}

// export async function getBranchDates(branch, start, end) {
//   try {
//     console.log("api/index", branch, start, end);
//     const data = await axios.get("/api/dates", {
//       body: {
//         branch,
//         start,
//         end,
//       },
//     });

//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

export async function getBranchDates(branch, start, end) {
  try {
    console.log("api/index", branch, start, end);
    const { data } = await axios.post(`/api/dates/`, {
      body: {
        start,
        end,
        branch,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

// axios.get(`/api/dates/${branch}/${start}/${end}`);
// ${branch}/${start}/${end}
