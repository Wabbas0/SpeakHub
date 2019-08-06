import request from "../request";
import queryString from "query-string";

export const getRepoData = async (repoName, repoOwner, resourceName, query) => {
  try {
    const queryParams = query ? queryString.stringify(query) : "";
    const result = await request({
      url: `/repos/${repoOwner}/${repoName}${queryParams}`
    });
    if (result) {
      return result;
    }
    throw result;
  } catch (error) {
    throw error;
  }
};

export default getRepoData;
