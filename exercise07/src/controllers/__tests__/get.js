import {getTask} from "../get";
import db from "../../lowdb";

function setup() {
  const req = {
    body: {},
  }
  const res = {}
  const next = jest.fn()
  Object.assign(res, {
    status: jest.fn(
      function status() {
        return this
      }.bind(res),
    ),
    json: jest.fn(
      function json() {
        return this
      }.bind(res),
    ),
    send: jest.fn(
      function send() {
        return this
      }.bind(res),
    ),
  })
  return {req, res, next}
}

jest.mock("../../lowdb", () => {
  const low = require('lowdb');
  const Memory = require('lowdb/adapters/Memory');

  return low(new Memory());
})

beforeAll(() => {
  db.defaults({tasks: []}).write()
})

afterEach(() => {
  db.set('tasks', []).write()
})

describe('getTask', function () {
  test("task is empty should send []", async () => {
    const {res, req, next} = setup();

    await getTask(req, res, next);

    expect(res.status).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.send).toHaveBeenCalled();
    expect(res.send).toHaveBeenCalledWith(expect.arrayContaining([]));
    expect(db.get('tasks').value()).toEqual([])
  })

  test("successfully get tasks", async () => {
    const {res, req, next} = setup();
    db.get('tasks').push({
      title: "Hi"
    }).write()
    db.get('tasks').push({
      title: "Bye"
    }).write()

    await getTask(req, res, next);

    expect(res.status).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(200)
    // expect(res.send.mock.calls[0][0]).toEqual(expect.arrayContaining([
    //   expect.objectContaining({title: "Hi"})
    // ]));
    // expect(res.send).toHaveBeenCalledWith(expect.arrayContaining([
    //   expect.objectContaining({title: "Hi"})
    // ]))
    // expect(res.send.mock.calls[0][0]).toEqual([{title: "Hi"}, {title: "Bye"}])
    expect(JSON.stringify(res.send.mock.calls[0][0])).toEqual(JSON.stringify([{title: "Hi"}, {title: "Bye"}]))
    expect(db.get('tasks').value()).toEqual([
      {
        "title": "Hi"
      },
      {
        "title": "Bye"
      },
    ])
  })
});
