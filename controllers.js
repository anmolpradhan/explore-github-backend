import axios from "axios";

const apiUrl="https://api.github.com";
export const getUser = async (req, res) => {
  const user = req.params.user;
  await axios
    .get(apiUrl+"/users/"+user)
    .then((response) => {
      console.log(response)
      res.send(response.data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send("Error Occured")
    });
};
export const getRepos = async (req, res) => {
  const query = req.params.query;
  console.log(req.query)
  await axios
    .get(apiUrl+"/search/repositories?q="+query)
    .then((response) => {
      console.log(response.data.items)
      res.send(response.data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    });
};
export const getRepo = async (req, res) => {
  const user = req.params.user;
  const repos = req.params.repos;
  await axios
    .get(apiUrl+"/repos/"+user+"/"+repos)
    .then((response) => {
      console.log(response.data.items)
      res.send(response.data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    });
};
export const getReadMe = async (req, res) => {
  const user = req.params.user;
  const repo = req.params.repo;
  const branch = req.params.branch;
  const url = "https://raw.githubusercontent.com/" + user + "/" + repo + "/"+
  branch + "/README.md";
  await axios
  .get(url)
  .then((response) => {
    res.send(response.data);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
};
