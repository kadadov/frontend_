const log = (msg: string) => {
  const date = new Date().toDateString();
  const log = date + ": " + msg;

  console.log(log);
};

export { log };
