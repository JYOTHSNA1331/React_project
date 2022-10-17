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
