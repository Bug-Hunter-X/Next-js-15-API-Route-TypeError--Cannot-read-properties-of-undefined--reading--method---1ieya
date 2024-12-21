```javascript
// pages/api/data.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process the request
    res.status(200).json({ message: 'Data received' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
```
This API route is working fine. However, the following error is shown on the Next.js 15 app:
`TypeError: Cannot read properties of undefined (reading 'method')`