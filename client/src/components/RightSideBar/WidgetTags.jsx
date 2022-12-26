import React from 'react'
import './RightSideBar'

const WidgetTags = () => {

    const tags = [ 'css',  'express',   
     'html', 'java', 'javascript','mern','mongodb','mysql','next.js','node.js','php','reactjs'];

  return (
    <div className='widget-tags'>
      <h3 style={{fontSize:'15px',marginLeft:'5px'}}>Watched Tags</h3>
      <div className="widget-tags-div">
        {
            tags.map((tag)=>(
                <p key={tag}>{tag}</p>
            ))
        }
      </div>
    </div>
  )
}

export default WidgetTags
