import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import CardHome from '../Components/CardHome'
import SmallCard from '../Components/SmallCard'
import { store } from './Details'

const Home = () => {

  const [detail, setDetail] = useContext(store);
  return (

    <div>
    <div  className='Home'>
      
        <div className="home__container">
      <div className="home__first">
        <h1>Title of Verticle gallery</h1>
      </div>
      <div className="home__sec">
       <Link to="/fitness" > <img src="data:image/jpeg;base64,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" alt="not foun" /></Link>
       
      </div>
      </div>
      
      <div className="home__thir">
      <h4>The Sound Cloud</h4>
       <Link to='/technology'>   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOd1x6Q162tcFcditddVmvsCuaLdYHyw2I1k62qIqLPVb5CgarfYsor7ZsRLQj4iNWiQg&usqp=CAU" alt="not found" /></Link>
          </div>
          <h1 style={{marginTop:"40px"}}>The Latest</h1>
          <hr style={{width:"200px",  thickness:"20px"}} />
          <div className='home__left left1'>
                    {
                        detail.filter((article) => { return article.category === "bollywood" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
          <div className='home__left left1'>
                    {
                        detail.filter((article) => { return article.category === "technology" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
          <div className='home__left left1'>
                    {
                        detail.filter((article) => { return article.category === "food" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <h1 style={{marginTop:"40px", display : "inline-block"}}>Latest Articles</h1>
                
                <h1 className='Top' >Top Posts</h1>
                <hr style={{width:"200px",  thickness:"20px",}} />
                

                <div className='rightbar2'>
                    {
                        detail.filter((article) => { return article.category === "mix" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <div className="sidebar2">
                    {
                        detail.filter((article) => { return article.category === "mix" }).map((n) => (
                            <SmallCard
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                                author={n.author}
                            />
                        ))
                    }

                    <div className='advertisement'>
                        <img src="https://i.pinimg.com/564x/44/69/c7/4469c769cb0d648dedccabe24d6fab8e--mcdonalds-internship.jpg" alt="Not Found"/>
                       
                    </div>
                </div>
                <h1 style={{marginTop:"40px", display : "inline-block"}}>Latest Stories</h1>
                <hr />

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer1" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer2" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer3" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                    
    </div>
  
    </div>
  )
}

export default Home