const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('help for commands and features'),
	async execute(interaction) {
		const index = require("../index.js"); 
		const client = index.robot;
		const latencyEmbed = {
			color: 0x5b7553,
			title: '> 🍵  __**Help**__',
			fields: [
				{
					name: '> __**coming soon**__',
					value: `> ...`,
					inline: true
				},
			],
			image: {
				url: 'https://cdn.discordapp.com/attachments/974059354082922526/977936908934074408/banner.gif',
			},
			footer: {
				text: 'help | caffeine',
				icon_url: 'https://cdn.discordapp.com/avatars/984170407101878322/5f12867b36bcbe5a7ac0fe6bd46b630a.webp',
			},
		};
		await interaction.reply({embeds:[latencyEmbed], ephemeral: true});
	},
};