const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	danzz: 'https://danzzapi.xyz',
}

global.APIKeys = {
	'https://danzzapi.xyz': '921a7l9pho2',
}

// Setting
global.apikey = ['921a7l9pho2'] // Get in: https://danzzapi.xyz
global.apikeyprem = ['danzzprem'] // Get in: https://danzzapi.xyz
global.apikeyvip = ['921a7l9pho2'] // Get in: https://danzzapi.xyz
global.namabot = ['ɢᴀɴsʙᴏᴛᴢ-ᴍᴅ']
global.namaowner = ['KadekGanzzxy']
global.owner = ['6283114072346', '6283114072346']
global.premium = ['6283114072346']
global.packname = '© Powered By'
global.author = 'KadekGanzz'
global.sessionName = 'sesi'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.prefix = ['']
global.symbol1 = '•'
global.symbol2 = '>'
global.wm = '© ɢᴀɴsʙᴏᴛᴢ-ᴍᴅ'
global.mess = {
    success: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor Bot',
    wait: 'Waittt...',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}

global.sgc = 'wa.me/6283114072346'

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ OTHER ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.keyai = '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' //kalau openai nya error minta apikey nya ke wa.me/6282299284898
global.limitawal = {
	free: "100",
        premium: "unlimited"
}
global.uangawal = {
       free: "5000",
          premium: "999999999",
}
global.thumb = fs.readFileSync('./media/img/1.jpg')
global.qris = fs.readFileSync('./media/img/qr.jpg')
global.pic = { url: 'https://telegra.ph/file/edb7387b1fc7a36bb60e6.jpg' }
global.pic2 = { url: 'https://telegra.ph/file/357dbb2cfe0bc7d7c45d1.jpg' }
global.wibu = [
       "https://www.thiswaifudoesnotexist.net/example-6970.jpg",
        "https://www.thiswaifudoesnotexist.net/example-6271.jpg",
        "https://www.thiswaifudoesnotexist.net/example-6514.jpg",
        "https://www.thiswaifudoesnotexist.net/example-3313.jpg",
        "https://www.thiswaifudoesnotexist.net/example-2870.jpg",
        "https://www.thiswaifudoesnotexist.net/example-5613.jpg",
        "http://www.thiswaifudoesnotexist.net/example-1576.jpg"
]

global.fsizedoc = '99999999999999'
global.fpagedoc = '999'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
