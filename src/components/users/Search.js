import React, {useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
  // state = {
  //   text: ''
  // };
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)
  const [text,setText] = useState('')

  const onSubmit = (e) =>{
    e.preventDefault();
    // Setting up allert
    if (text === ''){
      alertContext.setAlert('Please enter something','danger')
    }else{
      // console.log(this.state.text)
      // Passing prop up
      githubContext.searchUsers(text)
      // clearing text field
      setText('');
    }
    
  }

  const onChange = (e) => {
    setText(e.target.value);
  }
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input type="text" name="text" placeholder="Find Users..."  value = {text} onChange ={onChange}/>
        <input type="submit" value='Search' className="btn btn-green btn-block" />
      </form>
      {githubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear Everything</button>}
      
    </div>
  )
  
}

export default Search
