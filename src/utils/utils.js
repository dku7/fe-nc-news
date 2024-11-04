const formatDateTime = (date) => {
  const newDate = new Date(date);

  return newDate.toLocaleDateString();
};

export { formatDateTime };
