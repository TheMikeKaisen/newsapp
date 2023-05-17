import React, { Component } from 'react'
import NewsItem from './newsItem'
export class news extends Component {
  articles = [
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Manu Raju,Annie Grayer,Kristin Wilson,Melanie Hicken",
      "title": "Democratic congressman's staff attacked by man with baseball bat - CNN",
      "description": "Virginia Democratic Rep. Gerry Connolly said two staffers were injured Monday by a man wielding a bat who came into his district office in Fairfax.",
      "url": "https://www.cnn.com/2023/05/15/politics/gerry-connolly-staffer-attacked/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230515140234-01-gerry-connolly-file.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-05-15T23:59:00Z",
      "content": "Virginia Democratic Rep. Gerry Connolly said two staffers were injured Monday by a man wielding a bat who came into his district office in Fairfax. \r\nConnolly told CNN that the assailant who entered … [+4397 chars]"
    },
    {
      "source": { "id": null, "name": "Yahoo Entertainment" },
      "author": "Taryn Ryder",
      "title": "Jamie Foxx reportedly recovering from 'medical complication' at facility in Chicago: Here's the latest - Yahoo Entertainment",
      "description": "Days after Corinne Foxx revealed father had been out of the hospital for weeks, new details emerge about his recovery.",
      "url": "https://www.yahoo.com/entertainment/jamie-foxx-health-update-rehab-facility-233719092.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/ZXTvWQycBIdr50HH2kGKBA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-03/0af57eb0-d7a5-11ed-9cbd-efd098ba0fe6",
      "publishedAt": "2023-05-15T23:37:19Z",
      "content": "Jamie Foxx is reportedly rehabbing in Chicago after medical emergency. (Photo: Future Publishing via Getty Images)\r\nIt has been more than one month since Jamie Foxx's \"medical complication\" and detai… [+2027 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Elon Musk documents subpoenaed in Jeffrey Epstein lawsuit by U.S. Virgin Islands - Reuters",
      "description": "The U.S. Virgin Islands has subpoenaed Tesla Inc <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> CEO Elon Musk for documents in its lawsuit accusing JPMorgan Chase & Co <a href=\"https://www.reuters.com/companies/JPM.N\" target=\"…",
      "url": "https://www.reuters.com/legal/us-virgin-islands-subpoenaed-elon-musk-jeffrey-epstein-litigation-2023-05-15/",
      "urlToImage": "https://www.reuters.com/resizer/oVZPJzhVZip_GCYgC00hchjM7tQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZQLLDYLXJBIZVMUE2TH2WQB6RI.jpg",
      "publishedAt": "2023-05-15T23:37:00Z",
      "content": "WILMINGTON, Delaware, May 15 (Reuters) - The U.S. Virgin Islands has subpoenaed Tesla Inc (TSLA.O) CEO Elon Musk for documents in its lawsuit accusing JPMorgan Chase &amp; Co (JPM.N) of helping enabl… [+2968 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Brenda Goodman",
      "title": "Man who defied genetics for decades may hold a clue to preventing Alzheimer’s, scientists say - CNN",
      "description": "Researchers working to unlock the secrets of Alzheimer’s disease say they’ve been given a major clue that could help protect people at risk for this type of dementia.",
      "url": "https://www.cnn.com/2023/05/15/health/alzheimers-gene-reelin-protected/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/191030162356-encuentro-cerebro.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-05-15T23:28:00Z",
      "content": "Researchers working to unlock the secrets of Alzheimers disease say theyve been given a major clue that could help protect people at risk for this type of dementia.\r\nA man who seemed fated to develop… [+4396 chars]"
    },
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "Devlin Barrett, Perry Stein",
      "title": "Durham report released: Trump-Russia FBI probe sharply criticized - The Washington Post",
      "description": "Report caps four-year probe launched by the Trump administration that examined how the FBI investigated allegations of Russian interference in the 2016 election.",
      "url": "https://www.washingtonpost.com/national-security/2023/05/15/durham-special-counsel-trump-report/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MBG2OCGVNMI6ZPQXFBQWJF2MKQ.jpg&w=1440",
      "publishedAt": "2023-05-15T22:27:35Z",
      "content": "Comment on this story\r\nComment\r\nSpecial counsel John Durham has issued a long-awaited report that sharply criticizes the FBI for investigating the 2016 Trump campaign based on raw, unanalyzed, and un… [+8382 chars]"
    },
    {
      "source": { "id": null, "name": "CBS Sports" },
      "author": "",
      "title": "2023 NBA Draft Lottery odds: Pistons, Spurs, Rockets have best chance at No. 1 pick and Victor Wembanyama - CBS Sports",
      "description": "See the full list of draft lottery odds ahead of Tuesday's selection process",
      "url": "https://www.cbssports.com/nba/news/2023-nba-draft-lottery-odds-pistons-spurs-rockets-have-best-chance-at-no-1-pick-and-victor-wembanyama/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/05/15/c1ced810-a5bd-4960-8c34-a354f45bc6d8/thumbnail/1200x675/6b41313c91b84a5c9168aebe25b7fd25/lottery-getty-1.png",
      "publishedAt": "2023-05-15T21:51:00Z",
      "content": "The 2023 NBA Draft Lottery is set for Tuesday night, and fans are close to finding out who will win the right to draft French sensation Victor Wembanyama with the No. 1 overall pick in June. The Pist… [+5636 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "DeSantis defunds diversity programs at Florida public colleges - Reuters",
      "description": "Florida Governor Ron DeSantis signed a bill on Monday banning tax dollars from being used in state colleges for diversity, equity and inclusion programs (DEI) in a sweeping measure that also places restrictions on classroom discussion of race.",
      "url": "https://www.reuters.com/world/us/desantis-defunds-diversity-programs-florida-public-colleges-2023-05-15/",
      "urlToImage": "https://www.reuters.com/resizer/uScKbez48dfh-jCaBVZiXW4eraE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6EW6FGDSK5K3RNNFGGYPSL565E.jpg",
      "publishedAt": "2023-05-15T21:47:00Z",
      "content": "May 15 (Reuters) - Florida Governor Ron DeSantis signed a bill on Monday banning tax dollars from being used in state colleges for diversity, equity and inclusion programs (DEI) in a sweeping measure… [+2011 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Rudy Giuliani sued for $10 million by former aide over alleged sexual assault - Reuters",
      "description": "A former associate of Rudy Giuliani is suing him for sexual assault and other wrongdoing, accusing Donald Trump's former personal lawyer of hiring her to fulfill his desire for a sexual relationship.",
      "url": "https://www.reuters.com/legal/rudy-giuliani-sued-10-million-by-former-aide-over-alleged-sexual-assault-2023-05-15/",
      "urlToImage": "https://www.reuters.com/resizer/luJ3MAZSyZCJP85Q-gQMUKCFXLY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ELD63JORTRJKVOGPSYB6M2BGXM.jpg",
      "publishedAt": "2023-05-15T21:45:00Z",
      "content": "NEW YORK, May 15 (Reuters) - A former associate of Rudy Giuliani is suing him for sexual assault and other wrongdoing, accusing Donald Trump's former personal lawyer of hiring her to fulfill his desi… [+2068 chars]"
    },
    {
      "source": { "id": null, "name": "Slate Magazine" },
      "author": "Sam Adams",
      "title": "Succession Season 4 Episode 8: How plausible is this election nightmare? - Slate",
      "description": "Brian Stelter, the former CNN anchor and the author of two books about Fox News, breaks it down.",
      "url": "https://slate.com/culture/2023/05/succession-season-4-episode-8-election-fox-news.html",
      "urlToImage": "https://compote.slate.com/images/3cb7e40d-eda7-49ba-b5d4-7e59c1d2cd3a.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1560",
      "publishedAt": "2023-05-15T21:29:00Z",
      "content": "Successions election-night episode brought millions of viewers closer to the election of 2016 than anyone wants to go. The series has treated the Fox News stand-in ATN mostly as an off-screen abstrac… [+9792 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Jen Christensen",
      "title": "Face masks are still a good idea at the doctor’s office, study says - CNN",
      "description": "Signs urging everyone to mask up have largely disappeared from places like grocery stores and schools in the third year of the Covid-19 pandemic. But they remain in many medical offices, and a study published Monday says they might still be a good idea.",
      "url": "https://www.cnn.com/2023/05/15/health/masks-medical-office/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230515145547-masks-medical-office-stock.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-05-15T21:01:00Z",
      "content": "Signs urging everyone to mask up have largely disappeared from places like grocery stores and schools in the third year of the Covid-19 pandemic. But they remain in many medical offices, and a study … [+4392 chars]"
    },
    {
      "source": { "id": "engadget", "name": "Engadget" },
      "author": null,
      "title": "James Webb telescope finds water around a comet in the main asteroid belt - Engadget",
      "description": "The James Webb telescope has spotted the first known instance of a comet with water vapor in the main asteroid belt..",
      "url": "https://www.engadget.com/james-webb-telescope-finds-water-around-a-comet-in-the-main-asteroid-belt-203825983.html",
      "urlToImage": "https://s.yimg.com/uu/api/res/1.2/kqlyLWADegocuSpnobw52A--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/f696f2c0-f359-11ed-9fbd-6df479fafe95.cf.jpg",
      "publishedAt": "2023-05-15T20:39:40Z",
      "content": "The James Webb Space Telescope just made its second breakthrough observation in as many weeks. Researchers have used the observatory's near-infrared camera to detect the first known instance of water… [+1332 chars]"
    },
    {
      "source": { "id": null, "name": "Jalopnik" },
      "author": "Erin Marquis",
      "title": "Company Wants to Launch Mission to Resurrect Space Telescope 185 Million Miles From Earth - Jalopnik",
      "description": "The ambitious plan is the first attempt of a private company to revive expired astronomical tools so far way.",
      "url": "https://jalopnik.com/company-wants-resurrect-space-telescope-185m-miles-eart-1850437571",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d9f7b09a84298f45db2c1172024e4e7b.jpg",
      "publishedAt": "2023-05-15T20:30:00Z",
      "content": "When something drifts off into space, its usually done and dusted. A private company, however, is saying not so fast to manmade objects in space. It has plans to revive the legendary space telescope … [+2983 chars]"
    },
    {
      "source": { "id": null, "name": "CNBC" },
      "author": "Christina Wilkie",
      "title": "Treasury Secretary Yellen reaffirms U.S. could run out of money to pay bills by early June - CNBC",
      "description": "Citing additional data, Treasury Secretary Janet Yellen reaffirmed to Congress that the U.S. could default on its debt as early as June 1.",
      "url": "https://www.cnbc.com/2023/05/15/debt-ceiling-yellen-says-us-could-run-out-of-money-by-june.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107225383-16814754372023-04-13t194027z_1499693982_rc2vd0a7h9hz_rtrmadp_0_imf-worldbank.jpeg?v=1684182167&w=1920&h=1080",
      "publishedAt": "2023-05-15T20:22:47Z",
      "content": "WASHINGTON Treasury Secretary Janet Yellen reaffirmed to Congress on Monday that the United States could default on its debt as early as June 1.\r\n\"With additional information now available, I am writ… [+2564 chars]"
    },
    {
      "source": { "id": null, "name": "CNBC" },
      "author": "Contessa Brewer",
      "title": "A pair of sports betting deals has the gaming industry asking, 'Who's next?' - CNBC",
      "description": "Fanatics' splashy $150 million acquisition of PointsBet's U.S. business wasn't the only deal in gambling in recent days. It could be a sign of more to come.",
      "url": "https://www.cnbc.com/2023/05/15/fanatics-pointsbet-aristocrat-neogames-sports-betting-deals.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107241300-1684177279308-gettyimages-1245759682-Michael_Rubin.jpeg?v=1684181229&w=1920&h=1080",
      "publishedAt": "2023-05-15T20:07:09Z",
      "content": "Fanatics' splashy $150 million acquisition of PointsBet's U.S. business wasn't the only deal in gambling in recent days and it could be a sign of more to come.\r\nFanatics on Sunday announced it has ag… [+2844 chars]"
    },
    {
      "source": { "id": "the-verge", "name": "The Verge" },
      "author": "Jay Peters",
      "title": "Amazon is building an AI-powered “conversational experience” for search - The Verge",
      "description": "Amazon job listings describe how the company is working on “reimagining Amazon Search” with a new “interactive conversational experience,” as reported by Bloomberg. Amazon would join other Big Tech companies in releasing an AI-powered chatbot.",
      "url": "https://www.theverge.com/2023/5/15/23724357/amazon-ai-powered-conversational-experience-search",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/gGXG4F_gdAUOH7ys60vQz873lYs=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23935559/acastro_STK103__02.jpg",
      "publishedAt": "2023-05-15T19:34:19Z",
      "content": "Amazon is building an AI-powered conversational experience for search\r\nAmazon is building an AI-powered conversational experience for search\r\n / Job listings indicate that Amazon is the next company … [+2397 chars]"
    },
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "Adam Taylor, Serhiy Morgunov",
      "title": "Strikes in Russian-held Luhansk showcase Ukraine's longer-range missiles - The Washington Post",
      "description": "As President Volodymyr Zelensky visited Britain on Monday, Ukraine showed its ability to use long-range British-made missiles to hit targets deep inside Russian occupied territory.",
      "url": "https://www.washingtonpost.com/world/2023/05/15/storm-shadow-ukraine-missiles-russia/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/E2FS7BNA4TH4CA7XFNJQDPBLN4.JPG&w=1440",
      "publishedAt": "2023-05-15T19:24:43Z",
      "content": "Comment on this story\r\nComment\r\nKYIV, Ukraine An explosion rocked the occupied eastern Ukrainian city of Luhansk early on Monday morning, the latest in a barrage of strikes in recent days that show K… [+9668 chars]"
    },
    {
      "source": { "id": "usa-today", "name": "USA Today" },
      "author": ", USA TODAY",
      "title": "Herders spear, kill 11 Kenyan including Loonkiito, one of the oldest - USA TODAY",
      "description": "Herders in Kenya have killed 11 lions this past week, including the country's oldest wild lion as officials express concern.",
      "url": "https://www.usatoday.com/story/news/world/2023/05/15/kenya-lions-killed-herders-loonkiito-oldest/70219844007/",
      "urlToImage": "https://www.gannett-cdn.com/presto/2023/05/15/USAT/e9dc51a8-8e3d-4a1c-8f6d-ebf1b3dd46eb-AP_Kenya_Lions_Killed.jpg?auto=webp&crop=2101,1182,x0,y0&format=pjpg&width=1200",
      "publishedAt": "2023-05-15T19:10:34Z",
      "content": "Kenyan herders have killed 11 lions this past week, including the country's oldest wild lion as officials express concern. \r\nOfficials and local residents in Kajiado County met on Sunday to address t… [+2060 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Mail" },
      "author": "Thea Jourdan",
      "title": "Why experts believe deep sleep could stave off dementia - Daily Mail",
      "description": "Something as simple as getting a good night's sleep may help older people stave off memory loss caused by Alzheimer's disease - which is the most common type of dementia.",
      "url": "https://www.dailymail.co.uk/health/article-12086205/Why-experts-believe-deep-sleep-stave-dementia.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/05/15/18/71013021-0-image-a-14_1684171055562.jpg",
      "publishedAt": "2023-05-15T19:02:23Z",
      "content": "Several new drugs to treat dementia have made the headlines recently, but with concerns about the cost let alone when they might become available on the NHS and worrying potential side-effects (such … [+9986 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Dan Merica: Unclear 'whether there's going to be any blowback' from debt ceiling standoff on 2024 - MSNBC",
      "description": "NBC News Senior White House Correspondent Kelly O’Donnell, New York Times Chief White House House Correspondent Peter Baker, and Dan Merica, National Politic...",
      "url": "https://www.youtube.com/watch?v=aME4db3mr-w",
      "urlToImage": "https://i.ytimg.com/vi/aME4db3mr-w/maxresdefault.jpg",
      "publishedAt": "2023-05-15T19:00:00Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "New York Post" },
      "author": "Jeremy Layton",
      "title": "Chandler Parsons thinks Ja Morant should be suspended for 'all of next season' after latest gun video - New York Post ",
      "description": "At least one former Grizzlies player does not want to see the NBA go light on Ja Morant.",
      "url": "https://nypost.com/2023/05/15/chandler-parsons-suspend-ja-morant-for-entire-nba-season/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/05/morant-parsons.jpg?quality=75&strip=all&1684162485&w=1024",
      "publishedAt": "2023-05-15T18:41:00Z",
      "content": "At least one former Grizzlies player does not want to see the NBA go light on Ja Morant. \r\nChandler Parsons, who played for Memphis from 2016-19, had a harsh suggestion after Morant was seen apparent… [+1836 chars]"
    }
  ]
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
          <div className="col-md-3 my-3">
            <NewsItem title="myTitle" description="mydesc" imageUrl="https://media.cnn.com/api/v1/images/stellar/prod/230515140234-01-gerry-connolly-file.jpg?c=16x9&q=w_800,c_fill"/>
          </div>
          <div className="col-md-3 my-3">
            <NewsItem title="myTitle" description="mydesc"/>
          </div>
          <div className="col-md-3 my-3">
            <NewsItem title="myTitle" description="mydesc"/>
          </div>

        </div>
      
      </div>
    )
  }
}

export default news
