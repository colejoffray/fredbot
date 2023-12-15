require('dotenv').config()
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js') ;

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'weather',
    description: 'Will tell you the weather for the area you provide.',
    options: [
      {
        name: 'city',
        description: 'The city',
        type: ApplicationCommandOptionType.String
      }
    ] 
  },
  {
    name: 'qr',
    description: 'This command will create a qr code for the your desired url',
    options: [
      {
        name: 'url',
        description: 'The url',
        type: ApplicationCommandOptionType.String
      }
    ] 
  },
  
];



const rest = new REST().setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registering slash commands...");
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );
    console.log("Slash commands registered.");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
})();