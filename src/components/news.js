import React, { Component } from 'react'
import NewsItem from './newsItem'
export class news extends Component {
  articles= [
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Lawrence Bonk",
      "title": "Venmo now lets you send crypto to other users for some reason",
      "description": "Paypal-owned money transfer service Venmo dipped its toes into cryptocurrencies in 2021 after opening up an in-app trading platform.\r\n That was just for individuals to buy or sell crypto. Now, the company is going further into the once-heralded digital curren…",
      "url": "https://www.engadget.com/venmo-now-lets-you-send-crypto-to-other-users-for-some-reason-192015694.html",
      "urlToImage": "https://s.yimg.com/uu/api/res/1.2/LKRH31mzL9wqtcqoQ_lkjw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/835a5670-e5f4-11ed-9db6-3febf57b7a4a.cf.jpg",
      "publishedAt": "2023-04-28T19:20:15Z",
      "content": "Paypal-owned money transfer service Venmo dipped its toes into cryptocurrencies in 2021 after opening up an in-app trading platform.\r\n That was just for individuals to buy or sell crypto. Now, the co… [+1625 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Kyle Barr",
      "title": "Bitcoin Pyramid Scheme Fraudster Ordered to Pay $3.4 Billion",
      "description": "The Commodities Futures Trading Commission patted itself on the back for winning one of the largest civil cases against a crypto crook, even if most—or any—of those affected will see any of their money returned. On Thursday, a Texas judge issued a default jud…",
      "url": "https://gizmodo.com/bitcoin-mlm-joe-steyn-mirror-trading-international-1850385963",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/16e5700ae24064ff50deef40ec83875d.jpg",
      "publishedAt": "2023-04-28T14:35:25Z",
      "content": "The Commodities Futures Trading Commission patted itself on the back for winning one of the largest civil cases against a crypto crook, even if mostor anyof those affected will see any of their money… [+3594 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Mariella Moon",
      "title": "White House proposes 30 percent tax on electricity used for crypto mining",
      "description": "The Biden administration wants to impose a 30 percent tax on the electricity used by cryptocurrency mining operations, and it has included the proposal in its budget for the fiscal year of 2024. In a blog post on the White House website, the administration ha…",
      "url": "https://www.engadget.com/white-house-proposes-30-percent-tax-on-electricity-used-for-crypto-mining-090342986.html",
      "urlToImage": "https://s.yimg.com/uu/api/res/1.2/_0lUWxV0epaYKnRPQ1.Jxw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/5d8f2740-e97d-11ed-b4b3-dfb213c6d348.cf.jpg",
      "publishedAt": "2023-05-03T09:03:42Z",
      "content": "The Biden administration wants to impose a 30 percent tax on the electricity used by cryptocurrency mining operations, and it has included the proposal in its budget for the fiscal year of 2024. In a… [+3408 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Nikki Main",
      "title": "Hacker Pleads Guilty to Hijacking Barack, Elon, and Kim K's Twitter Accounts",
      "description": "A man accused of hacking Twitter accounts in a Bitcoin scheme pleaded guilty on Tuesday for his role in cyber stalking and computer hacking that exploited numerous high-profile social media accounts. Joseph James O’Connor, 23, was extradited to the U.S. from …",
      "url": "https://gizmodo.com/hacker-twitter-joseph-james-o-connor-bitcoin-crypto-1850423510",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a51f52cfe2f928955dd8893a8efe3bbb.jpg",
      "publishedAt": "2023-05-10T15:51:00Z",
      "content": "A man accused of hacking Twitter accounts in a Bitcoin scheme pleaded guilty on Tuesday for his role in cyber stalking and computer hacking that exploited numerous high-profile social media accounts.… [+3186 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "Intel ends its bitcoin mining chip series - Reuters",
      "description": "Intel ends its bitcoin mining chip series  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiWGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvaW50ZWwtZW5kcy1pdHMtYml0Y29pbi1taW5pbmctY2hpcC1zZXJpZXMtMjAyMy0wNC0xOC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-04-18T18:07:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "Hamas armed wing announces suspension of bitcoin fundraising - Reuters",
      "description": "Hamas armed wing announces suspension of bitcoin fundraising  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL21pZGRsZS1lYXN0L2hhbWFzLWFybWVkLXdpbmctYW5ub3VuY2VzLXN1c3BlbnNpb24tYml0Y29pbi1mdW5kcmFpc2luZy0yMDIzLTA0LTI4L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-04-28T12:36:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "Bitcoin could hit $100000 by end-2024, Standard Chartered says - Reuters",
      "description": "Bitcoin could hit $100000 by end-2024, Standard Chartered says  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvdXMvYml0Y29pbi1jb3VsZC1oaXQtMTAwMDAwLWJ5LWVuZC0yMDI0LXN0YW5kYXJkLWNoYXJ0ZXJlZC1zYXlzLTIwMjMtMDQtMjQv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-04-24T13:25:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "Bitcoin could hit $100000 by end-2024, Standard Chartered says - Reuters",
      "description": "Bitcoin could hit $100000 by end-2024, Standard Chartered says  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvYml0Y29pbi1jb3VsZC1oaXQtMTAwMDAwLWJ5LWVuZC0yMDI0LXN0YW5kYXJkLWNoYXJ0ZXJlZC1zYXlzLTIwMjMtMDQtMjQv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-04-24T09:18:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "US court orders South African firm's CEO to pay $3.4 bln for bitcoin ... - Reuters",
      "description": "US court orders South African firm's CEO to pay $3.4 bln for bitcoin ...  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiamh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2xlZ2FsL3VzLWNvdXJ0LW9yZGVycy1zb3V0aC1hZnJpY2FuLWZpcm1zLWNlby1wYXktMzQtYmxuLWJpdGNvaW4tZnJhdWQtMjAyMy0wNC0yNy_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-04-27T21:43:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "Crypto stocks fall after Binance halts bitcoin withdrawals for hours - Reuters",
      "description": "Crypto stocks fall after Binance halts bitcoin withdrawals for hours  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3J5cHRvLXN0b2Nrcy1mYWxsLWFmdGVyLWJpbmFuY2UtaGFsdHMtYml0Y29pbi13aXRoZHJhd2Fscy1ob3Vycy0yMDIzLTA1LTA4L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-05-08T10:36:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "Cboe files with U.S. SEC for third time to list ARK 21Shares Bitcoin ... - Reuters",
      "description": "Cboe files with U.S. SEC for third time to list ARK 21Shares Bitcoin ...  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvdXMvY2JvZS1maWxlcy13aXRoLXVzLXNlYy10aGlyZC10aW1lLWxpc3QtYXJrLTIxc2hhcmVzLWJpdGNvaW4tZXRmLTIwMjMtMDUtMDkv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-05-09T19:36:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "Liechtenstein to allow payment for certain state services in Bitcoin ... - Reuters",
      "description": "Liechtenstein to allow payment for certain state services in Bitcoin ...  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMidmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvbGllY2h0ZW5zdGVpbi1hbGxvdy1wYXltZW50LWNlcnRhaW4tc3RhdGUtc2VydmljZXMtYml0Y29pbi1oYW5kZWxzYmxhdHQtMjAyMy0wNS0wOC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-05-08T11:43:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Kyle Barr",
      "title": "Failed Terra Founder Do Kwon, Who Avoided Police for Months, Gets Bail",
      "description": "Former Terraform Labs CEO Do Kwon, alongside his compatriot and former chief financial officer Han Chong-joon have been on the run from international police for months. They were arrested in Montenegro for allegedly holding two fake passports. None of that wa…",
      "url": "https://gizmodo.com/terra-luna-do-kwon-crypto-bitcoin-stablecoin-1850431578",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/462c69a5bb4faf493bbdeed0af3fdb8d.jpg",
      "publishedAt": "2023-05-12T13:33:59Z",
      "content": "Former Terraform Labs CEO Do Kwon, alongside his compatriot and former chief financial officer Han Chong-joon have been on the run from international police for months. They were arrested in Monteneg… [+2345 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Emma Roth",
      "title": "‘PlugwalkJoe’ pleads guilty for the massive 2020 Twitter hack and other crimes",
      "description": "PlugwalkJoe, aka Joseph James O’Connor, a UK citizen connected to the 2020 Twitter hack affecting many high-profile accounts, has pled guilty to cyberstalking and other crimes.",
      "url": "https://www.theverge.com/2023/5/9/23717558/plugwalkjoe-pleads-guilty-twitter-hack-other-crimes-tiktok",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/drbaTsgNPxqzrT5M0V6vKOE49Ug=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/23926010/acastro_STK050_01.jpg",
      "publishedAt": "2023-05-09T21:57:19Z",
      "content": "PlugwalkJoe pleads guilty for the massive 2020 Twitter hack and other crimes\r\nPlugwalkJoe pleads guilty for the massive 2020 Twitter hack and other crimes\r\n / The hack compromised numerous high-profi… [+1865 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Erum Salam",
      "title": "Bitcoin is terrible for the environment – can it ever go green?",
      "description": "Cryptocurrency mining uses huge amounts of energy, but activists are urging for a change in its code to reduce its environmental impactOn the corner of New York’s Park Avenue and 52nd Street, curious onlookers recently stopped in front of a giant green skull …",
      "url": "https://www.theguardian.com/technology/2023/apr/26/bitcoin-mining-climate-crisis-environmental-impact",
      "urlToImage": "https://i.guim.co.uk/img/media/ce173dd8b34322b541bbcb6f3a4c9adee553fc86/0_116_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d02e45765850d5551b54c41c58ce9a34",
      "publishedAt": "2023-04-26T09:00:03Z",
      "content": "On the corner of New Yorks Park Avenue and 52nd Street, curious onlookers recently stopped in front of a giant green skull sitting in the bed of a truck parked outside the office of Fidelity Investme… [+7288 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Slashdot.org"
      },
      "author": "msmash",
      "title": "Intel Discontinues Bitcoin-Mining Blockscale Chips",
      "description": "It's been just a year since Intel officially announced its Bitcoin-mining Blockscale ASICs, but today the company announced the end of life of its first-gen Blockscale 1000-series chips without announcing any follow-up generations of the chips. From a report:…",
      "url": "https://slashdot.org/story/23/04/18/1652237/intel-discontinues-bitcoin-mining-blockscale-chips",
      "urlToImage": "https://a.fsdn.com/sd/topics/intel_64.png",
      "publishedAt": "2023-04-18T22:00:00Z",
      "content": "We spoke with Intel on the matter, and the company told Tom's Hardware that \"as we prioritize our investments in IDM 2.0, we have end-of-lifed the Intel Blockscale 1000 Series ASIC while we continue … [+795 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Matthew Fox",
      "title": "Here's the outlook for bitcoin as the cryptocurrency struggles to reclaim the all-important $30,000 technical level",
      "description": "If bitcoin can decisively clear that level, Stockton expects the cryptocurrency to trend toward its key resistance level at $35,900.",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-technical-resistance-important-30000-level-upside-downside-2023-4",
      "urlToImage": "https://i.insider.com/644a81e2edc7ea00183306ec?width=1200&format=jpeg",
      "publishedAt": "2023-04-27T14:52:45Z",
      "content": "El Salvador made bitcoin official currency. Now a new crop of bitcoin experiments wants to do the same around the world.MARVIN RECINOS / Contributor / Getty Images\r\n<ul><li>The price of bitcoin is te… [+2393 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Phil Rosen",
      "title": "Bitcoin could more than double and hit a new record high next year as the token sees a big shakeup, blockchain exec says",
      "description": "\"When bitcoin's halving kicks in a year from now, we'll likely be well on our way past the previous all-time high.\"",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-bank-crisis-recession-halving-fed-rate-cut-2023-5",
      "urlToImage": "https://i.insider.com/64545b09dcb78700180cfa77?width=1200&format=jpeg",
      "publishedAt": "2023-05-06T10:30:08Z",
      "content": "Bitcoin.Photo by Getty Images\r\n<ul>\n<li>Bitcoin could hit a new record high next year, said Bob Ras, cofounder of blockchain firm Sologenic.</li>\n<li>He cited bitcoin halving, which will reduce minin… [+3236 chars]"
    }]
  constructor(){
    super();
    console.log("constructor from the news component.")
    this.state ={
      article: this.articles,
      loading: false
    }
}
  render() {
    return (
      <div className="container my-4">
        <h2>NewsMonkey - Top Headlines.</h2>
        
        <div className="row my-3">
        {this.state.article.map((element)=>{
          return <div className="col-md-3 my-3" key={element.url}>
          <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
          
          

        </div>
      
      </div>
    )
  }
}

export default news
