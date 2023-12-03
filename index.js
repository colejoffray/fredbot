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


bot.login(process.env.TOKEN)