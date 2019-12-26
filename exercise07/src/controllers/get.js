import db from "../lowdb";

async function getTask(req, res) {
  let data = db.get("tasks");
  if (!data) {
    return res.status(404).send("Not Found");
  } else {
    return res.status(200).send(data);
  }
}

export {getTask};
