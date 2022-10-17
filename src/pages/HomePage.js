import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import SmallCard from "../components/SmallCard";
import CardHome from "../components/CardHome";
import {useDetailsContextConsumer} from '../Context/detailsContext';//HOC

const HomePage = () => {
  const {details} = useDetailsContextConsumer();
  const arrInd = ()=>{ return Math.floor(Math.random() * 50)};//to get random data
  const latest = [details[arrInd()], details[arrInd()], details[arrInd()]]
  const latest2 = [details[arrInd()], details[arrInd()], details[arrInd()]]
  const latestarticles = [details[arrInd()], details[arrInd()], details[arrInd()], details[arrInd()], details[arrInd()]]
  const topposts = [details[arrInd()], details[arrInd()], details[arrInd()], details[arrInd()]] 

  return (
    <div className="home_container">
      <div className="banner-image">
        <div className="main-image" >
          <Link className="link" to="/bollywood">
            <img
              src="data:image/jpeg;base64,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"
              alt="sub-img"></img>
           
          </Link>
        </div>
        <div className="sub-images">
          <Link to="/technology">
            <img
              src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="sub-img"
              // src={details[arrInd()].Image}
            />
          </Link>

          <Link to="/fitness">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
              alt="sub-img"
            />
          </Link>
        </div>
      </div>
      <div className="latest_news">
        <h1 className="title">The Latest</h1>
        <div className="row_container">
            { latest
              .map((n) => (
                <CardHome 
                  key={n.id}
                  articleid={n.id}
                  imgUrl={n.Image}
                  title={n.title}
                  description={n.description.slice(0, 200)}
                  author={n.author}
                  category={n.category}
                  date={n.date}
                />
              ))}

        </div>
      </div>
      <div className="category_page">
        <div className="column_main">
          <h1 className="title head-title">Latest Article</h1>
          { latestarticles
            .map((n) => (
              <Card
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className="sub_column">
          <h1 className="side_title title">Top Posts</h1>
          {topposts
            .map((n) => (
              <SmallCard
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title.slice(0, 25)}
                category={n.category}
                date={n.date}
                description={n.description}
              />
            ))}
            <div className="advertisements"><img src="https://www.abetterchoice.com.au/app/uploads/2018/10/shutterstock_684164470.jpg" alt="ads"/>
              <h4>Advertisements</h4>
          </div>
        </div>
      </div>
      <div className="latest_news">
        <h1 className="title">The Latest</h1>
        <div className="row_container">
          
            {latest2
              .map((n) => (
                <CardHome 
                  key={n.id}
                  articleid={n.id}
                  imgUrl={n.Image}
                  title={n.title}
                  description={n.description.slice(0, 200)}
                  date={n.date}
                  category={n.category}
                />
              ))}
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
