export const formatDate = (date) => date.toLocaleString('en-GB', {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
});