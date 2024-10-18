const data = [
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Joel Khalili",
      title: "Unmasking Bitcoin Creator Satoshi Nakamoto—Again",
      description:
        "A new HBO documentary takes a swing at uncovering the real identity of Satoshi Nakamoto, inventor of Bitcoin. But without incontrovertible proof, the myth lives on.",
      url: "https://www.wired.com/story/unmasking-bitcoin-creator-satoshi-nakamoto-again/",
      urlToImage:
        "https://media.wired.com/photos/6703eb3979f13fda7f04485b/191:100/w_1280,c_limit/Satoshi-Nakamoto-biz-1341874258.jpg",
      publishedAt: "2024-10-09T01:00:00Z",
      content:
        "Peter Todd is standing on the upper floor of a dilapidated industrial building somewhere in Czechia, chuckling under his breath. He has just been accused on camera of being Satoshi Nakamoto, the Bitc… [+3043 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Matthew Gault",
      title:
        "Controversial HBO Documentary Concludes Peter Todd Invented Bitcoin",
      description: "The cryptocurrency community is not amused.",
      url: "https://gizmodo.com/controversial-hbo-documentary-concludes-peter-todd-invented-bitcoin-2000509751",
      urlToImage: "https://gizmodo.com/app/uploads/2024/10/PeterToddHBO.jpg",
      publishedAt: "2024-10-09T14:05:37Z",
      content:
        "Last night, HBO aired a documentary about Bitcoin that claimed to reveal the identity of the cryptocurrencys anonymous creator Satoshi Nakamoto. In Money Electric, journalist Cullen Hoback chased the… [+3152 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Lucas Ropek",
      title: "New HBO Doc Promises to Unmask the Mysterious Inventor of Bitcoin",
      description:
        "Who invented crypto? A filmmaker believes he's cracked the case.",
      url: "https://gizmodo.com/new-hbo-doc-promises-to-unmask-the-mysterious-inventor-of-bitcoin-2000507216",
      urlToImage:
        "https://gizmodo.com/app/uploads/2024/10/A-Statue-of-the-Mysterious-Bitcoin-Inventor-Satoshi-Nakamoto-in-Budapest-Park.jpg",
      publishedAt: "2024-10-04T13:35:42Z",
      content:
        "The world has long wondered who created Bitcoin. Ever since a white paper bearing his name was published on the web in 2008, the digital asset’s conception has widely been attributed to a pseudonymou… [+2431 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Samantha Kelly",
      title: "PayPal to Allow Businesses Buy and Sell Crypto",
      description:
        'The change will bring bitcoin and other virtual coins to "millions" of merchants across the US.',
      url: "https://www.cnet.com/personal-finance/crypto/paypal-to-allow-businesses-buy-and-sell-crypto/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/2b2ba45973ffae7baacd4449b399bd35435e4fa0/hub/2022/04/22/d7acb748-e7bd-4553-ae44-2f893ccb87ba/paypal-logo-2022-659.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-09-26T15:12:00Z",
      content:
        "It's about to get easier for US merchants to use cryptocurrency for payments. PayPal is launching a new service to allow the businesses that use its platform to buy, hold and sell crypto. \r\nAlthough … [+1029 chars]",
    },
    {
      source: {
        id: null,
        name: "[Removed]",
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "2024-09-17T13:00:22Z",
      content: "[Removed]",
    },
    {
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "msmash",
      title:
        "Government of Bhutan Holds Over $825 Million, or Nearly a Third of Its GDP, in Bitcoin, Arkham Data Shows",
      description:
        "The government of Bhutan is currently holding over $828 million in bitcoin, according to onchain data by Arkham Intelligence. From a report: \"Unlike most governments, Bhutan's BTC does not come from law enforcement asset seizures, but from bitcoin mining oper…",
      url: "https://slashdot.org/story/24/09/23/1940238/government-of-bhutan-holds-over-825-million-or-nearly-a-third-of-its-gdp-in-bitcoin-arkham-data-shows",
      urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
      publishedAt: "2024-09-23T20:05:00Z",
      content:
        "The government of Bhutan is currently holding over $828 million in bitcoin, according to onchain data by Arkham Intelligence. From a report: \"Unlike most governments, Bhutan's BTC does not come from … [+1208 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Lucas Ropek",
      title:
        "Infamous Tech Bro Starts School That Teaches How to Crowdfund Your Own Country",
      description:
        "A well-funded free market doctrine is getting its own mysterious educational platform.",
      url: "https://gizmodo.com/infamous-tech-bro-starts-school-that-teaches-how-to-crowdfund-your-own-country-2000502383",
      urlToImage:
        "https://gizmodo.com/app/uploads/2024/09/Balaji-Srinivasan-during-the-Fintech-Festival-in-Singapore.jpg",
      publishedAt: "2024-09-24T13:35:22Z",
      content:
        "Balaji Srinivasan, the former chief technology officer of Coinbase, is a weird guy. He’s talked about living forever. He helped finance a pro-steroids athletic competition. And he once threw away a m… [+3090 chars]",
    },
    {
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "BeauHD",
      title: "Mystery Creator of Bitcoin Identified, New HBO Documentary Claims",
      description:
        "A new HBO documentary directed by Emmy-nominated filmmaker Cullen Hoback claims to have revealed the true identity of the pseudonymous creator of Bitcoin, Satoshi Nakamoto. As Politico notes, Hoback \"drew critical acclaim for his series 'Q: Into the Storm' th…",
      url: "https://slashdot.org/story/24/10/03/2330200/mystery-creator-of-bitcoin-identified-new-hbo-documentary-claims",
      urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
      publishedAt: "2024-10-04T00:02:00Z",
      content:
        "[T]he exposure of Satoshi as its alleged creator threatens to raise some huge questions, not least his potential complicity in crimes that have featured Bitcoin use. It could also establish him as on… [+986 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "abharade@insider.com (Aditi Bharade,Kwan Wei Kevin Tan)",
      title:
        "Trump flip-flopped on crypto, but his PAC has raked in millions of dollars of crypto donations since June",
      description:
        "The former president has positioned himself as the pro-crypto candidate this election cycle. But he hasn't always had nice things to say about crypto.",
      url: "https://www.businessinsider.com/trump-pac-raised-millions-crypto-donations-since-june-2024-10",
      urlToImage:
        "https://i.insider.com/670f5459a70318649282ad0f?width=1200&format=jpeg",
      publishedAt: "2024-10-16T09:44:31Z",
      content:
        "A political action committee called Trump 47 has raised $7.5 million in cryptocurrency donations for former President Donald Trump's White House bid.\r\nAccording to Federal Election Commission filings… [+3227 chars]",
    },
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "Quelian Sanz",
      title:
        "HBO revela el mayor misterio sobre Bitcoin, ¿quién es realmente Satoshi Nakamoto?",
      description:
        "Bitcoin es la criptomoneda más popular del planeta, y también una de las más transparentes para el usuario. Se sabe casi todo sobre ella, sus transacciones son públicas, se conoce cuántas hay en circulación y muchísimos detalles sobre su dinámica. Pero a día …",
      url: "http://hipertextual.com/2024/10/hbo-revela-el-mayor-misterio-sobre-bitcoin-quien-es-realmente-satoshi-nakamoto",
      urlToImage:
        "https://imgs.hipertextual.com/wp-content/uploads/2024/10/bitcoin-creador-scaled.jpg",
      publishedAt: "2024-10-09T12:09:45Z",
      content:
        "Bitcoin es la criptomoneda más popular del planeta, y también una de las más transparentes para el usuario. Se sabe casi todo sobre ella, sus transacciones son públicas, se conoce cuántas hay en circ… [+2064 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Alistair Charlton",
      title: "Trump's $100,000 Watches Are the Most Tragic Celebrity Watch Yet",
      description:
        "Former president Donald Trump wants you to buy gaudy, overpriced timepieces “made for those who combine boldness and elegance.” He got one part right.",
      url: "https://www.wired.com/story/trumps-dollar100000-watches-are-the-most-tragic-celebrity-watch-yet/",
      urlToImage:
        "https://media.wired.com/photos/66f6c5b5c143415d72625aca/191:100/w_1280,c_limit/trump-watches-pol.jpg",
      publishedAt: "2024-09-27T17:48:08Z",
      content:
        "Celebrities partnering with watch brands is nothing new. Sometimes a bona fide watch enthusiast like John Mayer partners with Audemars Piguet, or Ed Sheeran (owner of a unique Patek Philippe, no less… [+2694 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Joe Tilleli",
      title:
        "Wall Street in Your Pocket: The Tykr Stock Screener App Will Teach You to Earn Back the Money You Spent on Its Lifetime Plan",
      description:
        "Save 83% and an additional $30 when you sign up for the Tykr Stock Screener premium plan lifetime subscription with this code.",
      url: "https://gizmodo.com/wall-street-in-your-pocket-the-tykr-stock-screener-app-will-teach-you-to-earn-back-the-money-you-spent-on-its-lifetime-plan-2000505735",
      urlToImage: "https://gizmodo.com/app/uploads/2024/10/Tykr.jpg",
      publishedAt: "2024-10-01T18:18:47Z",
      content:
        "Just starting out with stock trading can be an overwhelming experience. Knowing what stocks are good and bad and knowing when to buy or sell doesn’t come naturally. You can work with a financial advi… [+2251 chars]",
    },
    {
      source: {
        id: null,
        name: "Bitcoindevs.xyz",
      },
      author: "BDP",
      title:
        "Decoding Bitcoin: An interactive, exercise-heavy approach to learning Bitcoin",
      description:
        "Simplifying bitcoin tech to help you learn as efficiently as possible",
      url: "https://bitcoindevs.xyz/decoding/decoding/1-welcome",
      urlToImage: "https://bitcoindevs.xyz/images/pages-thumbnails/topics.png",
      publishedAt: "2024-10-07T17:46:16Z",
      content:
        "Welcome to Decoding Bitcoin, your go-to resource for understanding bitcoin, Privacy, and Decentralization. We're here to break down complex bitcoin concepts and provide straightforward explanations t… [+708 chars]",
    },
    {
      source: {
        id: "time",
        name: "Time",
      },
      author: "Andrew R. Chow",
      title:
        "Documentarian Says He’s Solved the Mystery of Bitcoin’s Creator. Insiders Are Extremely Skeptical.",
      description:
        "Cullen Hoback's new documentary argues Bitcoin's Satoshi Nakamoto has been hiding in plain sight all along.",
      url: "https://time.com/7064841/satoshi-nakamoto-hbo-money-electric/",
      urlToImage:
        "https://api.time.com/wp-content/uploads/2024/10/peter-todd.jpeg?quality=85&w=1200&h=628&crop=1",
      publishedAt: "2024-10-09T01:01:00Z",
      content:
        "This article contains spoilers for Money Electric: The Bitcoin Mystery.\r\nWho is Bitcoins founder, Satoshi Nakamoto? The question has perplexed and excited cryptocurrency fans ever since Bitcoin was c… [+12372 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Javier Pastor",
      title:
        "La identidad del creador de bitcoin siempre ha sido un misterio. HBO promete revelarla muy pronto",
      description:
        "En 2008 alguien que usaba como pseudónimo Satoshi Nakamoto reveló al mundo su creación: el bitcoin. Esta criptomoneda ha acabado provocando una singular revolución en nuestra economía, pero la identidad real de su creador jamás se ha revelado. Ahora hay una n…",
      url: "https://www.xataka.com/criptomonedas/identidad-creador-bitcoin-siempre-ha-sido-misterio-hbo-promete-revelarla-muy-pronto",
      urlToImage: "https://i.blogs.es/8cf13f/btc/840_560.jpeg",
      publishedAt: "2024-10-04T16:30:51Z",
      content:
        "En 2008 alguien que usaba como pseudónimo Satoshi Nakamoto reveló al mundo su creación: el bitcoin. Esta criptomoneda ha acabado provocando una singular revolución en nuestra economía, pero la identi… [+2425 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Enrique Pérez",
      title:
        "El candidato a Satoshi Nakamoto más querido por la comunidad Bitcoin: el cypherpunk que fue inmortalizado en blockchain",
      description:
        'En julio de 2011, Leonard Harris "Len" Sassaman decidió quitarse la vida. Tenía 31 años, pero ya llevaba una larga batalla contra la depresión. Quienes lo conocieron explican que Len era "un auténtico Cypherpunk: brillante, irreverente e idealista a partes ig…',
      url: "https://www.xataka.com/criptomonedas/candidato-a-satoshi-nakamoto-querido-comunidad-bitcoin-cypherpunk-que-fue-inmortalizado-blockchain",
      urlToImage: "https://i.blogs.es/d0f570/len_sassaman_ascii/840_560.jpeg",
      publishedAt: "2024-10-13T17:01:49Z",
      content:
        'En julio de 2011, Leonard Harris "Len" Sassaman decidió quitarse la vida. Tenía 31 años, pero ya llevaba una larga batalla contra la depresión. Quienes lo conocieron explican que Len era "un auténtic… [+4010 chars]',
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Javier Pastor",
      title:
        'En HBO creen que Peter Todd es el creador de bitcoin. Su respuesta: "por supuesto que no soy Satoshi"',
      description:
        "Ya sabemos cuál es la identidad real de Satoshi Nakamoto, el creador de bitcoin. O al menos eso es lo que asegura un nuevo y recién estrenado documental de HBO titulado 'Dinero electrónico: el misterio del Bitcoin'. Y una vez más, que los responsables del doc…",
      url: "https://www.xataka.com/criptomonedas/hbo-creen-que-peter-todd-creador-bitcoin-su-respuesta-supuesto-que-no-soy-satoshi",
      urlToImage: "https://i.blogs.es/955483/todd-11/840_560.jpeg",
      publishedAt: "2024-10-09T06:40:54Z",
      content:
        "Ya sabemos cuál es la identidad real de Satoshi Nakamoto, el creador de bitcoin. O al menos eso es lo que asegura un nuevo y recién estrenado documental de HBO titulado 'Dinero electrónico: el mister… [+3046 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Javier Marquez",
      title:
        "Alguien ha montado una enorme mina de Bitcoin en un pueblo de Texas. Los vecinos dicen que el ruido les está arruinando la vida",
      description:
        "La fiebre del bitcoin parece haber pedido fuerza por estos días. Después de la aprobación de los ETF y del precio récord que superó la barrera de los 69.000 dólares no se ha hablado demasiado de esta criptomoneda. Los vecinos de Granbury, una pequeña ciudad s…",
      url: "https://www.xataka.com/criptomonedas/alguien-ha-montado-enorme-mina-bitcoin-pueblo-texas-vecinos-dicen-que-ruido-les-esta-arruinando-vida",
      urlToImage:
        "https://i.blogs.es/4fcb29/1mina-de-bitcoin-portada/840_560.jpeg",
      publishedAt: "2024-10-09T06:31:13Z",
      content:
        "La fiebre del bitcoin parece haber pedido fuerza por estos días. Después de la aprobación de los ETF y del precio récord que superó la barrera de los 69.000 dólares no se ha hablado demasiado de esta… [+2389 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "CoinDesk",
      title: "Why Are Bitcoin Miners Rushing to Add Bitcoin to Their Bags?",
      description:
        "CoinDesk's Jennifer Sanasie discusses the wave of bitcoin miners adopting Michael Saylor's strategy of accumulating BTC from the open market. Plus, what that...",
      url: "https://finance.yahoo.com/video/why-bitcoin-miners-rushing-add-211041352.html/",
      urlToImage:
        "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
      publishedAt: "2024-09-17T21:10:41Z",
      content:
        "CoinDesk's Jennifer Sanasie discusses the wave of bitcoin miners adopting Michael Saylor's strategy of accumulating BTC from the open market. Plus, what that means for bitcoin as a long-term investme… [+156 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Andy Greenberg, Lily Hay Newman, Dhruv Mehrotra",
      title: "Iranian Hackers Tried to Give Hacked Trump Campaign Emails to Dems",
      description:
        "Plus: The FBI dismantles the largest-ever China-backed botnet, the DOJ charges two men with a $243 million crypto theft, Apple’s MacOS Sequoia breaks cybersecurity tools, and more.",
      url: "https://www.wired.com/story/iran-hackers-trump-democrats-emails/",
      urlToImage:
        "https://media.wired.com/photos/66ed82cf42ad37094e1a41eb/191:100/w_1280,c_limit/GettyImages-2172740225.jpg",
      publishedAt: "2024-09-21T10:30:00Z",
      content:
        "The week was dominated by news that thousands of pagers, walkie-talkies and other devices were exploding across Lebanon on Tuesday and Wednesday in an attack targeting the militant group Hezbollah. A… [+6624 chars]",
    },
    {
      source: {
        id: null,
        name: "Theregister.com",
      },
      author: "Brandon Vigliarolo",
      title: "Bitcoin creator suspect says he is not Bitcoin creator suspect",
      description:
        "'If I was Satoshi I would have destroyed my ability to prove I'm Satoshi'\nThe man identified as Bitcoin creator Satoshi Nakamoto in a new HBO documentary has something to say: Wrong again, world.…",
      url: "https://www.theregister.com/2024/10/09/satoshi_nakamoto_suspect_hbo_bitcoin/",
      urlToImage: "https://regmedia.co.uk/2016/06/06/bitcoinsstack.jpg",
      publishedAt: "2024-10-09T17:00:08Z",
      content:
        "The man identified as Bitcoin creator Satoshi Nakamoto in a new HBO documentary has something to say: Wrong again, world.\r\nIn the just-released HBO film on the history of the world's biggest digital … [+6425 chars]",
    },
    {
      source: {
        id: null,
        name: "Blockhead.co",
      },
      author: "Perion Lim",
      title:
        "New HBO Documentary Claims Bitcoin Creator Satoshi Nakamoto Is Len Sassaman",
      description:
        "HBO's upcoming documentary, 'Money Electric: The Bitcoin Mystery', claims the real Satoshi Nakamoto is Len Sassaman, who tragically took his life in 2011",
      url: "https://www.blockhead.co/2024/10/05/new-bitcoin-documentary-to-sheds-more-light-on-satoshi-nakamotos-identity/",
      urlToImage:
        "https://www.blockhead.co/content/images/size/w1200/2024/10/Lens-Sassaman.jpg",
      publishedAt: "2024-10-05T12:13:02Z",
      content:
        "A new HBO documentary titled Money Electric: The Bitcoin Mystery is set to reveal the real identity of the anonymous creator of Bitcoin. The identity of Satoshi Nakamoto has long been debated within … [+2996 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Matt Novak",
      title: "Truth Social Users Are Losing Ridiculous Sums of Money to Scams",
      description:
        "Read the complaints submitted to the FTC by users of Donald Trump's social media platform.",
      url: "https://gizmodo.com/truth-social-users-are-losing-ridiculous-sums-of-money-to-scams-2000506604",
      urlToImage:
        "https://gizmodo.com/app/uploads/2024/10/donald-trump-october-3-2024.jpg",
      publishedAt: "2024-10-05T13:00:34Z",
      content:
        "Donald Trump launched Truth Social in 2022 as a social media platform where the MAGA faithful could hang out without any liberals to spoil the fun. The biggest selling point? It was the only place wh… [+30292 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Alexander Spier",
      title:
        "heise+ | Heizlüfter mit Bitcoin-Miner: Ofen Pro von 21energy im Test​",
      description:
        "Die Wohnung gemütlich heizen und damit Geld verdienen? Der Ofen Pro von 21energy schürft Bitcoins und gibt dabei Wärme ab. So sollen die Heizkosten sinken.​",
      url: "https://www.heise.de/tests/Heizluefter-mit-Bitcoin-Miner-Ofen-Pro-von-21energy-im-Test-9968169.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/8/3/2/6/2/PXL_20241008_110936111-EDIT-3abd22e5fe6d777d.jpg",
      publishedAt: "2024-10-09T05:30:00Z",
      content:
        "Inhaltsverzeichnis\r\nDas Heizen der Wohnung im Winter kostet viel Energie, das Schürfen von Bitcoins auch: Warum also nicht beides verbinden und mit der Abwärme vom Bitcoin-Mining die Wohnung wärmen u… [+1369 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Kellan Jansen",
      title: "Suze Orman: 1 Reason You Should ‘Absolutely’ Own Bitcoin",
      description:
        'Suze Orman is a financial host and author, and in a recent interview with CNBC, she said she believes "everyone should absolutely" own the cryptocurrency...',
      url: "https://finance.yahoo.com/news/suze-orman-1-reason-absolutely-140020553.html/",
      urlToImage:
        "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
      publishedAt: "2024-09-23T14:00:20Z",
      content:
        "Suze Orman is a financial host and author, and in a recent interview with CNBC, she said she believes everyone should absolutely own the cryptocurrency bitcoin. Usually, people who support bitcoin as… [+3271 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Dan DeFrancesco",
      title: "An incoming 'M&A supercycle' wouldn't just be a win for dealmakers",
      description:
        "Goldman Sachs' earnings hint at the revival of the M&A market, which could help companies big and small.",
      url: "https://www.businessinsider.com/goldman-sachs-earnings-dealmaking-benefit-economy-2024-10",
      urlToImage:
        "https://i.insider.com/670fa446a70318649282b2f4?width=1000&format=jpeg",
      publishedAt: "2024-10-16T11:33:31Z",
      content:
        "Illustration by Budrul Chukrut/SOPA Images/LightRocket via Getty Images\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily ne… [+7079 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Samantha Kelly",
      title: "PayPal Will Allow Businesses to Buy and Sell Crypto",
      description:
        'PayPal will bring bitcoin and other virtual coins to "millions" of merchants across the US.',
      url: "https://www.cnet.com/personal-finance/crypto/paypal-will-allow-businesses-to-buy-and-sell-crypto/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/2b2ba45973ffae7baacd4449b399bd35435e4fa0/hub/2022/04/22/d7acb748-e7bd-4553-ae44-2f893ccb87ba/paypal-logo-2022-659.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-09-28T22:00:04Z",
      content:
        "PayPal is launching a new service to allow businesses to buy, hold and sell cryptocurrency, making it much easier for US merchants to use crypto for payments.\r\nAlthough the company already allowed it… [+1103 chars]",
    },
    {
      source: {
        id: null,
        name: "Genbeta.com",
      },
      author: "Antonio Vallejo",
      title:
        'La identidad del creador de bitcoin es un misterio. HBO tiene un candidato (aunque lo niega): "por supuesto que no soy Satoshi"',
      description:
        "A pesar de ser la criptodivisa más conocida del mundo, la identidad de su creador (o grupo de creadores) todavía guarda misterio. Hasta ahora conocíamos que Satoshi Nakamoto era el pseudónimo usado por la persona o grupo de personas que crearon el protocolo B…",
      url: "https://www.genbeta.com/actualidad/identidad-creador-bitcoin-misterio-hbo-tiene-candidato-niega-supuesto-que-no-soy-satoshi",
      urlToImage: "https://i.blogs.es/c65cdb/bitcoin/840_560.jpeg",
      publishedAt: "2024-10-09T09:11:59Z",
      content:
        "A pesar de ser la criptodivisa más conocida del mundo, la identidad de su creador (o grupo de creadores) todavía guarda misterio. Hasta ahora conocíamos que Satoshi Nakamoto era el pseudónimo usado p… [+3175 chars]",
    },
    {
      source: {
        id: null,
        name: "Golem.de",
      },
      author: "Tobias Költzsch",
      title: "Bitcoin: Dokumentarfilmer will Satoshi Nakamoto enttarnt haben",
      description:
        "Immer noch ist unbekannt, wer sich hinter dem Bitcoin-Erfinder Satoshi Nakamoto verbirgt. Eine neue HBO-Doku soll Licht ins Dunkel bringen. (Bitcoin, Wirtschaft)",
      url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fbitcoin-dokumentarfilmer-will-satoshi-nakamoto-enttarnt-haben-2410-189525.html&referer=https%3A%2F%2Ft.co%2F554bc95fff",
      urlToImage: null,
      publishedAt: "2024-10-04T12:52:02Z",
      content:
        "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
    },
    {
      source: {
        id: null,
        name: "Golem.de",
      },
      author: "Ingo Pakalski",
      title:
        "Bitcoin-Erfinder Nakamoto enttarnt?: Peter Todd dementiert und kritisiert HBO scharf",
      description:
        "Eine aktuelle HBO-Doku behauptet, Peter Todd sei der echte Bitcoin-Erfinder. Er dementiert und macht dem Sender schwere Vorwürfe. (Bitcoin, Wirtschaft)",
      url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fbitcoin-erfinder-nakamoto-enttarnt-peter-todd-dementiert-und-kritisiert-hbo-scharf-2410-189644.html&referer=https%3A%2F%2Ft.co%2F119e3e0c68",
      urlToImage: null,
      publishedAt: "2024-10-09T07:56:02Z",
      content:
        "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
    },
    {
      source: {
        id: null,
        name: "MarketWatch",
      },
      author: "Frances Yue",
      title:
        "Struggling bitcoin miners may be revived by Fed rate decision, regardless of cut size",
      description:
        "Whether the Federal Reserve delivers a 25 or 50 basis point rate cut, it could mean a turnaround for bitcoin miners, which have been struggling so far this year, market participants said.",
      url: "https://www.marketwatch.com/story/struggling-bitcoin-miners-may-be-revived-by-fed-rate-decision-regardless-of-cut-size-db64c987",
      urlToImage: "https://images.mktw.net/im-63283705/social",
      publishedAt: "2024-09-17T19:51:00Z",
      content:
        "Whether the Federal Reserve delivers an ordinary, or slightly larger interest-rate cut on Wednesday, it could trigger a turnaround for bitcoin miners, which have been struggling with higher borrowing… [+363 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "fdemott@insider.com (Filip De Mott)",
      title:
        "Stock market today: Tech rally leads stocks higher as oil prices plunge and earnings kick off",
      description:
        "The market rebounded from Monday's losing session as oil prices plunged 4% and tech stocks gained ground.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-today-tech-rally-oil-prices-china-inflation-cpi-2024-10",
      urlToImage:
        "https://i.insider.com/67058c9f3f2165d716df5b64?width=1200&format=jpeg",
      publishedAt: "2024-10-08T20:12:25Z",
      content:
        "US stocks rebounded on Tuesday after Monday's losses, with momentum revived by a tech rally and falling crude prices.\r\nThe Magnificent 7 tech cohort led the market higher, with Nvidia at the forefron… [+2393 chars]",
    },
    {
      source: {
        id: null,
        name: "Microsiervos.com",
      },
      author: "alvy@microsiervos.com (Alvy)",
      title: "Dinero eléctrico: el misterio de Bitcoin",
      description:
        "Se estrena en los próximos días en Max el documental de investigación Electric Money: The Mystery of Bitcoin, un trabajo de Cullen Hoback acerca de la figura de Satoshi Nakamoto, creador de Bitcoin.\n\nY digo «creador» aunque como es bien sabido es tal el anoni…",
      url: "https://www.microsiervos.com/archivo/peliculas-tv/dinero-electrico-misterio-bitcoin.html",
      urlToImage: "https://img.youtube.com/vi/iSF0KGsFuI8/0.jpg",
      publishedAt: "2024-10-03T18:38:18Z",
      content:
        "Por @Alvy 3 de Octubre de 2024\r\nSe estrena en los próximos días en Max el documental de investigación Electric Money: The Mystery of Bitcoin, un trabajo de Cullen Hoback acerca de la figura de Satosh… [+2064 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title: "Consumer sentiment, Meta's AI growth, bitcoin surge: Catalysts",
      description: null,
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_cdb9db99-cd0e-4d40-9dce-543682efb4d2",
      urlToImage: null,
      publishedAt: "2024-09-27T17:52:05Z",
      content:
        "If you click 'Accept all', we and our partners, including 240 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
    },
    {
      source: {
        id: null,
        name: "MarketWatch",
      },
      author: "Frances Yue",
      title:
        "Bitcoin could hit a $74,000 record high this month if its October winning streak continues",
      description:
        "Bitcoin could reach a new record high above $74,000 this month, fueled by seasonality that favors the cryptocurrency and a bullish macroeconomic setup, according to some analysts.",
      url: "https://www.marketwatch.com/story/bitcoin-could-hit-a-74-000-record-high-this-month-if-its-october-winning-streak-continues-064f8864",
      urlToImage: "https://images.mktw.net/im-80920683/social",
      publishedAt: "2024-10-02T10:00:00Z",
      content:
        "Bitcoin could reach a new record high above $74,000 this month, fueled by seasonality that favors the cryptocurrency and a bullish macroeconomic setup, according to some analysts.\r\nOctober is histori… [+378 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Erin Snodgrass",
      title:
        "Former FTX exec starts prison sentence with LinkedIn post about a 'new position'",
      description:
        'Former FTX executive Ryan Salame prepared to start his 7 ½ prison sentence by posting about his "new position" on LinkedIn this week.',
      url: "https://www.businessinsider.com/former-ftx-exec-ryan-salame-starts-prison-sentence-linkedin-post-2024-10",
      urlToImage:
        "https://i.insider.com/67085455a703186492811467?width=1200&format=jpeg",
      publishedAt: "2024-10-10T23:39:03Z",
      content:
        "Ryan Salame is set to report to prison on Friday.AP Photo/Mary Altaffer)\r\n<ul><li>Former FTX executive Ryan Salame is heading to prison on Friday.</li><li>He took to LinkedIn Wednesday to share his u… [+2225 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "jsor@businessinsider.com (Jennifer Sor)",
      title:
        "Stock market today: US stocks close at all-time highs ahead of key inflation update",
      description:
        "The Dow and the S&P 500 closed at a record high. Markets are waiting for September inflation data, a key data point ahead of the Fed's next move.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-today-fed-rate-cuts-outlook-fomc-minutes-inflation-2024-10",
      urlToImage:
        "https://i.insider.com/6706e1f7a70318649280a65f?width=800&format=jpeg",
      publishedAt: "2024-10-09T20:13:30Z",
      content:
        "US stocks jumped on Wednesday as traders looked ahead to coming inflation data and took in the minutes of the Federal Reserve's last meeting. \r\nAll three benchmark indexes surged to end the day highe… [+3041 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "kcloonan@insider.com (Kelly Cloonan)",
      title:
        "Stock market today: Indexes close lower after CPI shows sticky inflation in September",
      description:
        'Indexes slipped Thursday as investors took in higher-than-expected inflation. The latest data has sparked talk of a "no landing" for the US economy.',
      url: "https://markets.businessinsider.com/news/stocks/stock-market-inflation-cpi-data-jobless-claims-labor-market-landing-2024-10",
      urlToImage:
        "https://i.insider.com/670831903f2165d716e00609?width=1200&format=jpeg",
      publishedAt: "2024-10-10T20:06:52Z",
      content:
        "Stocks fell on Thursday from records reached in the previous session, as traders took in a sticky inflation reading for September. \r\nAll three benchmark indexes fell, with the Dow Jones Industrial Av… [+2472 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Javier Marquez",
      title:
        "El británico que perdió millones en bitcoins al tirar su disco duro no se da por vencido: ahora ha demandado al ayuntamiento",
      description:
        "James Howells, un ingeniero informático que vive en la ciudad de Newport, Gales, lleva años asegurando que en 2013 tiró a la basura un disco duro con alrededor de 8.000 bitcoins, los cuales había conseguido minar en su casa poco después de que la criptomoneda…",
      url: "https://www.xataka.com/criptomonedas/britanico-que-perdio-millones-bitcoins-al-tirar-su-disco-duro-no-se-da-vencido-ahora-ha-demandado-al-ayuntamiento",
      urlToImage:
        "https://i.blogs.es/29b07c/vertedero-bitcoin-portada/840_560.jpeg",
      publishedAt: "2024-10-15T22:33:00Z",
      content:
        "James Howells, un ingeniero informático que vive en la ciudad de Newport, Gales, lleva años asegurando que en 2013 tiró a la basura un disco duro con alrededor de 8.000 bitcoins, los cuales había con… [+3141 chars]",
    },
    {
      source: {
        id: null,
        name: "Hackaday",
      },
      author: "Dan Maloney",
      title: "Hackaday Links: September 29, 2024",
      description:
        "There was movement in the “AM Radio in Every Vehicle Act” last week, with the bill advancing out of the US House of Representatives Energy and Commerce Committee and heading to a full f…",
      url: "https://hackaday.com/2024/09/29/hackaday-links-september-29-2024/",
      urlToImage:
        "https://hackaday.com/wp-content/uploads/2014/11/had-links-banner.jpg",
      publishedAt: "2024-09-29T23:00:28Z",
      content:
        "There was movement in the “AM Radio in Every Vehicle Act” last week, with the bill advancing out of the US House of Representatives Energy and Commerce Committee and heading to a full floor vote. For… [+4562 chars]",
    },
    {
      source: {
        id: "die-zeit",
        name: "Die Zeit",
      },
      author: "ZEIT ONLINE: News -",
      title:
        "Bitcoin und Ether: Commerzbank mit neuem Angebot für Kryptowährungen",
      description:
        "Hier finden Sie Informationen zu dem Thema „Bitcoin und Ether“. Lesen Sie jetzt „Commerzbank mit neuem Angebot für Kryptowährungen“.",
      url: "https://www.zeit.de/news/2024-09/19/commerzbank-mit-neuem-angebot-fuer-kryptowaehrungen",
      urlToImage:
        "https://img.zeit.de/news/2024-09/19/commerzbank-mit-neuem-angebot-fuer-kryptowaehrungen-image-group/wide__1300x731",
      publishedAt: "2024-09-19T11:56:54Z",
      content:
        "Die Commerzbank baut das boomende Geschäft mit Kryptowährungen mit einem neuen Angebot für Firmenkunden aus. Dafür hat das Geldinstitut eine Partnerschaft mit der Deutsche-Börse-Tochter Crypto Financ… [+1464 chars]",
    },
    {
      source: {
        id: null,
        name: "Genbeta.com",
      },
      author: "José Alberto Lizana",
      title:
        "Olvidó la contraseña de su USB donde almacenaba 400 millones de euros en Bitcoin. Y un hacker lo consiguió descifrar",
      description:
        "A casi todos en alguna ocasión se nos ha olvidado la contraseña para acceder a nuestro correo electrónico, la nube o a una red social. Pero esto no tenía mayor importancia, pues simplemente se podía recuperar de los servidores y tampoco se iba a perder algo r…",
      url: "https://www.genbeta.com/actualidad/olvido-contrasena-su-usb-donde-almacenaba-400-millones-euros-bitcoin-hacker-consiguio-descifrar",
      urlToImage: "https://i.blogs.es/beb99e/bitcoin/840_560.jpeg",
      publishedAt: "2024-10-12T12:01:41Z",
      content:
        "A casi todos en alguna ocasión se nos ha olvidado la contraseña para acceder a nuestro correo electrónico, la nube o a una red social. Pero esto no tenía mayor importancia, pues simplemente se podía … [+2573 chars]",
    },
    {
      source: {
        id: null,
        name: "tagesschau.de",
      },
      author: "Angela Göpfert",
      title: "FTX-Rückzahlungen und Trump: Neue Bitcoin-Rally voraus?",
      description:
        'Die Krypto-Börse FTX will 16 Milliarden Dollar an ihre Kunden zurückzahlen - Geld, das wieder in Bitcoin & Co. fließen könnte. Unterdessen versucht Trump, sich als "Bitcoin-Präsident" zu profilieren. Von Angela Göpfert.',
      url: "https://www.tagesschau.de/wirtschaft/finanzen/bitcoin-trump-ftx-krypto-boerse-100.html",
      urlToImage:
        "https://images.tagesschau.de/image/a0002f3a-4e31-450f-82a5-47f5f28e29cf/AAABkmq0_XM/AAABkZLhkrw/16x9-1280/ftx-110.jpg",
      publishedAt: "2024-10-08T11:33:15Z",
      content:
        'Stand: 08.10.2024 13:33 Uhr\r\nDie Krypto-Börse FTX will 16 Milliarden Dollar an ihre Kunden zurückzahlen - Geld, das wieder in Bitcoin &amp; Co. fließen könnte. Unterdessen versucht Trump, sich als "B… [+5221 chars]',
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title:
        "Who really created Bitcoin? A new HBO documentary claims it has the answer",
      description:
        "“Money Electric: The Bitcoin Mystery,” a new documentary from HBO (WBD) debuting Tuesday, promises to unmask one of the richest and most mysterious figures on the planet: the creator of Bitcoin. Read more...",
      url: "https://qz.com/hbo-documentary-bitcoin-creator-satoshi-nakamoto-1851666819",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/24a7fc9a9e3fa9eac8b8381fae5cb121.jpg",
      publishedAt: "2024-10-07T16:40:00Z",
      content:
        "In This Story\r\n Money Electric: The Bitcoin Mystery, a new documentary from HBO (WBD) debuting Tuesday, promises to unmask one of the richest and most mysterious figures on the planet: the creator of… [+2396 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title:
        "Bitcoin surges as investor interest in ETFs grows, eyeing $70k milestone",
      description:
        "Bitcoin is on an upward trajectory. Its price is hovering around $68,000, reflecting a 9.5% increase over the past week and a 2.8% rise in just one day. The surge in the leading cryptocurrency is being driven by a wave of investor interest in U.S. spot bitcoi…",
      url: "https://qz.com/spot-bitcoin-etfs-see-over-555-million-in-inflows-in-a-1851673718",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/413cc655995e31ed2425c65181b698fb.jpg",
      publishedAt: "2024-10-16T14:16:54Z",
      content:
        "In This Story\r\nBitcoin is on an upward trajectory. Its price is hovering around $68,000, reflecting a 9.5% increase over the past week and a 2.8% rise in just one day. The surge in the leading crypto… [+1471 chars]",
    },
    {
      source: {
        id: null,
        name: "Theregister.com",
      },
      author: "Jessica Lyons",
      title:
        "Feds reach for sliver of crypto-cash nicked by North Korea's notorious Lazarus Group",
      description:
        "A couple million will do for a start … but Kim's crews are suspected of stealing much more\nThe US government is attempting to claw back more than $2.67 million stolen by North Korea's Lazarus Group, filing two lawsuits to force the forfeiture of millions in T…",
      url: "https://www.theregister.com/2024/10/08/us_lazarus_group_crypto_seizure/",
      urlToImage: "https://regmedia.co.uk/2023/10/03/korea_shutterstock.jpg",
      publishedAt: "2024-10-08T00:27:08Z",
      content:
        "The US government is attempting to claw back more than $2.67 million stolen by North Korea's Lazarus Group, filing two lawsuits to force the forfeiture of millions in Tether and Bitcoin.\r\nThe first l… [+2713 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title:
        "Satoshi Nakamoto unmasked: Will HBO reveal the identity of the creator of bitcoin?",
      description:
        "HBO’s (WBD) latest documentary, “Money Electric: The Bitcoin Mystery,” premiering Tuesday, promises to delve into one of the greatest enigmas of the digital age: the identity of bitcoin’s elusive creator, believed to be among the richest and most enigmatic in…",
      url: "https://qz.com/bitcoin-creator-satoshi-nakamoto-hbo-documentary-1851667608",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/6a363a034e712602ee791f42e5a75cbb.jpg",
      publishedAt: "2024-10-08T14:14:00Z",
      content:
        "In This Story\r\nHBOs (WBD) latest documentary, Money Electric: The Bitcoin Mystery, premiering Tuesday, promises to delve into one of the greatest enigmas of the digital age: the identity of bitcoins … [+1766 chars]",
    },
    {
      source: {
        id: null,
        name: "Genbeta.com",
      },
      author: "Miguel Jorge",
      title:
        "Gales recibe la demanda más insólita de su historia: 495 millones de libras por un disco duro perdido con las claves de 8.000 bitcoin",
      description:
        "La historia es conocida, pero el giro que acaban de dar los acontecimientos merece una actualización. James Howells es un galés que, en circunstancias normales, debería estar disfrutando de una cuenta corriente sin fin viviendo una vida solo apta para el 1% d…",
      url: "https://www.genbeta.com/actualidad/gales-recibe-demanda-insolita-su-historia-495-millones-libras-disco-duro-perdido-claves-8-000-bitcoin",
      urlToImage: "https://i.blogs.es/782d62/pexels-photo-3174349/840_560.jpeg",
      publishedAt: "2024-10-15T11:00:49Z",
      content:
        "La historia es conocida, pero el giro que acaban de dar los acontecimientos merece una actualización. James Howells es un galés que, en circunstancias normales, debería estar disfrutando de una cuent… [+4248 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "Emily Chang",
      title:
        "Doug Emhoff blasts Gov. Sanders' remarks about Harris not having biological children",
      description:
        "Second gentleman Doug Emhoff blasted remarks made by Arkansas Gov. Sarah Huckabee Sanders about Vice President Kamala Harris.",
      url: "https://abcnews.go.com/Politics/doug-emhoff-blasts-gov-sanders-remarks-harris-biological/story?id=113842070",
      urlToImage:
        "https://i.abcnewsfe.com/a/137a4cc2-d248-48e8-a61d-9dd10e4f6941/emhoff-file-gty-ml-240919_1726757529874_hpMain_16x9.jpg?w=1600",
      publishedAt: "2024-09-19T16:07:41Z",
      content:
        'Second gentleman Doug Emhoff blasted remarks made by Arkansas Gov. Sarah Huckabee Sanders, who said Vice President Kamala Harris "doesn\'t have anything to keep her humble" because she does not have b… [+2215 chars]',
    },
    {
      source: {
        id: null,
        name: "Theregister.com",
      },
      author: "Connor Jones",
      title: "Rhysida ransomware gang ships off Port of Seattle data for $6M",
      description:
        "Auction acts as payback after authority publicly refuses to pay up\nThe trend of ransomware crews claiming to sell stolen data privately instead of leaking it online continues with Rhysida marketing the data allegedly belonging to Port of Seattle for 100 Bitco…",
      url: "https://www.theregister.com/2024/09/17/rhysida_port_of_seattle/",
      urlToImage: "https://regmedia.co.uk/2018/12/08/shutterstock_168210293.jpg",
      publishedAt: "2024-09-17T16:45:15Z",
      content:
        "The trend of ransomware crews claiming to sell stolen data privately instead of leaking it online continues with Rhysida marketing the data allegedly belonging to Port of Seattle for 100 Bitcoin (aro… [+4475 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title:
        "Ether is beating Bitcoin as the Fed interest rate cut sparks a crypto rally",
      description:
        "Bitcoin and Ether, the two largest cryptocurrencies by market capitalization, were thriving on Monday morning, buoyed by the U.S. Federal Reserve’s recent interest rate cut. Bitcoin was trading near $63,000, up 1.2% in the past 24 hours and nearly 8% over the…",
      url: "https://qz.com/ether-outperforms-bitcoin-fed-interest-rate-cut-1851654781",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d91147f331314988daca7da52f3f5982.jpg",
      publishedAt: "2024-09-23T14:41:00Z",
      content:
        "Bitcoin and Ether, the two largest cryptocurrencies by market capitalization, were thriving on Monday morning, buoyed by the U.S. Federal Reserves recent interest rate cut. Bitcoin was trading near $… [+1432 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Rocio Fabbro",
      title: "Bitcoin climbs above $62,000 on the Fed's jumbo interest rate cut",
      description:
        "Bitcoin popped up over $60,000 and kept climbing early Thursday after the Federal Reserve slashed interest rates.Read more...",
      url: "https://qz.com/bitcoin-price-btc-fed-interest-rate-fomc-decision-1851652253",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/da8f87ebe6f96487d7d27a87b590c4e0.jpg",
      publishedAt: "2024-09-19T12:13:00Z",
      content:
        "In This Story\r\nBitcoin popped up over $60,000 and kept climbing early Thursday after the Federal Reserve slashed interest rates.\r\nThe price of the popular cryptocurrency popped up 1.3% Thursday morni… [+1780 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title:
        "HBO documentary claims Bitcoin developer Peter Todd is Satoshi Nakamoto – now comes the denial",
      description:
        "The HBO documentary suggests Todd, a former Bitcoin developer, is the cryptocurrency's mysterious creator. But it fails to provide solid evidence",
      url: "https://qz.com/hbo-documentary-claims-peter-todd-bitcoin-creator-satos-1851668667",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/4046de6574a7a5aa7932ebeccd7008b5.png",
      publishedAt: "2024-10-09T14:18:00Z",
      content:
        "In This Story\r\nWho created Bitcoin? Is it finally known? Perhaps not. \r\nMoney Electric: The Bitcoin Mystery, a new HBO (WBD) documentary that premiered on Tuesday, claims that former Bitcoin develope… [+3260 chars]",
    },
    {
      source: {
        id: null,
        name: "First Showing",
      },
      author: "Alex Billington",
      title:
        "Official Trailer for 'Money Electric: The Bitcoin Mystery' Documentary",
      description:
        '"If you dig deep enough, the inconsistencies will emerge." HBO has revealed the trailer for a documentary film titled Money Electric: The Bitcoin Mystery, another investigative look at Bitcoin and the world of cryptocurrency. This would play well as a double …',
      url: "https://www.firstshowing.net/2024/official-trailer-for-money-electric-the-bitcoin-mystery-documentary/",
      urlToImage:
        "https://media2.firstshowing.net/firstshowing/img16/MoneyElectricDocPostermainTW1.jpg",
      publishedAt: "2024-10-04T13:28:09Z",
      content:
        'by Alex BillingtonOctober 4, 2024Source:YouTube\r\n"If you dig deep enough, the inconsistencies will emerge." HBO has revealed the trailer for a documentary film titled Money Electric: The Bitcoin Myst… [+2727 chars]',
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title:
        "Bitcoin drops to $60,000 as escalating Middle East tensions rattle the crypto market",
      description:
        "Bitcoin fell to $60,000 on Tuesday evening as tensions in the Middle East worsened due to Iran’s attack on Israel. The leading cryptocurrency dropped nearly 5%, trading at $60,834. Read more...",
      url: "https://qz.com/bitcoin-60-000-tension-middle-east-1851662604",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d06df12221b342e0f27052697a5a6a2a.jpg",
      publishedAt: "2024-10-01T21:37:00Z",
      content:
        "Bitcoin fell to $60,000 on Tuesday evening as tensions in the Middle East worsened due to Irans attack on Israel. The leading cryptocurrency dropped nearly 5%, trading at $60,834. \r\nEther, the second… [+1260 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title: "5 crypto criminals serving the longest prison sentences",
      description:
        "The Social Capital Markets, a global initiative focused on fostering a just and sustainable economy, has recently published a revealing report on crypto crimes. The findings indicate a staggering 267% increase in global crypto-related convictions over the pas…",
      url: "https://qz.com/sam-bankman-fried-cryptocurrency-crime-prison-sentences-1851665731",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/59a22590499594fb6b4aee53e2392478.jpg",
      publishedAt: "2024-10-14T09:00:00Z",
      content:
        "Ross Ulbricht was born in 1984 in Austin, Texas, and founded the Silk Road in 2013, a notorious dark web marketplace that facilitated illegal activities such as drug trafficking through Bitcoin trans… [+719 chars]",
    },
    {
      source: {
        id: null,
        name: "Tech Xplore",
      },
      author: "Bob Yirka",
      title: "Integer addition algorithm could reduce energy needs of AI by 95%",
      description:
        "A team of engineers at AI inference technology company BitEnergy AI reports a method to reduce the energy needs of AI applications by 95%. The group has published a paper describing their new technique on the arXiv preprint server.",
      url: "https://techxplore.com/news/2024-10-integer-addition-algorithm-energy-ai.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/hires/2024/image-of-computer-scre.jpg",
      publishedAt: "2024-10-13T16:27:12Z",
      content:
        "A team of engineers at AI inference technology company BitEnergy AI reports a method to reduce the energy needs of AI applications by 95%. The group has published a paper describing their new techniq… [+2457 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Kyle Wiggers",
      title: "Crypto scammers hack OpenAI's press account on X",
      description:
        "OpenAI's official newsroom account on X was compromised by cryptocurrency scammers.",
      url: "https://techcrunch.com/2024/09/23/crypto-scammers-hack-openais-press-account-on-x/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/openAI-spiral-color-v2.jpg?resize=1200,675",
      publishedAt: "2024-09-23T22:49:57Z",
      content:
        "OpenAI’s official press account on X was compromised by cryptocurrency scammers. Or, at least that’s what appears to have happened. \r\nLate Monday afternoon, OpenAI Newsroom, an account OpenAI recentl… [+2175 chars]",
    },
    {
      source: {
        id: null,
        name: "Ritholtz.com",
      },
      author: "Barry Ritholtz",
      title: "10 Weekend Reads",
      description:
        "The weekend is here! Pour yourself a mug of  coffee, grab a seat outside, and get ready for our longer-form weekend reads: • America may be on the brink of an epic vibe shift: Stock prices at records, gas prices falling, and the Fed is cutting. Will it be eno…",
      url: "https://ritholtz.com/2024/09/weekend-reads-632/",
      urlToImage: "https://ritholtz.com/wp-content/uploads/2024/12/descent.png",
      publishedAt: "2024-09-21T10:30:14Z",
      content:
        "The weekend is here! Pour yourself a mug of  coffee, grab a seat outside, and get ready for our longer-form weekend reads:America may be on the brink of an epic vibe shift: Stock prices at records, g… [+4505 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title: "I am not Bitcoin inventor, says man named in HBO film",
      description:
        "The real identity of the person, known only as Satoshi Nakamoto, has captivated the internet for years.",
      url: "https://www.bbc.com/news/articles/c62m73my0dno",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/19a2/live/b3158730-8621-11ef-9329-f30486eb2a33.jpg",
      publishedAt: "2024-10-09T09:45:42Z",
      content:
        "A new documentary claims to have solved the greatest mystery in cryptocurrency: the true identity of the inventor of Bitcoin.\r\nThe question has captivated the internet since the digital currency was … [+3494 chars]",
    },
    {
      source: {
        id: null,
        name: "Deadline",
      },
      author: "Matthew Carey",
      title:
        "HBO’s ‘Money Electric: The Bitcoin Mystery’ Sets Out To Unmask Secretive Creator Of World’s Most Valuable Crypto Currency",
      description:
        "Like a Bansky of the crypto world, little is known about Satoshi Nakamoto, the reputed creator of the digital currency Bitcoin. What’s his real name? What’s he worth? Who is he, really? Director Cullen Hoback attempts to get to the bottom of Nakamoto’s identi…",
      url: "http://deadline.com/2024/10/money-electric-the-bitcoin-mystery-hbo-documentary-trailer-1236107405/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2024/10/Money-Electric-The-Bitcoin-Mystery-graphic.png?w=1024",
      publishedAt: "2024-10-04T15:00:00Z",
      content:
        "Like a Bansky of the crypto world, little is known about Satoshi Nakamoto, the reputed creator of the digital currency Bitcoin. What’s his real name? What’s he worth? Who is he, really?\r\nDirector Cul… [+2429 chars]",
    },
    {
      source: {
        id: null,
        name: "Socialmediaexplorer.com",
      },
      author: "Doug Brown",
      title:
        "How Bitcoin Is Empowering Social Media Creators and Changing the Game in 2024",
      description:
        "Hey, social media explorers! Today, we’re diving into one of the hottest and most exciting...\nThe post How Bitcoin Is Empowering Social Media Creators and Changing the Game in 2024 appeared first on Social Media Explorer.",
      url: "https://socialmediaexplorer.com/social-media-marketing/how-bitcoin-is-empowering-social-media-creators-and-changing-the-game-in-2024/",
      urlToImage:
        "https://socialmediaexplorer.com/wp-content/uploads/2024/10/01plavakafa.jpg",
      publishedAt: "2024-10-10T21:17:14Z",
      content:
        "Hey, social media explorers! Today, we’re diving into one of the hottest and most exciting topics for creators in 2024how Bitcoin and crypto wallets are empowering social media creators to take their… [+7357 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "news.google.com",
      title: "Bitcoin Protocol sees TVL growth as staking restrictions lift",
      description:
        "Bitcoin Protocol sees TVL growth as staking restrictions lift AMBCrypto News\nBitcoin Protocol Babylon Pulls in $1.5B of Staking Deposits as Cap Lifted CoinDesk\nBitcoin Staking Protocol Babylon Attracts About 24,000 BTC in Deposits – News Bytes Bitcoin News Bi…",
      url: "https://biztoc.com/x/57fc41fad14b06c2",
      urlToImage: "https://biztoc.com/cdn/803/og.png",
      publishedAt: "2024-10-10T14:31:34Z",
      content:
        "Bitcoin Protocol sees TVL growth as staking restrictions lift AMBCrypto NewsBitcoin Protocol Babylon Pulls in $1.5B of Staking Deposits as Cap Lifted CoinDeskBitcoin Staking Protocol Babylon Attracts… [+117 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Korok Ray, Contributor, \n Korok Ray, Contributor\n https://www.forbes.com/sites/korokray/",
      title: "Make Bitcoin Nonpartisan Again",
      description:
        "The Bitcoiner community embraced the politicians with open arms, at times fawning over the very political gatekeepers that Bitcoin, in principle, opposes.",
      url: "https://www.forbes.com/sites/digital-assets/2024/09/18/make-bitcoin-nonpartisan-again/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/66ead33a227d9d73d1376658/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      publishedAt: "2024-09-18T13:21:50Z",
      content:
        "Bitcoin\r\nJonathan Borba via Pexels\r\nBitcoin is not just for Republicans. Or Democrats. Or even Libertarians.\r\nPerhaps the most noteworthy feature of the annual Bitcoin conference this year in Nashvil… [+3772 chars]",
    },
    {
      source: {
        id: null,
        name: "20 Minutes",
      },
      author: "L.B. (20 Minutes)",
      title: "HBO pense avoir identifié Satoshi Nakamoto, l’inventeur de Bitcoin",
      description:
        "Coup de pub géant ou vraie révélation ? On en saura davantage le 8 octobre",
      url: "https://www.20minutes.fr/high-tech/20-mint/4113886-20241005-hbo-pense-avoir-identifie-satoshi-nakamoto-inventeur-bitcoin",
      urlToImage:
        "https://img.20mn.fr/S2DdQ1QwTpOhHKwxIAxkUik/1444x920_in-this-photo-illustration-a-bitcoin-logo-is-displayed-on-a-smartphone-with-stock-market-percentages-in-the-background-omar-marques-sopa-images-sopaimages-1738132-credit-sopa-images-sipa-2307191754",
      publishedAt: "2024-10-05T10:36:56Z",
      content:
        "Cest la Chouette dor sous stéroïde. Si le mystère entourant la réelle identité du créateur de Bitcoin, Satoshi Nakamoto, ne dure que depuis 2008 et non 31 ans comme pour lartefact déterré jeudi, il c… [+1739 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "go.theregister.com",
      title: "Bitcoin creator suspect says he is not Bitcoin creator suspect",
      description:
        "'If I was Satoshi I would have destroyed my ability to prove I'm Satoshi'\nThe man identified as Bitcoin creator Satoshi Nakamoto in a new HBO documentary has something to say: Wrong again, world.…",
      url: "https://biztoc.com/x/a19a9dfaca0404e1",
      urlToImage: "https://biztoc.com/cdn/803/og.png",
      publishedAt: "2024-10-09T17:12:43Z",
      content:
        "'If I was Satoshi I would have destroyed my ability to prove I'm Satoshi'The man identified as Bitcoin creator Satoshi Nakamoto in a new HBO documentary has something to say: Wrong again, world.\r\nThi… [+50 chars]",
    },
    {
      source: {
        id: null,
        name: "Techmeme.com",
      },
      author: null,
      title:
        "The FBI arrests and charges two people in Miami over a conspiracy to steal and launder 4,100+ bitcoin, worth $230M+, using crypto exchanges and mixing services (Sergiu Gatlan/BleepingComputer)",
      description:
        "Sergiu Gatlan / BleepingComputer:\nThe FBI arrests and charges two people in Miami over a conspiracy to steal and launder 4,100+ bitcoin, worth $230M+, using crypto exchanges and mixing services  —  Two suspects were arrested in Miami this week and charged wit…",
      url: "https://www.techmeme.com/240923/p4",
      urlToImage:
        "https://www.bleepstatic.com/content/hl-images/2023/11/15/Hacker_crypto_bitcoins.jpg",
      publishedAt: "2024-09-23T09:35:02Z",
      content:
        "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 5:35 AM ET, September 23, 2024.\r\nThe most current version of the site as always is available at our home page.\r\nTo… [+72 chars]",
    },
    {
      source: {
        id: null,
        name: "Olhardigital.com.br",
      },
      author: "Pedro Spadoni",
      title:
        "Documentário da HBO promete revelar identidade do criador do Bitcoin",
      description:
        '"Money Electric: The Bitcoin Mystery" promete revelar a identidade de Satoshi Nakamoto, pseudônimo da (suposta) pessoa que criou o Bitcoin\nO post Documentário da HBO promete revelar identidade do criador do Bitcoin apareceu primeiro em Olhar Digital.',
      url: "https://olhardigital.com.br/2024/10/07/pro/documentario-da-hbo-promete-revelar-identidade-do-criador-do-bitcoin/",
      urlToImage:
        "https://olhardigital.com.br/wp-content/uploads/2024/06/Destaque-Satoshi-Nakamoto-criador-do-bitcoin-scaled.jpg",
      publishedAt: "2024-10-07T15:03:12Z",
      content:
        "Um novo documentário da HBO promete revelar a verdadeira identidade de Satoshi Nakamoto, pseudônimo usado pela suposta pessoa que criou o Bitcoin. Money Electric: The Bitcoin Mystery vai ao ar nesta … [+2120 chars]",
    },
  ];
  
  
  const news_container = document.querySelector(".news-container")
  const search_input = document.querySelector('.search-input');
  const search_btn = document.querySelector('.search-icon');
  const element = document.querySelector(".full-page");
  
  // news show
  function showNews(data) {
      news_container.innerHTML = "";
    data.forEach((news) => {
      console.log(news);
      if(news.urlToImage != null){
          const news_card = document.createElement("div");
          const news_source = document.createElement("span");
          const news_image = document.createElement("img");
          const news_content = document.createElement("div");
          const news_heading = document.createElement("h3");
          const news_info = document.createElement("span");
          const news_desc = document.createElement("p");
      
          news_source.innerText = news.source.name;
          news_source.className = "news-source"
      
          news_image.setAttribute("src", news.urlToImage);
          news_image.className = "news-image";
      
          news_content.className = "news-content";
      
          news_heading.textContent = news.title;
          news_heading.className = "news-heading";
      
          news_info.textContent = news.author + " " + new Date(news.publishedAt).toLocaleString();;
          news_info.className = "news-info";
      
          news_desc.textContent = news.description;
          news_desc.className = "news-desc";
      
          news_content.appendChild(news_heading)
          news_content.appendChild(news_info)
          news_content.appendChild(news_desc)
      
          news_card.className = "news-card";
          news_card.appendChild(news_source)
          news_card.appendChild(news_image)
          news_card.appendChild(news_content)
      
          news_container.appendChild(news_card)
      }
    });
  }
  
  function loadNews() {
    console.log("Loading...");
    showNews(data);
  }
  loadNews();
  
  // filter based on popularity, date published and relevancy
  const filterSelect = document.querySelector(".filter");
  
  filterSelect.addEventListener("change", function () {
    const selectedValue = filterSelect.value;
    applyFilter(selectedValue);
  });
  
  function applyFilter(criteria) {
      let sortedNews = [];
    
      switch (criteria) {
        case "relevancy":
          sortedNews = [...data]; // Create a copy to maintain the original order
          break;
    
        case "popularity":
          // Sort by author name in lexicographical order
          sortedNews = [...data].sort((a, b) => {
            const authorA = a.author ? a.author.toLowerCase() : ""; 
            const authorB = b.author ? b.author.toLowerCase() : ""; 
            return authorA.localeCompare(authorB);
          });
          break;
    
        case "publishedAt":
          sortedNews = [...data].sort((a, b) => {
            return new Date(b.publishedAt) - new Date(a.publishedAt);
          });
          break;
    
        default:
          sortedNews = [...data];
          break;
      }
    
      showNews(sortedNews);
    }
    
  // search functionality
  search_input.addEventListener("input", function () {
      const searchTerm = search_input.value.toLowerCase();
    
      const filteredNews = data.filter((news) => {
        const title = news.title ? news.title.toLowerCase() : ""; 
        const author = news.author ? news.author.toLowerCase() : "";
    
        return (
          title.includes(searchTerm) || 
          author.includes(searchTerm)
        );
      });
    
      // Re-render the news with filtered results
      showNews(filteredNews);
  });
    
    