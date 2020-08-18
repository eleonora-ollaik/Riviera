import React, { Component } from 'react';
import LandingPage from './pages/landingpage'
import Header from './components/header/header'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      renderPage: <LandingPage/>,
      alertChangePage: false,
    }
  }

  setAlertChangePageToTrue = () => {
    this.setState({alertChangePage: true})
  }

  handleNavigation = (component) => {
    if (this.alertChangePage) {
      if(window.confirm('Are you sure you want to change page?')) {
        this.setState({renderPage: component})
      } else {
        return;
      }
    } else {
      this.setState({renderPage: component})
    }
  }

  render () {
    const {renderPage} = this.state;
  
  return (
  <div className='App'>
    <Header currentPage={renderPage} handleNavigation={this.handleNavigation}/>
    <div className='content-area'>
    {renderPage}
    </div>
  </div>
  );
}
}

export default App;

// <span>Photo by <a href="https://unsplash.com/@delasoul_ng?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nurgul Bz</a> on <a href="https://unsplash.com/s/photos/issyk-kul?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
