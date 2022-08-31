# ytdl-core-ProgressBar
Firstly install node module package :- ( npm i ytdl-core ) and (npm i progressbar)
For Downloading video in high quality:- Update ytdl-core to the latest version ( npm install ytdl-core@latest )

# Limitations
ytdl cannot download videos that fall into the following:
1. Regionally restricted (requires a proxy)
2. Private (if you have access, requires cookies)
3. Rentals (if you have access, requires cookies)
4. YouTube Premium content (if you have access, requires cookies)
5. Only HLS Livestreams are currently supported. Other formats will get filtered out in ytdl.chooseFormats

# Ratelimits
When doing to many requests YouTube might block. This will result in your requests getting denied with HTTP-StatusCode 429. The following Steps might help you:
1. Update ytdl-core to the latest version
2. Use proxies (you can find an example here)
3. Extend on the Proxy Idea by rotating (IPv6-)Addresses
4. read this for more information about this
5. Use cookies (you can find an example here)
6. for this to take effect you have to FIRST wait for the current ratelimit to expire
7. Wait it out (it usually goes away within a few days)


