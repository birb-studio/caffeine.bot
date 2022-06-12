const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('status')
		.setDescription('used to check core bot stats'),
	async execute(interaction) {
		const latencyEmbed = {
			color: 0x5b7553,
			title: '> 🏓  __**Pong!**__',
			fields: [
				{
					name: '> __**Bot Latency**__',
					value: `> ${Math.abs(Date.now() - interaction.createdTimestamp)}ms`,
					inline: true
				},
				{
					name: '> __**API Latency**__',
					value: `> ${Math.round(interaction.client.ws.ping)}ms`,
					inline: true
				},
			],
			image: {
				url: 'https://cdn.discordapp.com/attachments/974059354082922526/977936908934074408/banner.gif',
			},
			footer: {
				text: 'latency | caffeine',
				icon_url: 'https://cdn.discordapp.com/avatars/984170407101878322/5f12867b36bcbe5a7ac0fe6bd46b630a.webp',
			},
		};
		await interaction.reply({embeds:[latencyEmbed], ephemeral: true});
	},
};