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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Snake_River_%285mb%29.jpg/1200px-Snake_River_%285mb%29.jpg"
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
