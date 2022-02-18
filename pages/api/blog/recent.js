export default function handler(req, res) {
  res.status(200).json({ name: 'Recent blog API route' })
}

// http://localhost:3000/api/blog/recent
