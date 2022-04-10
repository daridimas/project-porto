export default function handler(req, res) {
    res.status(200).json([
        {
            name: "Dimas Arie Prasojo",
            job: "Tech Influencer",
            greeting: "Halo bro semua! 🔥",
            photo: "",
        },
        {
            name: "John Doe",
            job: "Programmer",
            greeting: "Hello everyone",
            photo: "",
        },   
    ]);
}