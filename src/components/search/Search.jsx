import React from 'react'
import './SearchStyles.css'

import Logo from '../video/logo.png'

function Search() {
    return (
        <div name='shops' className='search'>
            <div className="container">
                <div className="left">
                  <div className='about'> <h2>About-Us:</h2></div> 
                    <p>Vi är slackers. De moderna klimathjältarna. Den typen av människor som hjälper till att rädda världen genom att göra det mest grundläggande som finns - äta mat.

Vi driver världens minst ambitiösa, mest smakrika klimatrörelse: Radical Slacktivism. För att bekämpa överproduktion och utplåna matsvinn.
Säkerhet börjar med förståelsen av hur utvecklare samlar in och delar din data.Praxis för dataintegritet och säkerhet varierar beroende på användning, region och ålder. Utvecklaren har tillhandahållit denna information och kan uppdatera den med tiden.

Globalt slängs mer än ⅓ av all mat – vilket innebär en stor belastning på vår planet. Matsvinnet står för 10% av växthusgasutsläppen, och vi använder en landmassa lika stor som Kina för att producera all mat som slängs. Orimligt, eller hur?

På Too Good To Go är vi fast beslutna att få bukt med problemet. I vår app kan du rädda god, osåld mat från företag och på så vis förhindra att den slängs i onödan.

Appen är ett viktigt verktyg som hjälper oss att driva vårt arbete för ett minskat matsvinn. Vi samarbetar både med skolor, företag och beslutsfattare för att lyfta matsvinnsfrågan och skapa ett nytt synsätt på livsmedelskedjan i stort.
</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Logo} alt="/" style={{ marginLeft: '-7rem' }} />
                            </div>
                            <div>
                                <h3>@Mail:</h3>
                            <div className='pp'>
                                <p>https://toogoodtogo.se/sv/consumer </p></div>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>Telephone Numbers:</h3>
                                <div className='ppp'>
                                <p>+(46)9OO-631-016</p>
                                <p>+(46)9OO-631-015</p>
                                </div>
                                <button>View Product</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className='promo'>
                        <h4 className="save">GET  YOUR PRODUCTS FOR 50%</h4>
                        <p className='timer'>ONE HOUR LEFT</p>
                        <p className='offers'><a href="https://affarer365.com/willys/willys-reklamblad-187184/">VIEW ALL THE CURRENT OFFERS</a></p>
                    </div>
                    <form>
                        <div className='input-wrap'>
                            <label>SHOPS</label>
                            <select>
                                <option value="5">Knivsta Lidell</option>
                                <option value="6">Knivsta Coop</option>
                                <option value="7">Knivsta Willys</option>
                                <option value="7">Knivsta ICA</option>
                                <option value="5">Stockholm Lidell</option>
                                <option value="6">Stockholm Coop</option>
                                <option value="7">Stockholm Willys</option>
                                <option value="7">Stockholm ICA</option>
                                <option value="1">Uppsala Lidell</option>
                                <option value="2">Uppsala Coop</option>
                                <option value="3">Uppsala Willys</option>
                                <option value="4">Uppsala ICA</option>
                            </select>
                        </div>
                        <div className='date'>
                          
                            <div className='input-wrap'>
                                
                                <button>Valid</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search