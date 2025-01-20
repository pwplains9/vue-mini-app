import {Telegraf, Markup} from 'telegraf';

const token = '7593399489:AAGmlAEeUDU5UDMkXUTS8ajq7hhtIEXbMas';

const webAppUrl = 'https://mini-app-1bdcd.web.app/';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
	ctx.reply(`${webAppUrl}?ref=${ctx.payload}`, Markup.inlineKeyboard([
		Markup.button.webApp(
			'Open mini app',
			`${webAppUrl}?ref=${ctx.payload}`
		),
	]));
});

bot.launch();
