let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "please provide name value" });
  }
  res.status(201).send({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  // if data matches id....
  const person = people.find((person) => person.id === Number(id));
  // 404 error
  if (!person) {
    return res.status(404).json({ success: false, msg: `no person with id ${id} found` });
  }
  // update data
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  // send status code & json message back to front end
  res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  // find person matching id passed into parameters
  const person = people.find((person) => {
    person.id === Number(req.params.id);
  });
  // if 404 error...
  if (!person) {
    return res.status(404).json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  // create a new array that does not include a person that matches the person.id parameters
  const newPeople = people.filter((person) => person.id !== Number(req.params.id));
  // send message back to the front end
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
