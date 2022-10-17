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
