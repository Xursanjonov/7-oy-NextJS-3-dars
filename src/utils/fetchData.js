export async function getData(path) {
  const res = await fetch(`https://dummyjson.com${path}`);
  if (!res.ok) {
    Error("Failed to fetch data");
  }

  return res.json();
}
