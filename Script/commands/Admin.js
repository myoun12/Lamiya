const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
 name: "admin",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "MYOUN SORKAR",
 description: "Owner",
 commandCategory: "info",
 usages: "admin",
 cooldowns: 2
};

module.exports.run = async function({ api, event }) {
 const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

 const callback = () => api.sendMessage({
 body: `
┌───────────────⭓
│ 𝗢𝗪𝗡𝗘𝗥 𝗗𝗘𝗧𝗔𝗜𝗟𝗦
├───────────────
│👤 𝐍𝐚𝐦𝐞 : MYOUN SORKAR
│🚹 𝐆𝐞𝐧𝐝𝐞𝐫 : Male
│❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧 : Single
│🎂 𝐀𝐠𝐞 : 18+
│🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧 : Islam
│🎓 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : Civil Engineering
│🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : Tangail 
└───────────────⭓

┌───────────────⭓
│ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
├───────────────
│📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
│(আপনার ফেসবুক লিংক দিন)
│💬 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽:
│(আপনার হোয়াটসঅ্যাপ নম্বর দিন)
└───────────────⭓

┌───────────────⭓
│ 🕒 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗧𝗶𝗺𝗲
├───────────────
│ ${time}
└───────────────⭓
 `,
 attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
 }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/owner.jpg"));

 return request("https://i.imgur.com/g3hlQ0Z.jpeg") //এখানে আপনার পছন্দের ছবির Imgur link বসাতে পারেন
 .pipe(fs.createWriteStream(__dirname + '/cache/owner.jpg'))
 .on('close', () => callback());
};
