require('dotenv').config()

const { Client, IntentsBitField, Guild, SlashCommandBuilder} = require('discord.js');

const bot = new Client({
    intents : [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})


bot.on('ready', c => {
    console.log(`🤖 ${c.user.username} is ready`)
})

bot.on('messageCreate', message => {
    if(message.author.bot){
        return;
    }else {
        if(message.content === "hello"){
            console.log(message)
            message.reply("hello")
        }
    }

   
})

bot.on('interactionCreate', async interaction => {
    if(!interaction.isChatInputCommand()){
        return
    }
    if(interaction.commandName === 'ping'){
       await interaction.reply('Pong!')
    }
})

bot.on('interactionCreate', async interaction => {
    if(!interaction.isChatInputCommand()){
        return;
    }
    if(interaction.commandName === 'qr'){
    let url = interaction.options.get('url').name
    // fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`)
    // .then(response => console.log(response))
    // .catch(err => console.log(err))
    // console.log(url);
    console.log(url);
    // interaction.reply(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`)
    }
    
    
})


bot.login(process.env.TOKEN)