module.exports = {
    name: 'clear',
    description: "Usuwa wiadomości",
    async execute(message, args){
        if(!args[0]) return message.reply("Musisz podać liczbę np (!clear 10)");
        if(isNaN(args[0])) return message.reply("Musisz podać liczbę np (!clear 10");
        
        if(args[0] > 300) return message.reply("Nie możesz usunąc tylu wiadomości (max 300)");
        if(args[0] < 1) return message.reply("Musisz usunac przynajmniej jedna wiadomość");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}