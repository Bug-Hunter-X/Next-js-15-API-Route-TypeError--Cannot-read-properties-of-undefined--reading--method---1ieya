```javascript
// pages/api/data.js
export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      // Process the request
      res.status(200).json({ message: 'Data received' });
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
```
The solution introduces a `try...catch` block. This handles potential errors during request processing, preventing the crash and providing a more graceful error response to the client.