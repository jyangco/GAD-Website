import React, { useState } from 'react'

import Layout from '../components/Layout'
import EventsPage from './EventsPage'

function Gallery() {
    const [show, setShow] = useState(false)
    const [event, setEvent] = useState("")
    const [cover, setCover] = useState("")
    const [linkAdd, setLinkAdd] = useState("")

    const handleShow = (e,i,l) => {
        setShow(true)
        setEvent(e)
        setCover(i)
        setLinkAdd(l)
    }

    const closeModal = (e) => {
        e.preventDefault()
        setShow(false)
        setEvent("")
        setCover("")
        setLinkAdd("")
    }

    if (show == true) {
        return(
            <EventsPage
                header={
                    <div className="flex text-xl mobile-lg:text-lg">
                        <button className="p-1" type="button" onClick={closeModal}>
                            <i className="fas fa-long-arrow-left"></i>
                        </button>
                        <div className="p-1 font-bold"> {event} </div>
                    </div>
                }
                cover={cover}
                title={event}
                link={linkAdd}
                body={
                    cover == "NWMC" ?
                    <div className="py-10">
                        <div className="container mx-auto text-xl mobile-lg:text-lg">
                            <p>The observance of International Women’s Day (IWD) was a result of the organizing activities of women in the early 20th Century. Between 1909 and 1911, working women in the United States of America participated in organizing strike activities of the National Women’s Trade Union League and other concerned groups. They were protesting against low wages, lack of protective legislation and the very poor working conditions to which women workers were subjected during that time. </p> <br/>
                            <p>The demonstrations were an offshoot of the tragic March 1911 Triangle Shirtwaist Factory fire in New York City, which took the lives of more than 140 working girls, mostly Italian and Jewish immigrants. Subsequently, the inhumane working conditions and other unfair labor practices leading up to the disaster were invoked during observances of IWD. </p> <br/>
                            <p>In Europe, Clara Zetkin and the Socialist Women’s International demanded that March 8th be International Women’s Day, celebrated each year to recognize working women around the world. The celebration of IWD has since stimulated major historical events. For instance, IWD was the inspiration for the general strike, which began the Russian Revolution in St. Petersburg in 1917 when 10, 000 women textile workers demonstrated. </p> <br/>
                            <p>It is due to such a history of women organizing around the world that IWD was officially recognized by the United Nations to celebrate women’s contributions to all societies. </p> <br/>
                            <p>In the Philippines, the Women’s Month Celebration has since served as a venue to highlight women’s achievements and discuss continuing and emerging women’s empowerment and gender equality issues and concerns, challenges, and commitments. The celebration focuses on concrete activities that are aligned with national and international instruments and treaties such as the Convention on the Elimination of All Forms of Discrimination Against Women, the Beijing Platform for Action, the Philippine Plan for Gender-Responsive Development (1995-2025), the Framework Plan for Women, and the Sustainable Development Goals. </p> <br/>
                        </div>
                        <hr className='my-5' />
                        <div className="container mx-auto text-xl mobile-lg:text-lg">
                            <p className='font-bold'>Legal Mandates:</p> <br/>
                            <p>The passage of the following laws serves as the legal bases for the celebration of National Women’s Month:</p> <br/>
                            <p><strong> Proclamation No. 224 s. 1988, “Declaring the First Week of March of Every Year as Women’s Week and March 8, 1988, and Every Year Thereafter as Women’s Rights and International Peace Day.”</strong> Signed by former President Corazon C. Aquino on March 1, 1988, it affirmed our solidarity with the United Nations and recognized Filipino women’s contribution to the struggle for national independence, civil liberties, equality, and human rights.</p> <br/>
                            <p><strong> Proclamation No, 227 s. 1988, “Providing for the observance of the Month of March as ‘Women’s Role in History’ Month” </strong> Signed by President Aquino on March 17, 1988, reinforced the earlier proclamation by emphasizing the role of Filipino women in the social, cultural, economic and political development throughout our history. It provided for a month-long nationwide observance with appropriate ceremonies and activities to be spearheaded by the Commission.</p> <br/>
                            <p><strong> R.A. 6949 s. 1990, “An Act to Declare March Eight of Every Year as a Working Special Holiday to be Known as National Women’s Day” </strong> was signed by President Aquino on April 10, 1990. The law further strengthened the impetus for the celebration by declaring every March 8 as a special working holiday and enjoining employees from the government and private sector to participate in activities conducted by their offices.</p> <br/>
                        </div>
                        <div className="flex justify-end text-xl mobile-lg:text-lg">
                            <a className="text-blue-500 underline underline-offset-4" href={"https://pcw.gov.ph/national-womens-month/"} target='_blank'>
                                To know more about Women's Month visit the PCW Website 
                                <i className="fas fa-link p-1 ms-1"></i>
                            </a>
                        </div>
                    </div> : 
                    <div className="py-10">
                        <div className="container mx-auto text-xl mobile-lg:text-lg">
                            <p>Violence against women (VAW) and girls is not just a major public health problem but also a grave violation of human rights. It manifests gender inequity, targeting women and girls because of their subordinate status in society. The United Nations defines VAW as “any act of gender-based violence that results in, or likely to result in, physical, sexual, or mental harm or suffering to women, including threats of such acts, coercion or arbitrary deprivation of liberty, whether occurring in public or private life.” Violence and the threats of violence can be experienced by every woman of any age, skin color, gender identity, ethnicity, religion, disabilities, economic, and social status.</p> <br/>
                            <p>Global estimates by the World Health Organization indicate that about 1 in 3 women (35%) worldwide have experienced either physical and/or sexual violence from an intimate partner or non-partner in their lifetime. In the Philippines, the National Demographic Health Survey 2017 released by the Philippine Statistics Authority revealed that 1 in 4 Filipino women, aged 15-49, has experienced physical, emotional, or sexual violence from their husbands or partners.</p> <br/>
                            <p>Because VAW appears as one of the country’s pervasive social problems, various measures and mechanisms have been employed and implemented to address it. One of which is the 18-Day Campaign to End VAW, an advocacy campaign that is observed annually from November 25 to December 12 as mandated by Proclamation 1172 s. 2006.</p> <br/>
                        </div>
                        <div className="flex justify-end text-xl mobile-lg:text-lg">
                            <a className="text-blue-500 underline underline-offset-4" href={"https://pcw.gov.ph/18-day-campaign-to-end-vaw/"} target='_blank'>
                                To know more about the 18-Day Campaign visit the PCW Website 
                                <i className="fas fa-link p-1 ms-1"></i>
                            </a>
                        </div>
                        <hr className="my-5" />
                        <div className="container mx-auto text-xl mobile-lg:text-lg">
                            <p className="font-bold"> VAW includes, but is not limited to, the following acts: </p> <br/>
                            <ul className='list-disc'>
                                <li>Physical violence or the act that includes bodily harm</li>
                                <li>Sexual violence or the act that is sexual in nature, committed against a woman or her child</li>
                                <li>Psychological violence or the act or omission that causes or is likely to cause mental or emotional suffering of the victim</li>
                                <li>Economic abuse or the act that makes or attempts to make a woman financially dependent</li>
                            </ul>
                        </div>
                        <div className="flex justify-end text-xl mobile-lg:text-lg">
                            <a className="text-blue-500 underline underline-offset-4" href={"https://pcw.gov.ph/violence-against-women/"} target='_blank'>
                                To know more about VAW visit the PCW Website 
                                <i className="fas fa-link p-1 ms-1"></i>
                            </a>
                        </div>
                    </div>
                }
            />
        )
    } else {
        return(
            <Layout>
                <div className="mx-14 p-5 mobile-lg:!mx-5 mobile-lg:!p-2 h-[100vh] overflow-auto">
                    <div className="ribbon">
                        <strong className="ribbon-content text-4xl"> IEC Materials / Gallery </strong>
                    </div>
                    <div className="flex mobile-lg:justify-center flex-start flex-wrap">
                        <div className="highlights mobile-lg:m-1 mx-5 w-[220px] h-[220px] px-5 py-[72px] text-3xl text-center rounded-full border border-violet border-[15px]"
                            onClick={
                                () => handleShow("National Women's Month Celebration", "NWMC", "/IEC-Materials/Gallery/NWMC")
                            } 
                        >
                            NWMC
                        </div>
                        <div className="highlights2 mobile-lg:m-1 mx-5 py-8 w-[220px] h-[220px] px-5 py-[72px] text-3xl text-center rounded-full border border-violet border-[15px]"
                            onClick={
                                    () => handleShow("18-Day Campaign to End VAW", "VAW", "/IEC-Materials/Gallery/VAW")
                                }
                            >
                            VAW
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Gallery