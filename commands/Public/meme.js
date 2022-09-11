module.exports = {
    name: 'memes',
    execute(client, message, args) {

        memes = [
            `https://pm1.narvii.com/7630/ca050d19dc9832424a888f017e6f1c28762d8f17r1-863-540v2_hq.jpg`,
            `https://i.pinimg.com/originals/9a/b7/b7/9ab7b7e225f2cc5ee190e8a67c126c66.jpg`,
            `https://pbs.twimg.com/media/Ecq6FxYWkAIQ8pE.jpg`,
            `https://i.ytimg.com/vi/sm6z50Qoxqg/maxresdefault.jpg`,
            `https://64.media.tumblr.com/tumblr_m7mw1u9vb81rr8kmyo1_1280.jpg`,
            `https://i.ytimg.com/vi/7lTvO9wxqPw/hqdefault.jpg`,
            `https://pm1.narvii.com/7723/6ed7ca7c14b84d2f36a9383ba01751a600e537f8r1-799-624v2_uhq.jpg`,
            `https://i.pinimg.com/564x/04/80/c8/0480c863e93e5f83f3eb087c0579961a.jpg`,
            `https://i.ytimg.com/vi/rlOT3GCBVjE/hqdefault.jpg`,
            `https://i.ytimg.com/vi/C7-hq9Ffcj8/maxresdefault.jpg`,
            `https://pbs.twimg.com/media/ESnM7BbXQAAb0w2.jpg`,
            `https://i.ytimg.com/vi/0Hp2a-lrm_o/hqdefault.jpg`,
            `https://i.ytimg.com/vi/SRrIcSkwYGQ/mqdefault.jpg`,
            `https://stepcdn.com/assets/2019-04/18/11/43vc5/55944951_2568294106575830_8991684621687062528_n-700x.jpg`,
            `https://i.pinimg.com/originals/cb/bf/da/cbbfdaf0da7743a491e832cb86e95ea3.jpg`,
            `https://i.pinimg.com/736x/09/01/e3/0901e327b98ca708b81e64917a02d2a0.jpg`,
            `https://i.pinimg.com/originals/df/91/4e/df914ee1f44c13ad4e7a1a472bf582c3.jpg`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8p_FAfFjnwjtMTPBLPINsIurByWcBYziQIQ&usqp=CAU`,
            `https://64.media.tumblr.com/48616c5f37aa9b702b0838a8cfff058f/9663137ce20047ec-52/s1280x1920/77f01452f0473b4edf142cfd8649a8bb2b8a2f40.png`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPFTRZcVlYXkAQYa0dEYuUHgYoFHbCAE7Zw&usqp=CAU`,
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BkWoPcUKvxRJY1mQk87ST2d-zPxc89Epiw&usqp=CAU`,
        ];

        const meme = memes[Math.floor(Math.random() * memes.length)];
        message.reply({ content: `${meme}` });

    }
}