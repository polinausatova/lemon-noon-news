
import './App.css';

import { Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Header from './components/Header'
import Articles from './components/Articles'
import SingleArticle from './components/SingleArticle'
import CommentsList from './components/CommentsList'
import AddComment from './components/AddComment'
import Topics from './components/Topics'
import Users from './components/Users'


function App() {
  return (
    <div className="App">

    <Nav />
    <Header />

    <Routes>

    <Route path="/" element={
      <Articles />
    }
    />

    <Route path="/articles" element={
      <Articles />
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

    <Route path="/topics" element={
      <Topics />
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
