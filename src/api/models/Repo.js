import request from "../request";
import queryString from "query-string";

export const getRepoData = async (repoName, repoOwner, resource, query) => {
  try {
    const queryParams = query ? queryString.stringify(query) : "";
    const result = await request({
      url: `/repos/${repoOwner}/${repoName}/${resource}?${queryParams}`
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
