export default async function handler(req, res) {
  const category = req.query.category || "general";

  const url =
    `https://gnews.io/api/v4/top-headlines?country=pk&category=${category}&apikey=${process.env.GNEWS_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}

