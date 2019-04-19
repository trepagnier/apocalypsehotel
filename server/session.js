const session = {
  user: "anonymous"
};

module.exports = {
  setUser: name => {
    session.user = name;
  },
  get: () => session
};
