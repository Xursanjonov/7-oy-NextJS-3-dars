export async function getUsers(path) {
  const res = await fetch(`https://itrnasition-task4.onrender.com${path}`);
  if (!res.ok) {
    Error("Failed to fetch data");
  }

  return res.json();
}
