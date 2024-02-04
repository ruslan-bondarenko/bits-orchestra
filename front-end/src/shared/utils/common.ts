export const formatDate = (timestamp: string): string => {
  const date = new Date(parseInt(timestamp));
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return formattedDate;
};