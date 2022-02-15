const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === '*w') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join(942789708902187029) 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('پێویستە تۆ لە ڤۆیسەکە بیت **'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(` دانرا تۆش ڕیکلامەکە بکە https://discord.gg/h5wNyNdQdU`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("942156039447511070").send(
` By: <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`REKLAM RUSSI`) 
});




client.login("OTQzMTAxODUwMTY3NjkzMzg0.YguKCw.gDJr8jTtJ59fsSdPap-78nFcHS4");// Token Dane 
/////coded By RUSSI
