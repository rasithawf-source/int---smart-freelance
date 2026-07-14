const dns = require("dns");

dns.resolveSrv("_mongodb._tcp.cluster0.pvsxvcm.mongodb.net", (err, records) => {
  console.log(err || records);
});