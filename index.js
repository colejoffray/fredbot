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
        try {
            const url = interaction.options.getString('url');
            const apiResponse = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`);
      
            if (!apiResponse.ok) {
              throw new Error(`Failed to generate QR code: ${apiResponse.statusText}`);
            }
      
            const buffer = await apiResponse.buffer();
            const attachment = new MessageAttachment(buffer, 'qr-code.png');
            interaction.reply({ files: [attachment] });
          } catch (error) {
            console.error('Error:', error.message);
            interaction.reply('Failed to generate QR code.');
          }
        }
      });
      


bot.login(process.env.TOKEN)