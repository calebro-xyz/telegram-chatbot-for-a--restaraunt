const Telegraf = require('telegraf');

const mysql = require('mysql');

const bot = new Telegraf('insert_botcode_here');

const con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'insert_user',
    password: 'password',
    database: 'database_name'
});


bot.onText(/\/start /, msg => {
    const chatId = msg.chat.id;
    const user_id = msg.from.id;
    const name = msg.from.name;
    const last_name = msg.from.last_name;
    const username = msg.from.user_name;
    user_data = [chatId, first_name, last_name, username];
    con.connect(function(err) {
        if (err) throw err;
        user_data = [user_id, first_name, last_name, username];
        console.log("Connect success!");
        console.log(result);
        bot.sendMessage(chatId, "Bot are working!");
        con.query("INSERT INTO users (CustomerID,name,Phone_number, password) VALUES ?", [user_data], function(err, result) {
            if (err) throw err;
            console.log("Result" + result);
        })
    })
})

//starting block
bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'welcome to eazybite,a simple way to communicate with us and place your orders. How can we help you today?To get stared please type hello.', {

    })
})



bot.hears('hello', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'welcome to eazybite, How can we help you today?', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'orders', callback_data: 'orders' },
                ],
                [
                    { text: 'feedback', callback_data: 'feedback' },
                ],
                [
                    { text: 'help', callback_data: 'help' },
                ]
            ]
        }
    })
})


// Keyboard layout for requesting phone number and location
const requestPhoneKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [
            [{
                text: "My phone number",
                request_contact: true,
                one_time_keyboard: true
            }],
            ["Cancel"]
        ]
    }
};

const requestLocationKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [
            [{
                text: "My location",
                request_location: true,
                one_time_keyboard: true
            }],
            ["Cancel"]
        ]
    }

}

// ordering block
bot.action('orders', (ctx, next) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Can we get access to your phone number?', requestPhoneKeyboard);

})

bot.on("contact", (ctx) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Can we access your location?', requestLocationKeyboard);
})

bot.hears("location", (ctx) => {
    console.log(ctx.from)
    let priceMessage = `click one option that you prefer`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "food", callback_data: 'food' },
                    { text: "drinks", callback_data: 'drinks' }
                ],

            ]
        }
    })
})

bot.action('food', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, { source: "res/food.png" })

})

bot.action('drinks', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, { source: "res/drinks.png" })

})

bot.hears('001', ctx => {
    console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be kes 350`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})

bot.hears('002', ctx => {
    console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be kes 450`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})

bot.hears('003', ctx => {
    console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be kes 500`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})

bot.hears('004', ctx => {
    console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be kes 600`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})

bot.hears('pine', ctx => {
    console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be 100`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})

bot.hears('apple', ctx => {
    console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be kes 100`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})

bot.hears('berry', ctx => {
    console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be kes 100`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})

bot.hears('orange', ctx => {
    console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be kes 350`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})
bot.hears('mango', ctx => {
    console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be kes 100`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})

bot.action('delivery', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Thank you for buying with us, our rider will be there in a moment please make sure you have the right amount with you to avoid imconvienience.Enjoy your delicacies ,hope to see you soon!', {

    })
})

bot.action('mobile', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'please reply with the transcation code here, starting with MPESA or AIRTEL MONEY. The paybill number is 098098 account number is your name', {

    })
})

bot.hears(['MPESA', 'AIRTEL MONEY'], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Thank you for buying with us.Enjoy your delicacies, hope to see you soon!', {})
})

//help block
bot.action('help', ctx => {
    console.log(ctx.from)
    let priceMessage = `please choose one option that you prefer`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "TENDER", callback_data: 'TENDER' },
                    { text: "VACANCY", callback_data: 'VACANCY' }
                ],

                [
                    { text: "Back to Menu", callback_data: 'hello' },
                ],
            ]
        }
    })
})

bot.action('VACANCY', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, { source: "res/vacancy.png" })

})

bot.action('TENDER', ctx => {
        bot.telegram.sendPhoto(ctx.chat.id, { source: "res/tender.png" })

    })
    //feedback block

bot.action('feedback', ctx => {
    console.log(ctx.from)
    let priceMessage = `click one option that you prefer`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "bot", callback_data: 'Bot' },
                    { text: "Restaraunt", callback_data: 'Restaraunt' }
                ],

                [
                    { text: "Back to Menu", callback_data: 'hello' },
                ],
            ]
        }
    })
})
bot.action('Bot', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Please reply  here to tell us ow we can improve this bot.', {

    })
})
bot.action('Restaraunt', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Please reply here to tell us how we can improve the services of our restaurant.', {

    })
})
bot.hears('MENU', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, { source: "res/food.png" })

})

bot.launch();