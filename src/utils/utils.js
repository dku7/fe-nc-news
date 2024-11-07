const formatDateTime = (date) => {
  let dateStr = "";

  if (date) {
    const newDate = new Date(date);
    dateStr = newDate.toLocaleDateString();
  }

  return dateStr;
};

export { formatDateTime };
