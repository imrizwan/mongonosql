import app from "./app";
const PORT = process.env.PORT || 8080;


//this is for running the server
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});