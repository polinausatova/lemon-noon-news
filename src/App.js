
import './App.css';

import { Routes, Route } from 'react-router-dom'
import { useState, useEffect} from "react";

import { getTopics } from './utils/api'

import Nav from './components/Nav'
import Header from './components/Header'

import Articles from './components/Articles'
import SingleArticle from './components/SingleArticle'
import CommentsList from './components/CommentsList'
import AddComment from './components/AddComment'
import Topics from './components/Topics'
import Users from './components/Users'


function App() {

  const [topicsList, setTopics] = useState([
    'all topics',
    'coding', 
    'football', 
    'cooking'
  ]);

  const [topicsObjects, setTopicsObjects] = useState([]);

  useEffect(() => {
    getTopics()
    .then((topics) => {
      setTopicsObjects(topics);
      const topicsListUpdated = ['all topics', ...topics.map((topic) => {return topic.slug;})];
      setTopics(topicsListUpdated);
    });  
  }, [])

  return (
    <div className="App">

      <Nav />
      <Header />

      <Routes>
        <Route path="/"  element={
          <Articles topicsList = {topicsList}/>
        }
        />

        <Route path="/articles"  element={
          <Articles topicsList = {topicsList}/>
        }
        />

        <Route path="/articles/:article_id" element={
          <SingleArticle />
        }
        />

        <Route path="/articles/:article_id/comments" element={
          <CommentsList />
        }
        />

        <Route path="/articles/:article_id/comments" element={
          <AddComment />
        }
        />

        <Route path="/topics"  element={
          <Topics topicsObjects = {topicsObjects}/>
        }
        />

        <Route path="/users" element={
          <Users />
        }
        />
      </Routes>
    </div>
  );
}

export default App;