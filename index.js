const express = require('express');
const app = express();

app.get('/healthcheck', (req, res) => { res.send('OK'); });

app.get('/api/v1/Users/GetUserAccess', (req, res) => {
    res.json({
        "isSuccess": true,
        "message": "Request successful.",
        "data": { "userName": "wasscan" }
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
