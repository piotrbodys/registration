module.exports = {
  index:(req, res, next) => {
    res.json({
      events: [
        {
            name: "Piotr Bodys",
            event: { key: "front-end", val: "Front End" },
            city: { key: "warsaw", val: "Warszawa" }
        },
        {  
            name: "Ula Jeziorna",
            event: { key: "back-end", val: "Back End" },
            city: { key: "crakow", val: "Krakow" }
        },
      ]  
    })
 },

 create:(req, res, next) => {
    res.send("create")
 },

 delete:(req, res, next) => {
    res.send("delete")
 },
}