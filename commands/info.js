const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('information about the bot'),
	async execute(interaction) {
		const index = require("../index.js"); 
		const client = index.robot;
		const latencyEmbed = {
			color: 0x5b7553,
			title: '> ☕  __**Info**__',
			description: 'This embed only contains info about the bot.\nFor help, do /help',
			fields: [
				{
					name: '> __**Server count**__',
					value: `> <@984170407101878322> is in ${interaction.client.guilds.cache.size} servers.`,
					inline: true
				},
				{
					name: '> __**Library**__',
					value: `> Built with [Discord.js](https://discord.js.org/)`,
					inline: true
				},
                {
					name: '> __**Support Server**__',
					value: `> Join the [official support server!](https://dsc.birb.studio)`,
					inline: true
				},
			],
			image: {
				url: 'https://cdn.discordapp.com/attachments/974059354082922526/977936908934074408/banner.gif',
			},
			footer: {
				text: 'info | caffeine',
				icon_url: 'https://cdn.discordapp.com/avatars/984170407101878322/5f12867b36bcbe5a7ac0fe6bd46b630a.webp',
			},
		};
		await interaction.reply({embeds:[latencyEmbed], ephemeral: true});
	},
};